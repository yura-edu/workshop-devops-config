/**
 * Simple Express-like app module.
 * This is the project you must configure a CI/CD pipeline for.
 */

function createApp(config = {}) {
  const routes = []

  function get(path, handler) {
    routes.push({ method: 'GET', path, handler })
  }

  function handle(method, path) {
    const route = routes.find(
      (r) => r.method === method.toUpperCase() && r.path === path,
    )
    if (!route) return { status: 404, body: { error: 'Not found' } }
    return route.handler()
  }

  if (config.healthCheck !== false) {
    get('/health', () => ({ status: 200, body: { ok: true } }))
  }

  return { get, handle }
}

module.exports = { createApp }
