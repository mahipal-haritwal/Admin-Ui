import { User } from "../components";

export function selectPage(curr: number, move: number = 0) {
  switch (move) {
    case -1:
      return move + curr >= 1 ? curr + move : curr;
    case -2:
      return move + curr >= 1 ? curr + move : curr;
    case 1:
      return move + curr <= 5 ? move + curr : curr;
    case 2:
      return move + curr <= 5 ? move + curr : curr;
    default:
      return curr;
  }
}

export function pageData(pageNo: number, data: User[]) {
  const startIndex = pageNo * 10 - 10;
  const endIndex = pageNo * 10 > data.length ? data.length : pageNo * 10;

  return data.slice(startIndex, endIndex);
}
