import React from 'react';
import { FlexCenter } from 'src/styles/styleFlex';
import { styleFont } from 'src/styles/styleFont';
import styled from 'styled-components';
import { IconNoSearchResult } from '../icons';
import { useLocation, useNavigate } from 'react-router';

const NoPost = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Logo>
        <IconNoSearchResult />
      </S.Logo>
      <S.Caption>앗! 보관된 글이 없어요!</S.Caption>
    </S.Container>
  );
};

export default NoPost;

const S = {
  Container: styled(FlexCenter)`
    flex-direction: column;
    margin-top: 200px;
  `,
  Ment: styled.div``,
  Logo: styled.div`
    margin-bottom: 32px;
  `,
  Caption: styled.span`
    color: var(--font-black, var(--Black, #242424));
    text-align: center;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 16px;
  `,
  SearchKeyWord: styled.span`
    color: var(--neutral-500, var(--Black, #667085));
    text-align: center;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  `,
  NavigateButton: styled.div`
    width: 210px;
    padding: 7px 34px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    color: var(--font-black, var(--Black, #242424));
    cursor: pointer;
    ${styleFont.bodyMedium}
    font-weight: 700;
  `
};
