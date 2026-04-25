# DevOps y Configuración

> **Tipo:** DEVOPS_CONFIG · **Duración estimada:** 240 min · **Nivel:** Básico

## Objetivo

Configurar un pipeline de CI/CD completo con GitHub Actions para un proyecto Node.js: install, lint, test y build en cada push/PR.

## Instrucciones

### 1. Prepara tu entorno

```bash
git clone <url-de-tu-repositorio>
cd workshop-devops-config/starter-code
pnpm install
```

### 2. Crea el workflow de GitHub Actions

Crea el archivo `.github/workflows/ci.yml` con la siguiente estructura mínima:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm test
      - run: pnpm build
```

### 3. Verifica el YAML localmente

```bash
# Instala actionlint para validar el schema
npx actionlint .github/workflows/ci.yml
```

### 4. Haz push y verifica en GitHub

Sube tu rama, abre un PR y verifica que el workflow pase en la pestaña **Actions**.

## Criterios de evaluación

| Métrica | Peso | Umbral |
|---|---|---|
| Archivo CI existe | 20% | `.github/workflows/ci.yml` presente |
| Schema válido | 30% | YAML válido según schema de GitHub Actions |
| Pipeline exitoso | 50% | Todos los check runs pasan en GitHub |

## Recursos

- [GitHub Actions quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart)
- [actions/setup-node](https://github.com/actions/setup-node)
- [pnpm/action-setup](https://github.com/pnpm/action-setup)
