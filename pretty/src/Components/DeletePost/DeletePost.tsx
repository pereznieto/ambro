import React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { DELETE_POST } from '../../utils/queries';
import LoadingDot from '../LoadingDot/LoadingDot';
import PostWrapper from '../PostWrapper/PostWrapper';
import styles from './DeletePost.module.scss';

interface DeletePostProps extends RouteComponentProps<{ id: string }> { };

const DeletePost = ({ match: { params: { id } }, history, location, match }: DeletePostProps) => (
  <Mutation mutation={DELETE_POST}>
    {(deletePost, { data, loading, called, error }) => {
      if (loading) return <LoadingDot />;
      if (error) return (
        <React.Fragment>
          <h2>Error deleting post:</h2>
          <p>{error.message}</p>
        </React.Fragment>
      );
      if (called && !!data) return <h2>Post with id: {id} deleted successfully.</h2>;

      return (
        <form onSubmit={event => {
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
