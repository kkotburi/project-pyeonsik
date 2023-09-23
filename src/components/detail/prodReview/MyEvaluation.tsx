import React from 'react';
import useLoginUserId from 'src/hooks/useLoginUserId';
import { Swiper } from 'src/types/common';
import { IconBadFace, IconGoodFace } from 'src/components/icons';
import { styled } from 'styled-components';
import { FlexAlign, FlexCenter } from 'src/styles/styleFlex';

export interface MyeEvaluationProps {
  swipers: Swiper[];
  prodId: string;
  isGood?: boolean;
}

const MyEvaluation = ({ swipers, prodId }: MyeEvaluationProps) => {
  const userId = useLoginUserId();
  const isRate = swipers?.find((swiper) => swiper.prodId === prodId && swiper.userId === userId);

  return (
    <>
      {isRate && (
        <S.MyEvaluationArea>
          <S.MyText>나의 평가: </S.MyText>
          <S.IconFaceBox>{isRate.isGood ? <IconGoodFace /> : <IconBadFace />}</S.IconFaceBox>
          <S.MyText>{isRate.isGood ? '또 사 먹을래요!' : '그만 먹을래요!'}</S.MyText>
        </S.MyEvaluationArea>
      )}
    </>
  );
};

export default MyEvaluation;

const S = {
  MyEvaluationArea: styled(FlexCenter)`
    gap: 4px;
  `,

  IconFaceBox: styled.div`
    width: 16px;
    height: 16px;
  `,

  MyText: styled(FlexAlign)`
    color: var(--neutral-500, #667085);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  `
};
