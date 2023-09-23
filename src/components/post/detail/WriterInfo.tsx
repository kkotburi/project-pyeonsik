import React from 'react';
import { Post } from 'src/types/common';

const WriterInfo = (post: Post) => {
  const postWriter = post?.userId;

  return (
    <div>
      <img src={postWriter.profileImg} />
      <div>작성자 등급</div>
      <div>{postWriter.nickname}</div>
      <div>{post.created_at}</div>
    </div>
  );
};

export default WriterInfo;
