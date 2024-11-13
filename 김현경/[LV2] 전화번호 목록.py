def solution(phone_book):
    sorted_phone = sorted(phone_book)
    
    for i in range(1, len(sorted_phone)):
        if sorted_phone[i].startswith(sorted_phone[i - 1]):
            return False
    
    return True

# hash 이용한 풀이
# def solution(phone_book):
#     phone_dict = {}

#     for nums in phone_book:
#         phone_dict[nums] = True
    
#     for nums in phone_book:
#         prefix = ""
#         for num in nums[:-1]: # 자기 자신을 접두어로 체크하지 않기 위해 마지막 문자 제외
#             prefix += num
#             if prefix in phone_dict:
#                 return False
    
#     return True