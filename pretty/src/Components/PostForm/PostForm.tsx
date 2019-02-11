import React from 'react';
import styles from './PostForm.module.scss';
import gql from "graphql-tag";
import TextField from '../Form/TextField/TextField';
import TextArea from '../Form/TextArea/TextArea';
import { Mutation } from 'react-apollo';
import { EDIT_POST } from '../../utils/queries';
import LoadingDot from '../LoadingDot/LoadingDot';

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

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props: PostFormProps) {
    super(props);
    const { id, image, ratio, location, caption, date, text } = this.props;
    this.state = { id, image, ratio, location, caption, date, text, isFormDisabled: false };
  }

  render() {
    const { id, image, ratio, location, caption, date, text, isFormDisabled } = this.state;
    return (
      <Mutation mutation={EDIT_POST}>
        {(editPost, { data, loading, called, error }) => {
          if (loading) return <LoadingDot />;
          if (error) return <h2>Error updating post</h2>;
          if (called && !!data) return <h2>Post udpated successfully!</h2>;

          return (
            <div className={styles.postForm}>
              <p className={styles.id}>
                <span className={styles.label}>ID: </span>
                <span className={styles.value}>{id}</span>
              </p>
              <form className={styles.form} onSubmit={event => {
                event.preventDefault();
                this.setState({ isFormDisabled: true });
                editPost({ variables: { id, image, ratio, location, caption, date, text } });
              }}>
                <TextField
                  label="Caption"
                  name="caption"
                  value={caption}
                  onChange={event => { this.setState({ caption: event.target.value }) }}
                  isDisabled={isFormDisabled}
                />
                <div className={styles.halves}>
                  <TextField
                    label="Location"
                    name="location"
                    value={location}
                    onChange={event => { this.setState({ location: event.target.value }) }}
                    isDisabled={isFormDisabled}
                  />
                  <TextField
                    label="Date"
                    name="date"
                    value={date}
                    onChange={event => { this.setState({ date: event.target.value }) }}
                    isDisabled={isFormDisabled}
                  />
                </div>
                <div className={styles.halves}>
                  <TextField
                    label="Image URL"
                    name="image"
                    value={image}
                    onChange={event => { this.setState({ image: event.target.value }) }}
                    isDisabled={isFormDisabled}
                  />
                  <TextField
                    label="Image ratio"
                    name="ratio"
                    value={ratio}
                    onChange={event => { this.setState({ ratio: event.target.value }) }}
                    isDisabled={isFormDisabled}
                  />
                </div>
                <TextArea
                  label="Text"
                  name="text"
                  value={text}
                  onChange={event => { this.setState({ text: event.target.value }) }}
                  isDisabled={isFormDisabled}
                />
                <button className={styles.button} type="submit" disabled={isFormDisabled}>Update post</button>
              </form>
            </div >
          );
        }}
      </Mutation>
    );
  }
};

export default PostForm;
