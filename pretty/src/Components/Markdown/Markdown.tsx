import React from 'react';
import styles from './Markdown.module.scss';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  text: string;
  className?: string;
}

const Markdown = ({ text, className }: MarkdownProps) => (
  <ReactMarkdown
    className={`${styles.markdown} ${className}`}
    linkTarget="_blank"
    source={text}
  />
);

export default Markdown;
