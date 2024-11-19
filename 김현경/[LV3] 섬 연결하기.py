def find(parent, x):
    if parent[x] != x:
        parent[x] = find(parent, parent[x])
    return parent[x]
    
def union(parent, a, b):
    a = find(parent, a)
    b = find(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b
    
def solution(n, costs):
    total_cost = 0
    parent = [i for i in range(n)]
    costs.sort(key=lambda x: x[2])
    
    for cost in costs:
        a, b, c = cost
        if find(parent, a) != find(parent, b):
            union(parent, a, b)
            total_cost += c
    return total_cost