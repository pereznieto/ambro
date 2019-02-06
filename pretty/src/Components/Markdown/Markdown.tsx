import React from 'react';
import styles from './Markdown.module.scss';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  text: string;
}

const Markdown = ({ text }: MarkdownProps) => (
  <ReactMarkdown
    className={styles.markdown}
    linkTarget="_blank"
    source={text}
  />
);

export default Markdown;
