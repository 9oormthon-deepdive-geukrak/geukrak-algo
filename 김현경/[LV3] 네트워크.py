def dfs(node, n, computers, visited):
    visited[node] = True
    for neighbor in range(n):
        if computers[node][neighbor] == 1 and visited[neighbor] == False:
            dfs(neighbor, n, computers, visited)

def solution(n, computers):
    network = 0
    visited = [False] * n
    
    for i in range(n):
        if visited[i] == False:
            dfs(i, n, computers, visited)
            network += 1
    return network