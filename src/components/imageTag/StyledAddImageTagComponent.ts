import styled from 'styled-components';
import { Flex, FlexCenter } from 'src/styles/styleFlex';

export const ArrowIconWrapper = styled(FlexCenter)`
  position: absolute;
  top: 70%;
  left: 26.3px;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  margin-top: 1.6px;
`;

export const DocIconWrapper = styled(FlexCenter)`
  position: absolute;
  top: 70%;
  left: -24px;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const S = {
  ButtonThumbnailArea: styled(Flex)`
    width: 48px;
    position: fixed;
    left: calc((100vw - 1280px) / 2 + 93px);
    z-index: 1;
    flex-direction: column;
    gap: 8px;
  `,

  SmallButton: styled(FlexCenter)`
    margin-left: -24px;
    margin-top: 11px;
    width: 100px;
    height: 48px;
  `,

  ThumbnailImg: styled.img`
    border-radius: 10px;
    width: 48px;
    height: 48px;
    object-fit: cover;
    cursor: pointer;

    transition: filter 0.3s ease, opacity 0.3s ease;
    &:hover {
      filter: brightness(0.6);
    }
  `,

  ThumbnailImgWrapper: styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    cursor: pointer;

    &:hover {
      ${ArrowIconWrapper} {
        opacity: 1;
      }
      ${DocIconWrapper} {
        opacity: 1;
      }
    }
  `,

  Contents: styled(Flex)`
    position: relative;
  `,
  ContentArea: styled.div``,
  RemoveButton: styled.button`
    width: 48px;
    height: 48px;
    position: absolute;
    left: 962px;
  `,

  AddBtn: styled.button`
    margin-left: 0px;
  `,

  BackGroundColor: styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--Background, #f6f7f9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  `,

  ModalOverlay: styled(FlexCenter)`
    background-color: #242424;
    border-radius: 5px;
    position: absolute;

    width: 115px;
    height: 24px;
    top: -30px;
    left: -45px;
  `,

  ModalContainer: styled.div``,

  ModalContent: styled(FlexCenter)`
    color: #ffffff;
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
  `
};
