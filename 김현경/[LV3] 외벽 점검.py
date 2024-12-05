from itertools import permutations

def solution(n, weak, dist):
    weakSize = len(weak)
    weak = weak + [w + n for w in weak]
    minCnt = float('inf')
    
    # 취약 지점에서 시작하는 모든 경우의 수 탐색
    for start in range(weakSize):
        for friends in permutations(dist):
            cnt = 1
            position = weak[start] + friends[cnt - 1]

            # 현재 시작 지점 이후의 취약 지점을 검사
            for idx in range(start + 1, start + weakSize):
                if weak[idx] > position:
                    cnt += 1
                    if cnt > len(friends):
                        break
                    position = weak[idx] + friends[cnt - 1]

            # 모든 취약 지점을 점검 가능한 경우에만 최수 친구 수 업데이트
            if cnt <= len(friends):
                minCnt = min(minCnt, cnt)
    if minCnt == float('inf'):
        return -1          
    return minCnt