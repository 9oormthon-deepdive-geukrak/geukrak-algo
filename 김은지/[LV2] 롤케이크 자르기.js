function solution(toppings) {
  const totalCnt = toppings.reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) || 0) + 1);
    return acc;
  }, new Map());
  const dividedSet = new Set();

  let result = 0;
  let findEquity = false;
  for (let topping of toppings) {
    dividedSet.add(topping);
    const currToppingCnt = totalCnt.get(topping);
    if (currToppingCnt === 1) {
      totalCnt.delete(topping);
    } else {
      totalCnt.set(topping, currToppingCnt - 1);
    }

    if (totalCnt.size === dividedSet.size) {
      result += 1;
      findEquity = true;
    } else if (findEquity === true) {
      break;
    }
  }

  return result;
}
