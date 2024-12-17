if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function (callback, thisArg) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (callback.call(thisArg, this[i], i, this)) return i;
    }
    return -1;
  };
}

const TARGET_CNT = 11;
let maxDiff = 0;
let candi = [-1];

function shoot(n, shooted, target, info) {
  if (target >= TARGET_CNT || n === 0) {
    const score = shooted.reduce(
      (acc, curr, i) => {
        curr ? (acc.lion += TARGET_CNT - 1 - i) : info[i] ? (acc.appeach += TARGET_CNT - 1 - i) : null;
        return acc;
      },
      { lion: 0, appeach: 0 }
    );

    if (score.lion > score.appeach) {
      const currDiff = score.lion - score.appeach;

      const copy = shooted.slice();
      copy[TARGET_CNT - 1] = n;

      if (maxDiff > currDiff) return;
      else if (maxDiff < currDiff) {
        maxDiff = currDiff;
        candi = copy;
      } else if (maxDiff === currDiff) {
        const candiMinScore = candi.findLastIndex((num) => num > 0);
        const shootedMinScore = copy.findLastIndex((num) => num > 0);

        if (shootedMinScore > candiMinScore) {
          candi = copy;
        } else if (shootedMinScore === candiMinScore) {
          if (candi[candiMinScore] < shooted[shootedMinScore]) {
            candi = copy;
          }
        }
      }
      return -1;
    }
    return -1;
  }
  const needArrow = info[target] + 1;
  if (n >= needArrow) {
    shooted[target] = needArrow;
    shoot(n - needArrow, shooted, target + 1, info);
  }
  shooted[target] = 0;
  shoot(n, shooted, target + 1, info);
}

function solution(n, info) {
  const shooted = Array(TARGET_CNT).fill(0);
  const target = 0;
  const needArrow = info[target] + 1;

  if (n >= needArrow) {
    shooted[target] = needArrow;
    shoot(n - needArrow, shooted, target + 1, info);
  }
  shooted[target] = 0;
  shoot(n, shooted, target + 1, info);

  return candi;
}
