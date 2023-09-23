import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from 'src/components/post/svg/Add.svg';
import { FlexAlign, FlexCenter } from 'src/styles/styleFlex';

const WriteHeader = () => {
  return (
    <S.TopBarMenuContainer>
      <S.AddButton as="button" type="submit">
        <S.AddText>공유하기</S.AddText>
        <S.AddIcon>
          <Add />
        </S.AddIcon>
      </S.AddButton>
    </S.TopBarMenuContainer>
  );
};

export default WriteHeader;

const S = {
  TopBarMenuContainer: styled(FlexAlign)`
    gap: 24px;
    position: absolute;
    right: 16px;
  `,
  AddButton: styled(FlexCenter)`
    background: #d9d9d9;

    width: 110px;
    height: 34px;
    padding: 5px 15px;
    border-radius: 10px;

    gap: 4px;
  `,

  AddText: styled.div`
    color: #000;

    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  `,

  AddIcon: styled.div`
    width: 20px;
    height: 20px;
  `
};
