import { chromium } from "playwright";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const tracker=await readFile(new URL("../estadisticas/recursos-bda.js",import.meta.url),"utf8");
const viewer=await readFile(new URL("../lsp/visor-senas.js",import.meta.url),"utf8");
const html=await readFile(new URL("../lsp/index.html",import.meta.url),"utf8");
assert.ok(html.includes('estadisticas/recursos-bda.js?v=2'),"No se carga el rastreador");
assert.ok(html.indexOf('recursos-bda.js?v=1')<html.indexOf('visor-senas.js?v=2'),"Orden incorrecto");
assert.ok(!tracker.includes("palabra"),"El cliente no debe transmitir palabras");
const url="https://crebeucayali.github.io/banco-digital-accesible/lsp/";
const png=Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAFUlEQVR4nGP8//8/AzbAhFV00EoAAFbUAw037MyjAAAAAElFTkSuQmCC","base64");
const browser=await chromium.launch({headless:true});
try{
for(const mobile of [false,true]){
 const context=await browser.newContext({acceptDownloads:true,viewport:mobile?{width:390,height:844}:{width:1280,height:800},hasTouch:mobile});
 const page=await context.newPage();
 const events=[];
 await page.route("**/*",async route=>{
  const u=route.request().url();
  if(u.includes("/rpc/registrar_accion_recurso_bda")){
   events.push(JSON.parse(route.request().postData()||"{}"));
   return route.fulfill({status:503,headers:{"access-control-allow-origin":"*"},contentType:"application/json",body:'{"error":"offline-simulado"}'});
  }
  if(u.endsWith("/imagenes/adjetivos/abierto.png"))return route.fulfill({status:200,body:png,contentType:"image/png"});
  return route.fulfill({status:200,contentType:"text/html",body:"<!doctype html><html><head><meta charset='utf-8'></head><body><div id='galeria'><article class='tarjeta'><img class='imagen-sena' src='imagenes/adjetivos/abierto.png' alt='Seña de prueba'><h3 class='palabra-tarjeta'>abierto</h3><p class='fuente-tarjeta'>Fuente de ejemplo</p></article></div></body></html>"});
 });
 await page.goto(url,{waitUntil:"domcontentloaded"});
 await page.addScriptTag({content:tracker});
 await page.addScriptTag({content:viewer});
 await page.locator(".imagen-sena").click();
 assert.equal(events.length,0,"Abrir imagen no debe registrar descarga");
 assert.equal(await page.locator(".visor-senas").isVisible(),true);
 assert.equal(await page.locator(".visor-senas-descarga").getAttribute("download"),"abierto.png");
 const [download]=await Promise.all([
   page.waitForEvent("download",{timeout:15000}),
   page.locator(".visor-senas-descarga").click()
 ]);
 assert.equal(download.suggestedFilename(),"abierto.png");
 assert.ok(await download.path(),"La imagen debe seguir descargándose aunque el RPC falle");
 await page.waitForTimeout(200);
 assert.equal(events.length,1,"Debe registrarse exactamente una solicitud PNG");
 assert.deepEqual(Object.keys(events[0]).sort(),["p_accion","p_evento_id","p_formato","p_herramienta"]);
 assert.equal(events[0].p_herramienta,"lsp");
 assert.equal(events[0].p_formato,"png");
 assert.equal(events[0].p_accion,"descarga_solicitada");
 assert.match(events[0].p_evento_id,/^[0-9a-f-]{36}$/);
 await page.locator(".visor-senas-cerrar").click();
 assert.equal(events.length,1,"Cerrar visor no es descarga");
 console.log((mobile?"Móvil simulado":"Escritorio")+": descarga real PNG, registro único, sin contenido y tolerancia a fallo del RPC aprobados");
 await context.close();
}
} finally {await browser.close();}
