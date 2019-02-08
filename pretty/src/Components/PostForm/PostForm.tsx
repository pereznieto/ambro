import React from 'react';
import styles from './PostForm.module.scss';
import gql from "graphql-tag";
import TextField from '../Form/TextField/TextField';
import TextArea from '../Form/TextArea/TextArea';

interface PostFormProps {
  id: string;
  image: string;
  ratio: string;
  location: string;
  caption: string;
  date: string;
  text?: string;
};

interface PostFormState extends PostFormProps {
  isFormDisabled: boolean;
};

const EDIT_POST = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props: PostFormProps) {
    super(props);
    const { id, image, ratio, location, caption, date, text } = this.props;
    this.state = { id, image, ratio, location, caption, date, text, isFormDisabled: false };
  }

  render() {
    const { id, image, ratio, location, caption, date, text, isFormDisabled } = this.state;
    return (
      <div className={styles.postForm}>
        <h2>Edit mode</h2>
        <p>
          <span className={styles.idLabel}>ID: </span>
          <span className={styles.idValue}>{id}</span>
        </p>
        <form className={styles.form} onSubmit={event => {
          event.preventDefault();
          this.setState({ isFormDisabled: true });
        }}>
          <TextField
            label="Image URL"
            name="image"
            value={this.state.image}
            onChange={event => { this.setState({ image: event.target.value }) }}
            isDisabled={isFormDisabled}
          />
          <TextField
            label="Ratio"
            name="ratio"
            value={this.state.ratio}
            onChange={event => { this.setState({ ratio: event.target.value }) }}
            isDisabled={isFormDisabled}
          />
          <TextField
            label="Location"
            name="location"
            value={this.state.location}
            onChange={event => { this.setState({ location: event.target.value }) }}
            isDisabled={isFormDisabled}
          />
          <TextField
            label="Caption"
            name="caption"
            value={this.state.caption}
            onChange={event => { this.setState({ caption: event.target.value }) }}
            isDisabled={isFormDisabled}
          />
          <TextField
            label="Date"
            name="date"
            value={this.state.date}
            onChange={event => { this.setState({ date: event.target.value }) }}
            isDisabled={isFormDisabled}
          />
          <TextArea
            label="Text"
            name="text"
            value={this.state.text}
            onChange={event => { this.setState({ text: event.target.value }) }}
            isDisabled={isFormDisabled}
          />
          <button type="submit" disabled={isFormDisabled}>Save changes</button>
        </form>
      </div >
    );
  }
};

export default PostForm;
