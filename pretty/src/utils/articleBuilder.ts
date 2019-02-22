import _ from 'lodash';
import { ArticleProps } from '../Components/Article/Article';

export const sortArticles = (articles: ArticleProps[]) =>
  _.reverse(_.sortBy(articles, article => article.date));

export const getTitle = (text: string) => text.split('\n')[0].split('# ')[1];

export const getText = (text: string) => getTitle(text) ? text.split(`# ${getTitle(text)}\n\n`)[1] : text;

