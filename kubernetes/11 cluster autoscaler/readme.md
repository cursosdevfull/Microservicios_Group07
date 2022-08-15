# Cluster Autoscaler

### Instalar el servidor de métricas

```
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

### Verificar la instalación del servidor de métricas

```
kubectl get deploy metrics-server -n kube-system
```

### Descargar manifiesto del autoscaler

```
curl -o cluster-autoscaler-autodiscover.yaml https://raw.githubusercontent.com/kubernetes/autoscaler/master/cluster-autoscaler/cloudprovider/aws/examples/cluster-autoscaler-autodiscover.yaml
```

### Revisar el log del autoscaler

```
kubectl -n kube-system logs -f deployment.apps/cluster-autoscaler
```
