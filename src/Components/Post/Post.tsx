import React from 'react';
import styles from './Post.module.css';
import { RouteComponentProps } from 'react-router';
import { getImageUrl } from '../../utils/squaresBuilder';
import images from '../../utils/images';

interface PostProps extends RouteComponentProps<{ id: string }> { }

const Post = ({ match: { params: { id } } }: PostProps) => (
  <div className={styles.post}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${getImageUrl(id, images)})` }}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare, mauris ut feugiat venenatis, quam massa iaculis lorem, id sollicitudin leo risus in nisi. Proin elementum id nisi non congue. Ut suscipit ultrices scelerisque. Proin venenatis dapibus velit quis gravida. Nullam lectus urna, congue id elit non, scelerisque efficitur risus. Praesent feugiat suscipit felis, a mollis ligula facilisis ut. Fusce tristique lorem vitae orci ullamcorper, ut aliquam dui varius.</p>
    <p>Mauris venenatis ut lacus sed faucibus. Sed viverra arcu non sapien facilisis mattis. Praesent tincidunt odio nulla, eu laoreet nulla laoreet eu. Vestibulum ac augue in libero tempus vestibulum sed dictum turpis. In vel nisi vitae elit ultrices pretium. Fusce blandit ultrices consequat. Suspendisse facilisis sagittis erat, et accumsan nisi pretium at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam dictum diam non elit congue ultrices. Sed non erat consequat, sollicitudin turpis ut, sollicitudin ante. Etiam urna dolor, rhoncus vitae mauris quis, convallis vestibulum arcu. Mauris nec molestie odio. Donec ac orci iaculis, faucibus turpis a, posuere lacus.</p>
    <p>Sed ante magna, tempus egestas augue sit amet, porttitor tristique sapien. Curabitur magna eros, aliquet a nisl quis, dictum volutpat urna. Duis consectetur diam ac mi lacinia ultrices. Proin tincidunt nulla magna, et egestas eros accumsan at. Ut at commodo enim, in iaculis nisl. Sed in turpis ante. Pellentesque fringilla malesuada auctor. Donec ligula dui, blandit non sapien id, iaculis bibendum sem. Pellentesque viverra enim quis tortor vestibulum porttitor.</p>
  </div >
);

export default Post;
