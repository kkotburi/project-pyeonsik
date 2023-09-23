import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TextAreaInputProps } from 'src/types/common';

const PostWriteBodyInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ name, id = name, title, value, onChange, autoFocus }, ref) => {
    return (
      <S.InputContainer>
        <S.TextAreaElement
          placeholder="어떤 상품으로 만든 레시피인가요?&#13;&#10;사진을 추가하여 해당 상품을 검색하고 태그해 보세요.&#13;&#10;태그 후에는 완료 버튼을 꼭 눌러주세요."
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      </S.InputContainer>
    );
  }
);

export default PostWriteBodyInput;

const S = {
  InputContainer: styled.div``,
  Label: styled.label`
    font-weight: bold;
  `,
  TextAreaElement: styled.textarea`
    width: 578px;
    border-radius: 10px;

    min-height: 360px;
    border: none;

    resize: none;
    padding: 24px 22px;

    color: var(--font-black, var(--Black, #242424));

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    box-sizing: border-box;

    outline: none;
  `
};
