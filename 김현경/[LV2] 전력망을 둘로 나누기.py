from collections import deque
def bfs(start, graph):
        visited = [False] * len(graph)
        queue = deque([start])
        
        visited[start] = True
        cnt = 1
        
        while queue:
            node = queue.popleft()
            
            for i in graph[node]:
                if not visited[i]:
                    queue.append(i)
                    visited[i] = True
                    cnt += 1           
        return cnt

def solution(n, wires):
    graph = [[] for _ in range(n + 1)]
    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
    
    
    res = n
    for a, b in wires:
        graph[a].remove(b)
        graph[b].remove(a)
        
        network_size = bfs(a, graph)
        res = min(abs(network_size - (n - network_size)), res)
        
        graph[a].append(b)
        graph[b].append(a)
        
    return res