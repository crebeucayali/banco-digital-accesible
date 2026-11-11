(() => {
  "use strict";
  const ENDPOINT = "https://dteimbhwtzghhsijeeld.supabase.co/rest/v1/rpc/registrar_accion_recurso_bda";
  const KEY = "sb_publishable_tHbo1jTeW_dC90hdA5DvyQ_a6LrfKpq";
  function registrarDescargaLsp() {
    if (!globalThis.crypto || typeof crypto.randomUUID !== "function") return;
    const payload = JSON.stringify({
      p_evento_id: crypto.randomUUID(),
      p_herramienta: "lsp",
      p_formato: "png",
      p_accion: "descarga_solicitada"
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
  Object.defineProperty(window, "EVARecursosBDA", {
    configurable: false, enumerable: false, writable: false,
    value: Object.freeze({ registrarDescargaLsp })
  });
})();
