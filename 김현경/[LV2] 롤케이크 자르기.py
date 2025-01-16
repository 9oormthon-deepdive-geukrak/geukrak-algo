def solution(topping):
    cnt = 0
    chulsu = {}
    for t in topping:
        if t in chulsu:
            chulsu[t] += 1
        else:
            chulsu[t] = 1
    
    brother = {}
    for t in topping:
        if len(brother) == len(chulsu):
            cnt += 1
        if t not in brother:
            brother[t] = 1
            
        chulsu[t] -= 1
        if chulsu[t] == 0:
            del chulsu[t]
            
    return cnt