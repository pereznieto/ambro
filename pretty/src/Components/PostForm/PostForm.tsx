import React from 'react';
import styles from './PostForm.module.scss';
import TextField from '../Form/TextField/TextField';
import TextArea from '../Form/TextArea/TextArea';
import { Mutation } from 'react-apollo';
import { EDIT_POST, ADD_POST } from '../../utils/queries';
import LoadingDot from '../LoadingDot/LoadingDot';
import _ from 'lodash';

export enum FormType {
  ADD = "ADD",
  EDIT = "EDIT",
}

interface PostFormProps {
  id?: string;
  image?: string;
  ratio?: string;
  location?: string;
  caption?: string;
  date?: string;
  text?: string;
  type: FormType;
};

interface PostFormState {
  id: string;
  image: string;
  ratio: string;
  location: string;
  caption: string;
  date: string;
  text: string;
  isFormDisabled: boolean;
};

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props: PostFormProps) {
    super(props);
    const { id, image, ratio, location, caption, date, text, type } = this.props;
    this.state = {
      id: id || '',
      image: image || '',
      ratio: ratio || '',
      location: type === FormType.EDIT ? location || '' : '',
      caption: caption || '',
      date: date || '',
      text: text || '',
      isFormDisabled: false
    };
  }

  render() {
    const { id, image, ratio, location, caption, date, text, isFormDisabled } = this.state;
    const isEdit = this.props.type === FormType.EDIT;
    const label = isEdit ? 'edit' : 'add';

    return (
      <Mutation mutation={isEdit ? EDIT_POST : ADD_POST}>
        {(mutatePost, { data, loading, called, error }) => {
          if (loading) return <LoadingDot />;
          if (error) return (
            <React.Fragment>
              <h2>Error {label}ing post:</h2>
              <p>{error.message}</p>
            </React.Fragment>
          );
          if (called && !!data) return <h2>Post {label}ed successfully!</h2>;

          return (
            <div className={styles.postForm}>
              <h2>{isEdit ? 'Edit' : 'Add new'} post</h2>
              {isEdit && <p className={styles.id}>
                <span className={styles.label}>ID: </span>
                <span className={styles.value}>{id}</span>
              </p>}
              <form className={styles.form} onSubmit={event => {
                event.preventDefault();
                this.setState({ isFormDisabled: true });
                mutatePost({ variables: { id, image, ratio, location, caption, date, text } });
              }}>
                {!isEdit && <TextField
                  label="ID"
                  name="id"
                  value={id}
                  onChange={event => { this.setState({ id: event.target.value }) }}
                  isDisabled={isFormDisabled}
                />}
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
                <button className={styles.button} type="submit" disabled={isFormDisabled}>
                  {_.capitalize(label)} post
                </button>
              </form>
            </div >
          );
        }}
      </Mutation>
    );
  }
};

export default PostForm;
