import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { OrgPostIdProbs, Post } from 'src/types/types';
import useLoginUserId from 'src/hooks/useLoginUserId';
import useMutate from 'src/hooks/usePost';
import EditorQuill from './EditorQuill';
import { ReactComponent as Add } from 'src/components/post/svg/Add.svg';
import { ReactComponent as Select } from 'src/components/post/svg/Select.svg';
import { S } from './StyledPostWriteCommon';

interface orgPostIdProps {
  orgPostId: string;
}

const PostWriteCommon = ({ orgPostId }: orgPostIdProps) => {
  const navigate = useNavigate();
  const userId: string | undefined = useLoginUserId();
  const postRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const { addPostMutate } = useMutate();

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      postCategory: 'common',
      orgPostId,
      title,
      body,
      userId
    };
    addPostMutate.mutate(newPost);
    navigate(`/`);
  };

  return (
    <S.WriteArea>
      <S.WriteForm onSubmit={submitPost}>
        <S.WriteHeader>
          <div onClick={() => navigate(`/`)}>로고 영역</div>
          <S.AddButton type="submit">
            <S.AddText>공유하기</S.AddText>
            <S.AddIcon>
              <Add />
            </S.AddIcon>
          </S.AddButton>
        </S.WriteHeader>
        <S.TitleBox>
          <S.CategoryText>그르르갉 </S.CategoryText>
          <S.Contour />
          <S.Title
            ref={postRef}
            type="text"
            name="title"
            placeholder="제목 생략 가능"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus
          />
          <S.SelectCategory>
            <S.SelectIcon>
              <Select />
            </S.SelectIcon>
            <S.SelectText>편식조합</S.SelectText>
          </S.SelectCategory>
        </S.TitleBox>
        <S.EditorArea>
          <EditorQuill body={body} setBody={setBody} />
        </S.EditorArea>
      </S.WriteForm>
    </S.WriteArea>
  );
};

export default PostWriteCommon;
