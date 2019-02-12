import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Query } from "react-apollo";
import { GET_POST } from '../../utils/queries';
import LoadingDot from '../LoadingDot/LoadingDot';
import Post from '../Post/Post';
import PostForm, { FormType } from '../PostForm/PostForm';

interface PostWrapperProps extends RouteComponentProps<{ id: string }> { };

const PostWrapper = ({ match: { params: { id }, path } }: PostWrapperProps) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingDot />;
      if (error) return <p>Error loading post</p>;

      const isEdit = !!~path.indexOf('edit');
      return isEdit ?
        <PostForm id={id} type={FormType.EDIT} {...data.post} /> :
        <Post id={id} {...data.post} />;
    }}
  </Query>
);

export default PostWrapper;
