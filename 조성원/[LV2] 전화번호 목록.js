function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++)
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;

  return true;
}

// function solution(phone_book) {
//   const phoneBookSet = new Set(phone_book);
//
//   for (const phone of phoneBookSet)
//     for (let i = 1; i < phone.length; i++)
//       if (phoneBookSet.has(phone.slice(0, i))) return false;
//
//   return true;
// }
