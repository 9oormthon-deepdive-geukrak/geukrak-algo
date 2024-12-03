def queen(x, n, col, diag1, diag2):
    if x == n:
        return 1
    count = 0
    for y in range(n):
        if not col[y] and not diag1[x - y] and not diag2[x + y]:
            col[y] = True
            diag1[x - y] = True
            diag2[x + y] = True
            count += queen(x + 1, n, col, diag1, diag2)
            col[y] = False
            diag1[x - y] = False
            diag2[x + y] = False
    return count

def solution(n):
    col = [False] * n
    diag1 = [False] * (2 * n - 1)
    diag2 = [False] * (2 * n - 1)
    
    return queen(0, n, col, diag1, diag2)