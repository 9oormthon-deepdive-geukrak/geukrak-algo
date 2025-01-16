def solution(brown, yellow):
    tot = brown + yellow
    
    for y in range(1, int(tot**0.5) + 1):
        if tot % y == 0:
            x = tot // y
            
            if (x-2) * (y-2) == yellow:
                return [x, y]