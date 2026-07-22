# Script para subir el portafolio a GitHub
# Ejecuta este script después de crear el repositorio en GitHub

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Subiendo portafolio a GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en la carpeta correcta
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: No se encontró el repositorio Git" -ForegroundColor Red
    Write-Host "   Asegúrate de estar en la carpeta del proyecto" -ForegroundColor Yellow
    exit 1
}

Write-Host "📦 Verificando estado del repositorio..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "🔗 Verificando conexión remota..." -ForegroundColor Yellow
git remote -v

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "⚠️  IMPORTANTE: Antes de continuar" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. ¿Ya creaste el repositorio en GitHub?" -ForegroundColor White
Write-Host "   👉 https://github.com/new" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Nombre del repositorio: portafolio-gael" -ForegroundColor White
Write-Host ""
Write-Host "3. NO inicialices con README, .gitignore o license" -ForegroundColor White
Write-Host ""

$continue = Read-Host "¿El repositorio ya está creado en GitHub? (s/n)"

if ($continue -ne "s" -and $continue -ne "S") {
    Write-Host ""
    Write-Host "👉 Ve a crear el repositorio primero:" -ForegroundColor Yellow
    Write-Host "   https://github.com/new" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Luego ejecuta este script nuevamente." -ForegroundColor White
    exit 0
}

Write-Host ""
Write-Host "🚀 Subiendo archivos a GitHub..." -ForegroundColor Green
Write-Host ""

# Intentar hacer push
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "  ✅ ¡Éxito! Portafolio subido a GitHub" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Tu repositorio:" -ForegroundColor Cyan
    Write-Host "   https://github.com/Gaelwayne/portafolio-gael" -ForegroundColor White
    Write-Host ""
    Write-Host "📝 Próximos pasos:" -ForegroundColor Yellow
    Write-Host "   1. Visita tu repositorio en GitHub" -ForegroundColor White
    Write-Host "   2. Considera configurar GitHub Pages para publicarlo" -ForegroundColor White
    Write-Host "   3. Agrega un mejor README.md si lo deseas" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Red
    Write-Host "  ❌ Error al subir a GitHub" -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Posibles soluciones:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Si no estás autenticado:" -ForegroundColor White
    Write-Host "   - Necesitas un Personal Access Token" -ForegroundColor Gray
    Write-Host "   - Créalo en: https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host "   - Scopes necesarios: repo" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Si el repositorio no existe:" -ForegroundColor White
    Write-Host "   - Créalo primero en: https://github.com/new" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "3. Si ya existe contenido en el repositorio:" -ForegroundColor White
    Write-Host "   - Ejecuta: git pull origin main --allow-unrelated-histories" -ForegroundColor Gray
    Write-Host "   - Luego: git push -u origin main" -ForegroundColor Gray
    Write-Host ""
}

Write-Host "Presiona Enter para salir..."
Read-Host
