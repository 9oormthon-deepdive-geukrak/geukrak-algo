def solution(s):
    num_cnt = {}
    s = s[2:-2].split('},{')
    
    for elem in s:
        nums = map(int, elem.split(','))
        for num in nums:
            if num in num_cnt:
                num_cnt[num] += 1
            else:
                num_cnt[num] = 1
    return [key for key, _ in sorted(num_cnt.items(), key=lambda x: -x[1])]