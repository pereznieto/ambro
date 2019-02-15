import React from 'react';
import { Query } from "react-apollo";
import { RouteComponentProps } from 'react-router';
import { GET_POST } from '../../utils/queries';
import LoadingDot from '../LoadingDot/LoadingDot';
import Post from '../Post/Post';
import PostForm, { FormType } from '../PostForm/PostForm';
import Error from '../Error/Error';

interface PostWrapperProps extends RouteComponentProps<{ id: string }> {
  isSmall?: boolean;
};

const PostWrapper = ({ match: { params: { id }, path }, isSmall }: PostWrapperProps) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingDot />;
      if (error) return <Error message="Error loading post" />;

      const isEdit = !!~path.indexOf('edit');
      return isEdit ?
        <PostForm id={id} type={FormType.EDIT} {...data.post} /> :
        <Post id={id} {...data.post} isSmall={isSmall} />;
    }}
  </Query>
);

export default PostWrapper;
