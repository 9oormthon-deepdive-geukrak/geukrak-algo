function solution(phone_book) {
  const prefix = new Set(phone_book);

  for (const phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const guessPrefix = phone.slice(0, i);
      if (prefix.has(guessPrefix)) return false;
    }
  }
  return true;
}

// 3. 길이 순이 아닌 알파벳순으로 정렬 후 탐색
// -> 2.에서 길이순으로 정렬 대신 알파벳순으로 정렬 시 현재 번호보다 긴 모든 번호를 비교하지 않고 다음 번호랑만 비교해도 됨
// -> 시간 초과 안 남! (O(nlogn))
// function solution(phone_book) {
//   phone_book.sort();

//   for (let i = 0; i < phone_book.length - 1; i++) {
//     if (phone_book[i + 1].startsWith(phone_book[i])) {
//       return false;
//     }
//   }

//   return true;
// }

// 2. 길이 순 정렬 후 현재 번호보다 긴 번호가 자신을 접두어로 가지는 지 확인
// -> 1. 에서 자신을 제외한 모든 번호를 다 확인하는 것을 개선하여 자신보다 긴 경우에 대해서만 검색하도록 개선
// -> 3, 4 시간 초과
// function solution(phone_book) {
//     phone_book.sort((a, b) => a.length - b.length);

//     for (let i = 0; i < phone_book.length; i++) {
//         for (let j = i + 1; j < phone_book.length; j++) {
//             if (phone_book[j].startsWith(phone_book[i])) return false;
//         }
//     }

//     return true;
// }

// 1. some 메소드 사용해서 자신을 제외한 모든 번호를 확인하여 자신이 접두사가 되는 경우가 있는 지 확인
// -> 3, 4 시간 초과
// function solution(phone_book) {
//     return !phone_book.some((phone1) => {
//         return phone_book.some((phone2) => {
//             if (phone1 === phone2) return;
//             return phone2.startsWith(phone1);
//         });
//     });
// }
