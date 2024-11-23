from collections import deque

def solution(board):
    n = len(board)
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    cost = [[[float('inf')] * 4 for _ in range(n)] for _ in range(n)]
    queue = deque([(0, 0, -1, 0)])
    
    for i in range(4):
        cost[0][0][i] = 0
    
    while queue:
        x, y, prev_dir, cur_cost = queue.popleft()
        
        for new_dir, (dx, dy) in enumerate(directions):
            nx, ny = x + dx, y + dy
            
            if 0 <= nx < n and 0 <= ny < n and board[nx][ny] == 0:
                new_cost = cur_cost + (100 if prev_dir == new_dir or prev_dir == -1 else 600)
                if new_cost < cost[nx][ny][new_dir]:
                    cost[nx][ny][new_dir] = new_cost
                    queue.append((nx, ny, new_dir, new_cost))
                    
    return min(cost[n - 1][n - 1])