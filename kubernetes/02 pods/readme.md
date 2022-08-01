# PODS

### Comandos básicos

```
kubectl run server --image=nginx:alpine
kubectl get pods
kubectl get po
kubectl port-forward <nombre del pod> <puerto host>:<puerto pod>
kubectl get po <nombre del pod>
kubectl get po <nombre del pod> -o yaml
kubectl get po <nombre del pod> -o json
kubectl describe po <nombre del pod>
kubectl apply -f <nombre del manifiesto>
kubectl delete pod <nombre del pod>
kubectl delete -f <nombre del manifiesto>
kubectl exec -it <nombre del pod> -- sh
kubectl exec -it <nombre del pod> -c <nombre del contenedor> -- sh
```

### Listar pods con sus etiquetas

```
kubectl get po --show-labels
```

### Listar por pods por determinada etiqueta y valor

```
kubectl get po --show-labels -l env=dev
```
