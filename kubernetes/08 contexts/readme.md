# Contextos

### Ver el contexto actual

```
kubectl config current-context
```

### Listar todos los contextos

```
kubectl config view
```

### Crear un contexto

```
kubectl config set-context new-context --cluster=shidalgo --user=shidalgo
```

### Cambiar de contexto

```
kubectl config use-context new-context
```
