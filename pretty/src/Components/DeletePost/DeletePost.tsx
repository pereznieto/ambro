import React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { DELETE_POST } from '../../utils/queries';
import LoadingDot from '../LoadingDot/LoadingDot';
import PostWrapper from '../PostWrapper/PostWrapper';
import styles from './DeletePost.module.scss';
import Error from '../Error/Error';

interface DeletePostProps extends RouteComponentProps<{ id: string }> { };

const DeletePost = ({ match: { params: { id } }, history, location, match }: DeletePostProps) => (
  <Mutation mutation={DELETE_POST}>
    {(deletePost, { data, loading, called, error }) => {
      if (loading) return <LoadingDot />;
      if (error) return (
        <React.Fragment>
          <Error message="Error deleting post" />
          <p className={styles.center}>{error.message}</p>
        </React.Fragment>
      );
      if (called && !!data) return <h2 className={styles.center}>Post with id: {id} deleted successfully.</h2>;

      return (
        <form
          className={styles.center}
          onSubmit={event => {
            event.preventDefault();
            deletePost({ variables: { id } });
          }}>
          <h2 className={styles.warning}>
            Are you sure you want to delete post with ID: <span className={styles.thick}>{id}</span>?
          </h2>
          <p className={styles.warningSmall}>
            This action <strong><em>cannot</em></strong> be undone.
          </p>
          <div className={styles.miniPost}>
            <PostWrapper isSmall={true} match={match} history={history} location={location} />
          </div>
          <button className={styles.button} type="submit">
            Delete post
          </button>
        </form>
      );
    }}
  </Mutation>
);

export default DeletePost;
