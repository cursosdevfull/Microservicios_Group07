# Docker

### Crear un contenedor desde una imagen

```
docker run -d --name test nginx:alpine
```

### Listar contenedores ejecutándose

```
docker ps
```

### Para eliminar contenedores

```
docker rm -f <nombre contedorr>
```

### Crear un conteneddor con puertos abiertos

```
docker run -d --name test -p 9000:80 nginx:alpine
```

### Crear una imagen desde un Dockerfile

```
docker build -t frontend .
```

### Listar imágenes

```
docker images
```
