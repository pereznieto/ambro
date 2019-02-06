import { SquarePost } from "../Components/SquaresGrid/SquaresGrid";

export const generateSquares = (posts: SquarePost[]) => {
  const linkSquares = ['About', 'Contact', 'Inspiration'];

  return posts.reduce((previous, current, index) => {
    if ([3, 6, 9].includes(index)) {
      return [
        ...previous,
        {
          id: linkSquares[(index / 3 - 1)].toLowerCase(),
          text: linkSquares[(index / 3 - 1)],
        }
      ];
    } else {
      return [...previous, current];
    }
  }, [] as SquarePost[]);
};
