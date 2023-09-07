import React from 'react';
import styled from 'styled-components';
import { confirmAlert, ReactConfirmAlertProps } from 'react-confirm-alert';
import { FlexBox, FlexBoxCenter } from 'src/styles/styleBox';
import { styleFont } from 'src/styles/styleFont';
import { confirmModalText } from './confirmModalText';

const Confirm = (type: string) => {
  const text = confirmModalText(type);

  return new Promise<boolean>((resolve, reject) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <>
            <S.Container>
              <S.ConfirmBox>
                <S.Title>{text.title}</S.Title>
                <S.Caption>{text.caption}</S.Caption>
                <S.ButtonArea>
                  <S.FalseButton
                    $type={type}
                    onClick={() => {
                      resolve(false);
                      onClose();
                    }}
                  >
                    {text.false}
                  </S.FalseButton>
                  <S.TrueButton
                    $type={type}
                    onClick={() => {
                      resolve(true);
                      onClose();
                    }}
                  >
                    {text.true}
                  </S.TrueButton>
                </S.ButtonArea>
              </S.ConfirmBox>
            </S.Container>
            <S.Background
              onClick={() => {
                resolve(false);
                onClose();
              }}
            />
          </>
        );
      },
      closeOnClickOutside: false,
      closeOnEscape: false
    });
  });
};

export default Confirm;

const ButtonBasic = styled(FlexBoxCenter)`
  width: 122px;
  height: 36px;
  border-radius: 6px;
  text-align: center;
`;
interface ButtonProps {
  $type: string;
}

const S = {
  Container: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 102;
    overflow: hidden;
  `,
  Background: styled(FlexBoxCenter)`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    z-index: 101;
  `,
  ConfirmBox: styled(FlexBoxCenter)`
    width: 400px;
    height: 274px;
    border-radius: 10px;
    background: #fff;

    padding: 30px;

    position: fixed;
    top: calc((100vh - 274px) / 2);
    right: calc((100vw - 400px) / 2);
    z-index: 103;
    flex-direction: column;
  `,
  Title: styled.p`
    color: var(--font-black, var(--Black, #242424));
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 127.273% */
  `,
  Caption: styled.p`
    color: var(--font-black, var(--Black, #242424));
    text-align: center;
    margin: 30px 0 42px;
    white-space: pre-line;
    ${styleFont.bodyLarge};
  `,
  ButtonArea: styled(FlexBox)``,
  TrueButton: styled(ButtonBasic)<ButtonProps>`
    background: var(--main, #f02826);
    color: #fff;
    ${styleFont.buttonSmall}
  `,
  FalseButton: styled(ButtonBasic)<ButtonProps>`
    color: var(--font-black, var(--Black, #242424));

    ${styleFont.buttonSmall}
  `
};