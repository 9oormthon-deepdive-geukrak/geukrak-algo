max_num = -1
answer = []

def solution(n, info):
    def calc(apeach, ryan):
        a_score, r_score = 0, 0
        for i in range(11):
            if apeach[i] == ryan[i] == 0:
                continue
            elif apeach[i] > ryan[i]:
                a_score += 10 - i
            else:
                r_score += 10 - i
        return a_score, r_score
    
    def dfs(ryan, idx):
        global max_num, answer
        
        if idx == 11:
            if sum(ryan) == n:
                a_score, r_score = calc(info, ryan)
            elif sum(ryan) < n: # 남은 화살을 모두 0으로 채워줌
                ryan[-1] += (n - sum(ryan))
                a_score, r_score = calc(info, ryan)
            else:
                return
            if a_score < r_score:
                if max_num < r_score - a_score:
                    max_num = r_score - a_score
                    answer = [ryan[:]]
                elif max_num == r_score - a_score:
                    answer.append(ryan[:])
            return
    
        ryan.append(info[idx] + 1)
        dfs(ryan, idx + 1)
        ryan.pop()
        
        ryan.append(0)
        dfs(ryan, idx + 1)
        ryan.pop()
    
    dfs([], 0)
    if not answer: return [-1]
    answer.sort(key=lambda x: x[::-1], reverse=True)
    return answer[0]