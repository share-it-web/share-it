---
title: 'Comandos Esenciales de Git'
description: 'Los comandos de Git que todo desarrollador debe conocer.'
date: '2024-12-21'
category: 'Desarrollo'
draft: false
author:
  name: 'Victor Quiñones'
  avatar: 'https://i.ibb.co/Dzd33xD/profile-perfil.jpg'
  role: 'Frontend Developer'
  github: 'https://github.com/vctorqui'
  linkedin: 'https://linkedin.com/in/victorqui'
  website: 'https://victorqui-portfolio.netlify.app/'
---

---

## Comandos básicos

```bash
git init
git add .
git commit -m "mensaje"
git status
git log
git push
git pull
```

## Flujos de trabajo comunes

1. **Crear una nueva rama**
   ```bash
   git checkout -b nombre-rama
   ```
2. **Fusionar cambios**
   ```bash
   git checkout rama-principal
   git merge nombre-rama
   ```
3. **Resolver conflictos**
   - Editar los archivos en conflicto para resolver los cambios.
   - Añadir los archivos resueltos.
   ```bash
   git add archivo-resuelto
   git commit -m "Resolver conflictos"
   ```
4. **Trabajar con remotos**
   - Añadir un remoto
   ```bash
   git remote add origin url-del-repositorio
   ```
   - Ver remotos
   ```bash
   git remote -v
   ```
   - Eliminar un remoto
   ```bash
   git remote remove nombre-remoto
   ```

## Comandos avanzados

### Deshacer cambios

- **Deshacer cambios en el área de trabajo**
  ```bash
  git checkout -- archivo
  ```
- **Deshacer cambios en el área de preparación**
  ```bash
  git reset HEAD archivo
  ```

### Reescribir historial

- **Revertir un commit**
  ```bash
  git revert id-del-commit
  ```
- **Reescribir el último commit**
  ```bash
  git commit --amend
  ```

### Guardar cambios temporales

- **Crear un stash**
  ```bash
  git stash
  ```
- **Aplicar un stash**
  ```bash
  git stash apply
  ```
- **Listar stashes**
  ```bash
  git stash list
  ```

### Inspeccionar y comparar

- **Ver diferencias entre commits**
  ```bash
  git diff id-commit1 id-commit2
  ```
- **Ver diferencias entre ramas**
  ```bash
  git diff nombre-rama1 nombre-rama2
  ```

### Configuración

- **Configurar nombre de usuario**
  ```bash
  git config --global user.name "Tu Nombre"
  ```
- **Configurar correo electrónico**
  ```bash
  git config --global user.email "tuemail@example.com"
  ```
