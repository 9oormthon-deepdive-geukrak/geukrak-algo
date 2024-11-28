def backtrack(k, visited, dungeons, cnt):
    max_cnt = cnt
    
    for i in range(len(dungeons)):
        if not visited[i] and k >= dungeons[i][0]:
            visited[i] = True
            max_cnt = max(max_cnt, backtrack(k - dungeons[i][1], visited, dungeons, cnt + 1))
            visited[i] = False          
    return max_cnt

def solution(k, dungeons):
    visited = [False] * len(dungeons)
    return backtrack(k, visited, dungeons, 0)

# from itertools import permutations
# def solution(k, dungeons):
#     max_cnt = 0
#     dungeon_permutations = list(permutations(dungeons))
    
#     for order in dungeon_permutations:
#         fatigue = k
#         cnt = 0
        
#         for min_fatigue, use_fatigue in order:
#             if fatigue >= min_fatigue:
#                 fatigue -= use_fatigue
#                 cnt += 1
#             else:
#                 break
#         max_cnt = max(max_cnt, cnt)
#     return max_cnt