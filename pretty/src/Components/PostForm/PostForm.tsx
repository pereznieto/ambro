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
  instagramId?: string;
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
  instagramId: string;
  image: string;
  ratio: string;
  location: string;
  caption: string;
  date: string;
  text: string;
  error?: string;
};

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props: PostFormProps) {
    super(props);
    const { id, instagramId, image, ratio, location, caption, date, text, type } = this.props;
    this.state = {
      id: id || '',
      instagramId: instagramId || '',
      image: image || '',
      ratio: ratio || '',
      location: type === FormType.EDIT ? location || '' : '',
      caption: caption || '',
      date: date || '',
      text: text || '',
      error: '',
    };

    if (!this.state.id) {
      this.getLocalStorageItems();
    }
  }

  setLocalStorageItems() {
    localStorage.setItem('AmbroPostInputs', JSON.stringify(this.state));
  };

  getLocalStorageItems() {
    const saved = localStorage.getItem('AmbroPostInputs');

    if (saved) {
      this.state = JSON.parse(saved);
      localStorage.removeItem('AmbroPostInputs');
    }
  };

  onDataInput({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({ [name]: value } as unknown as PostFormState, this.setLocalStorageItems);
  }

  render() {
    const { id, instagramId, image, ratio, location, caption, date, text } = this.state;
    const isEdit = this.props.type === FormType.EDIT;
    const label = isEdit ? 'edit' : 'add';

    return (
      <Mutation mutation={isEdit ? EDIT_POST : ADD_POST}>
        {(mutatePost, { data, loading, called, error }) => {
          if (loading) return <LoadingDot />;
          if (error) return (
            <React.Fragment>
              <Error message={`Error ${label}ing post`} />
              <p className={styles.center}>{error.message}</p>
            </React.Fragment>
          );
          if (called && !!data) return <h2 className={styles.center}>Post {label}ed successfully!</h2>;

          return (
            <div className={styles.postForm}>
              <form className={styles.form} onSubmit={event => {
                event.preventDefault();
                if (image && ratio && caption && date) {
                  const defaultVariables = { image, ratio, location, caption, date, text };
                  const variables = isEdit ? { ...defaultVariables, id } : defaultVariables;
                  mutatePost({ variables });
                } else {
                  const required = [{
                    label: ' caption',
                    value: caption,
                  }, {
                    label: ' date',
                    value: date,
                  }, {
                    label: ' image URL',
                    value: image,
                  }, {
                    label: ' image ratio',
                    value: ratio,
                  }];
                  const missing = required.filter(input => !input.value).map(input => input.label);
                  this.setState({ error: `Ooops! You’re missing: ${missing}` });
                }
              }}>
                <div className={styles.sections}>
                  <div className={styles.inputs}>
                    <h2 className={styles.formTitle}>{isEdit ? 'Edit' : 'Add new'} post</h2>
                    {isEdit && <p className={styles.id}>
                      <span className={styles.label}>ID: </span>
                      <span className={styles.value}>{id}</span>
                    </p>}
                    <TextField
                      label="Caption"
                      name="caption"
                      value={caption}
                      onChange={event => { this.onDataInput(event) }}
                    />
                    <TextField
                      label="Location"
                      name="location"
                      caption="optional"
                      value={location}
                      onChange={event => { this.onDataInput(event) }}
                    />
                    <TextField
                      label="Date"
                      name="date"
                      value={date}
                      onChange={event => { this.onDataInput(event) }}
                    />
                    <TextField
                      label="Image URL"
                      name="image"
                      value={image}
                      onChange={event => { this.onDataInput(event) }}
                    />
                    <TextField
                      label="Image ratio"
                      name="ratio"
                      value={ratio}
                      caption="(height &#215; 100 / width)"
                      onChange={event => { this.onDataInput(event) }}
                    />
                    <TextField
                      label="Instagram ID"
                      name="instagramId"
                      caption="optional"
                      value={instagramId}
                      onChange={event => { this.onDataInput(event) }}
                    />
                    <TextArea
                      label="Text"
                      name="text"
                      value={text}
                      caption="optional"
                      onChange={event => { this.onDataInput(event) }}
                    />
                  </div>
                  <div className={styles.preview}>
                    <h2 className={styles.previewTitle}>Post preview</h2>
                    <Post isSmall={true} {...this.state} />
                  </div>
                </div>
                <button className={styles.button} type="submit">
                  {_.capitalize(label)} post
                </button>
                {this.state.error && <Error message={this.state.error} />}
              </form>
            </div >
          );
        }}
      </Mutation>
    );
  }
};

export default PostForm;
