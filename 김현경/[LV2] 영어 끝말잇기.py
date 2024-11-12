def solution(n, words):
    checked = [words[0]]
    
    for i in range(1, len(words)):
        if words[i][0] != words[i - 1][-1] or words[i] in checked:
            return [i % n + 1, i // n + 1]
        else:
            checked.append(words[i])
    return [0, 0]