import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.scss';

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
