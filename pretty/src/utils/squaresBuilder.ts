import _ from 'lodash';
import { SquarePost } from "../Components/SquaresGrid/SquaresGrid";

interface GeneratedSquares {
  id: string;
  image?: string;
  text?: string;
}

export const generateSquares = (posts: SquarePost[]) => {
  const sortedPosts = _.reverse(_.sortBy(posts, post => post.date));;
  const linkSquares = ['About', 'Contact', 'Inspiration'];

  return sortedPosts.reduce((previous, current, index) => {
    if ([3, 6, 9].includes(index)) {
      return [
        ...previous,
        {
          id: linkSquares[(index / 3 - 1)].toLowerCase(),
          text: linkSquares[(index / 3 - 1)],
        },
        current,
      ];
    } else {
      return [...previous, current];
    }
  }, [] as GeneratedSquares[]);
};
