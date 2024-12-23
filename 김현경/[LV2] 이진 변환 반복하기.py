def solution(s):
    cnt = 0
    remove_zero = 0
    
    while s != '1':
        cnt += 1
        remove_zero += s.count('0')
        s = bin(len(s.replace('0', '')))[2:]
    
    return [cnt, remove_zero]