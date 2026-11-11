(() => {
  "use strict";
  const ENDPOINT = "https://dteimbhwtzghhsijeeld.supabase.co/rest/v1/rpc/registrar_accion_recurso_bda";
  const KEY = "sb_publishable_tHbo1jTeW_dC90hdA5DvyQ_a6LrfKpq";
  function registrar(herramienta, formato, accion) {
    if (!globalThis.crypto || typeof crypto.randomUUID !== "function") return;
    const autorizado = (herramienta === "lsp" && formato === "png" && accion === "descarga_solicitada") ||
      (herramienta === "braille" && formato === "impresion" && accion === "impresion_iniciada");
    if (!autorizado) return;
    const payload = JSON.stringify({
      p_evento_id: crypto.randomUUID(),
      p_herramienta: herramienta,
      p_formato: formato,
      p_accion: accion
    });
    try {
      void fetch(ENDPOINT, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        cache: "no-store",
        keepalive: true,
        headers: { apikey: KEY, "Content-Type": "application/json" },
        body: payload
      }).catch(() => {});
    } catch { /* El seguimiento nunca interrumpe la descarga educativa. */ }
  }
  function registrarDescargaLsp() { registrar("lsp","png","descarga_solicitada"); }
  function registrarImpresionBraille() { registrar("braille","impresion","impresion_iniciada"); }
  Object.defineProperty(window, "EVARecursosBDA", {
    configurable: false, enumerable: false, writable: false,
    value: Object.freeze({ registrarDescargaLsp, registrarImpresionBraille })
  });
})();
