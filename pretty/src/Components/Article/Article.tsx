import React from 'react';
import ReactMarkdown, { NodeType } from 'react-markdown';
import { Link } from 'react-router-dom';
import styles from './Article.module.scss';
import { getTitle, getText } from '../../utils/articleBuilder';

export interface ArticleProps {
  id: string;
  date?: string;
  image: string;
  text: string;
}

const markdownNodeTypes: NodeType[] = [
  'break',
  'paragraph',
  'emphasis',
  'strong',
  'thematicBreak',
  'blockquote',
  'delete',
  'link',
  'image',
  'linkReference',
  'imageReference',
  'table',
  'tableHead',
  'tableBody',
  'tableRow',
  'tableCell',
  'list',
  'listItem',
  'definition',
  'heading',
  'inlineCode',
  'code',
  'html',
  'virtualHtml',
];

const Article = ({ id, image, text }: ArticleProps) => (
  <Link to={`/post/${id}`} className={styles.article}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.textWrapper}>
        {getTitle(text) && <h3 className={styles.caption}>{getTitle(text)}</h3>}
        <div className={styles.text}>
          <ReactMarkdown
            source={getText(text)}
            disallowedTypes={markdownNodeTypes}
            unwrapDisallowed={true}
          />
        </div>
      </div>
    </div>
  </Link>
);

export default Article;
