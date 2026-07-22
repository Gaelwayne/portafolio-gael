# 🚀 Instrucciones para subir el portafolio a GitHub

## ✅ Ya completado:
- ✅ Repositorio Git inicializado
- ✅ Commit inicial creado con todos los archivos
- ✅ Branch renombrado a `main`

## 📋 Pasos para crear el repositorio en GitHub:

### Opción 1: Usando la interfaz web de GitHub (Recomendado)

1. **Ve a GitHub:**
   - Abre: https://github.com/new
   - Asegúrate de estar logueado como **Gaelwayne**

2. **Configura el repositorio:**
   - **Repository name:** `portafolio-gael` (o el nombre que prefieras)
   - **Description:** "Portfolio personal - React, Tailwind CSS, i18n (ES/EN)"
   - **Visibility:** Public ✅
   - **NO inicialices con README, .gitignore o license** (ya los tienes)

3. **Crea el repositorio:**
   - Click en "Create repository"

4. **Conecta tu repositorio local:**
   
   Copia y ejecuta estos comandos en tu terminal de PowerShell (dentro de la carpeta del proyecto):

   ```powershell
   git remote add origin https://github.com/Gaelwayne/portafolio-gael.git
   git push -u origin main
   ```

   Si te pide autenticación, usa tu **Personal Access Token** de GitHub.

---

### Opción 2: Usando GitHub CLI (si lo instalas)

1. **Instala GitHub CLI:**
   - Descarga desde: https://cli.github.com/
   - O con winget: `winget install GitHub.cli`

2. **Autentica:**
   ```powershell
   gh auth login
   ```

3. **Crea y sube el repositorio:**
   ```powershell
   gh repo create portafolio-gael --public --source=. --push
   ```

---

## 🔑 Si necesitas crear un Personal Access Token:

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Selecciona scopes:
   - ✅ `repo` (acceso completo)
4. Genera y copia el token
5. Úsalo como contraseña cuando Git te lo pida

---

## 🎯 Comandos útiles después de subir:

```powershell
# Ver el estado del repositorio
git status

# Ver el remoto configurado
git remote -v

# Hacer cambios y subirlos
git add .
git commit -m "Descripción de cambios"
git push

# Ver el historial
git log --oneline
```

---

## 📍 URL de tu repositorio:
Una vez creado: `https://github.com/Gaelwayne/portafolio-gael`

## 🌐 GitHub Pages (Opcional):
Para publicar tu portafolio en línea:

1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → folder: `/(root)` o `/docs`
4. Necesitarás configurar el build para que funcione con Vite

---

¿Necesitas ayuda con algún paso? ¡Avísame! 🚀
