#!/bin/bash
# Inicializa Git y crea primer commit + rama de trabajo
set -e
if [ ! -d ".git" ]; then
  echo "Inicializando repo Git..."; git init
fi
git add .
git commit -m "chore: initial commit SuppleSense MVP Cursor Ready" || true
echo "Creando rama de trabajo feature/lote-1..."
git checkout -b feature/lote-1 || git checkout feature/lote-1
echo "Listo. Estás en la rama:"
git branch --show-current
