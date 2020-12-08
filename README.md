
## RUN
DEBUG="src*" npm run dev

## GIT HUB

**Crear** rama:
```bash
$ git branch [nombre_rama] 
```

**Mostrar** ramas existentes. También nos indica en qué estamos
```bash
$ git branch
```

**Elegir** rama 'nomnbre_rama':
```bash
$ git checkout [nombre_rama]
```

**Muestrar** **logs** de commits:
```bash
$ git log --oneline
```

Para ralizar **merge** de las ramas, primero hay que estar en la rama **MASTER** y luego hacel el merge:
```bash
$ git checkout master
$ git merge [nombre_rama]
$ git push
```

**Eliminar** rama:
```bash
git branch -d [nombre_rama]
```

Configuración del usuario para que no nos lo pida cada vez que hacemos commit.
```bash
$ git config --global user.name "nombre_usuario"
$ git config --global user.email usuario@mail.com
```
Si al hacer el COMMIT nos dice que ya teniamos un usuario, lo podemos volver a indicarselo:
```bash
$ git config --global user.name "nombre_usuario"
$ git config --global user.email usuario@mail.com
$ git commit --amend --reset-author
```

## Install the dependencies
```bash
npm install
```

### Lint the files
```bash
npm run lint
```