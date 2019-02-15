import _ from 'lodash';
import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_POST, EDIT_POST } from '../../utils/queries';
import TextArea from '../Form/TextArea/TextArea';
import TextField from '../Form/TextField/TextField';
import LoadingDot from '../LoadingDot/LoadingDot';
import Post from '../Post/Post';
import styles from './PostForm.module.scss';
import Error from '../Error/Error';

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
              <Error message={`Error ${label}ing post`} />
              <p>{error.message}</p>
            </React.Fragment>
          );
          if (called && !!data) return <h2>Post with id: {id} {label}ed successfully!</h2>;

          return (
            <div className={styles.postForm}>
              <form className={styles.form} onSubmit={event => {
                event.preventDefault();
                this.setState({ isFormDisabled: true });
                mutatePost({ variables: { id, image, ratio, location, caption, date, text } });
              }}>
                <div className={styles.sections}>
                  <div className={styles.inputs}>
                    <h2 className={styles.formTitle}>{isEdit ? 'Edit' : 'Add new'} post</h2>
                    {isEdit && <p className={styles.id}>
                      <span className={styles.label}>ID: </span>
                      <span className={styles.value}>{id}</span>
                    </p>}
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
                    <TextField
                      label="Image URL"
                      name="image"
                      value={image}
                      onChange={event => { this.setState({ image: event.target.value }) }}
                      isDisabled={isFormDisabled}
                    />
                    <TextField
                      label="Image ratio"
                      caption="(height &#215; 100 / width)"
                      name="ratio"
                      value={ratio}
                      onChange={event => { this.setState({ ratio: event.target.value }) }}
                      isDisabled={isFormDisabled}
                    />
                    <TextArea
                      label="Text"
                      name="text"
                      value={text}
                      onChange={event => { this.setState({ text: event.target.value }) }}
                      isDisabled={isFormDisabled}
                    />
                  </div>
                  <div className={styles.preview}>
                    <h2 className={styles.previewTitle}>Post preview</h2>
                    <Post isSmall={true} {...this.state} />
                  </div>
                </div>
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
