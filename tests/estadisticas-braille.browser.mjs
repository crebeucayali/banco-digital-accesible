import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const html=await readFile(new URL("../braille/index.html",import.meta.url),"utf8");
const js=await readFile(new URL("../braille/practica.js",import.meta.url),"utf8");
const tracker=await readFile(new URL("../estadisticas/recursos-bda.js",import.meta.url),"utf8");
assert.match(html,/estadisticas\/recursos-bda\.js\?v=2/);
assert.ok(html.indexOf('recursos-bda.js?v=2')<html.indexOf('practica.js?v=2'));
const origin="https://crebeucayali.github.io/banco-digital-accesible/braille/index.html";
const browser=await chromium.launch({headless:true});
try {
 for(const mobile of [false,true]){
  const context=await browser.newContext({viewport:mobile?{width:390,height:844}:{width:1280,height:840},isMobile:mobile,hasTouch:mobile});
  const page=await context.newPage();
  const events=[];
  await page.route("**/*",async route=>{
   if(route.request().url().includes("/rpc/registrar_accion_recurso_bda")){
    events.push(JSON.parse(route.request().postData()||"{}"));
    return route.fulfill({status:503,headers:{"access-control-allow-origin":"*"},contentType:"application/json",body:'{"error":"simulado"}'});
   }
   if(route.request().url().startsWith("https://crebeucayali.github.io/banco-digital-accesible/braille/index.html"))
    return route.fulfill({status:200,contentType:"text/html",body:html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/gi,"").replace(/<script\b[^>]*>[^<]*<\/script>/gi,"")});
   return route.fulfill({status:200,body:"",contentType:"text/plain"});
  });
  await page.goto(origin,{waitUntil:"domcontentloaded"});
  await page.addScriptTag({content:tracker});
  await page.addScriptTag({content:js});
  await page.evaluate(()=>{window.__printCalls=0;window.print=()=>{window.__printCalls++;};});
  assert.equal(events.length,0);
  await page.locator("#imprimir-constancia").evaluate(el=>el.click());
  assert.equal(await page.evaluate(()=>window.__printCalls),0,"No imprimir sin constancia");
  await page.locator("#nombre-participante").fill("Nombre privado de evaluación");
  await page.evaluate(()=>{
   for(const [k,v] of Object.entries(respuestasCorrectas)){
     const input=[...document.querySelectorAll("input[type=radio]")].find(el=>el.name===k && el.value===v);
     if(!input)throw new Error("Falta respuesta "+k);
     input.checked=true;
   }
  });
  await page.locator("#formulario-practica button[type=submit]").click();
  await page.locator("#ver-constancia").click();
  assert.equal(await page.locator("#constancia-dialogo").evaluate(x=>x.open),true);
  await page.locator("#imprimir-constancia").click();
  await page.waitForTimeout(250);
  assert.equal(await page.evaluate(()=>window.__printCalls),1);
  assert.equal(events.length,1,"Imprimir debe emitir una sola acción");
  assert.deepEqual(Object.keys(events[0]).sort(),["p_accion","p_evento_id","p_formato","p_herramienta"]);
  assert.deepEqual([events[0].p_herramienta,events[0].p_formato,events[0].p_accion],["braille","impresion","impresion_iniciada"]);
  assert.ok(!JSON.stringify(events).includes("Nombre privado"),"No transmitir nombre");
  assert.ok(!JSON.stringify(events).includes("EVA-BRL"),"No transmitir código");
  assert.ok(!JSON.stringify(events).includes("100"),"No transmitir nota");
  await page.locator("#cerrar-constancia").click();
  assert.equal(events.length,1,"Cerrar no es impresión");
  console.log((mobile?"Móvil simulado":"Escritorio")+": impresión iniciada de constancia 100%, RPC no bloqueante y privacidad validados");
  await context.close();
 }
}finally{await browser.close();}
