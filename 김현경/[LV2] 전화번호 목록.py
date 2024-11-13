def solution(phone_book):
    sorted_phone = sorted(phone_book)
    
    for i in range(1, len(sorted_phone)):
        if sorted_phone[i].startswith(sorted_phone[i - 1]):
            return False
    
    return True
