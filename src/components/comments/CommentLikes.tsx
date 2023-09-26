import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getLikeByCommentId } from 'src/api/commentLike';
import useLoginUserId from 'src/hooks/useLoginUserId';
import styled from 'styled-components';
import { IconLiked, IconUnLiked } from 'src/components/icons';
import supabase from 'src/lib/supabaseClient';
import { useLocation, useNavigate, useParams } from 'react-router';
import { EMAIL_CHECK } from 'src/utility/message';
import { toast } from 'react-toastify';
import ProgressCircle from 'src/components/ProgressCircle';

interface Props {
  commentId: string;
}

const CommentLikes = ({ commentId }: Props) => {
  const [isLike, setIsLike] = useState<boolean>();
  const userId: string = useLoginUserId();
  const navigate = useNavigate();
  const location = useLocation();
  const { id: postId } = useParams();
  const [likeNum, setLikeNum] = useState<number>(0);

  const { data: likeData, isLoading } = useQuery(['likes', commentId], () => getLikeByCommentId(commentId, userId), {
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    setLikeNum(likeData?.likeNum as number);
    if (likeData?.myLike === 1) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [likeData]);

  const clickButton = async () => {
    if (!userId) {
      toast(EMAIL_CHECK);
      navigate('/login', { state: { backgroundLocation: location } });
      return;
    }
    if (isLike) {
      await supabase.from('comment_likes').delete().eq('commentId', commentId).eq('userId', userId);

      setLikeNum(likeNum! - 1);
      setIsLike(!isLike);
    } else {
      await supabase.from('comment_likes').insert({ commentId, userId, postId });
      setLikeNum(likeNum! + 1);
      setIsLike(!isLike);
    }
  };

  if (isLoading) {
    return (
      <S.LikeNum>
        <ProgressCircle />
      </S.LikeNum>
    );
  }

  if (isLike === undefined) {
    return (
      <S.LikeNum>
        <ProgressCircle />
      </S.LikeNum>
    );
  }

  return (
    <>
      <S.LikeButton onClick={clickButton}>{isLike ? <IconLiked /> : <IconUnLiked />}</S.LikeButton>
      <S.LikeNum>{likeNum}개</S.LikeNum>
    </>
  );
};

export default CommentLikes;

const S = {
  LikeButton: styled.div`
    cursor: pointer;
  `,

  LikeNum: styled.div`
    color: var(--neutral-500, #667085);
    text-align: right;

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  `
};
