import styled from 'styled-components';
import { Flex, FlexAlign, FlexCenter } from 'src/styles/styleFlex';
import { styleFont } from 'src/styles/styleFont';

export const S = {
  BubbleContainer: styled.div`
    margin-top: 96px;
  `,
  BubbleTail: styled(Flex)`
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
  `,
  BubbleTailFalse: styled(Flex)`
    z-index: 2;
    background: #fff;

    margin-top: -14px;
    width: 13px;
    height: 13px;
    transform: rotate(45deg);
  `,
  BubbleBox: styled(FlexCenter)`
    z-index: 1;

    margin-top: -7.9px;
    width: 195px;
    height: 26px;
    flex-shrink: 0;

    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);

    color: var(--font-black, var(--Black, #242424));
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  `,

  ImageTagContainer: styled(Flex)`
    position: relative;
    margin-right: 12px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  `,

  AddTagButton: styled(FlexCenter)`
    cursor: pointer;

    &:hover .dropDownLink {
      cursor: auto;
      position: absolute;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .dropDownLink {
      display: none;
    }

    width: 180px;
    height: 48px;
    gap: 8px;
    border-radius: 100px;
    background: var(--white, #fff);

    color: var(--font-black, var(--Black, #242424));
    text-align: center;
    position: absolute;

    bottom: 32px;
    left: calc((360px - 180px) / 2);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  `,
  IconBox: styled(FlexCenter)`
    width: 20px;
    height: 20px;
    background: var(--neutral-200, #e4e7ec);
    border-radius: 50px;
  `,

  ImageContainer: styled.div`
    position: relative;
    border-radius: 10px;
    margin-right: 12px;
  `,

  Image: styled.img`
    width: 360px;
    height: 360px;
    object-fit: cover;
    border-radius: 10px;
  `,

  TagImage: styled.img`
    width: 80px;
    height: 80px;
  `,

  TagContainer: styled(FlexAlign)`
    width: 356px;
    height: 100px;
    background-size: 30px;
    position: absolute;
    width: 20px;
    height: 20px;
  `,

  TagDataContainer: styled(Flex)<{ searchFormHandler: boolean }>`
    margin-top: 150px;
    z-index: 2;
    position: absolute;
    left: -178px;
    width: 356px;
    height: 100px;
    background-color: ${(props) => (props.searchFormHandler ? 'transparent' : 'white')};
    padding: 8px;
    box-sizing: border-box;
    border-radius: 10px;
  `,

  DataContainer: styled(Flex)`
    margin-top: 25px;
    flex-direction: column;
  `,

  ProdContainer: styled.div`
    width: 246px;
    font-family: Pretendard;
    font-weight: 600;
    font-size: 16px;
    height: 50px;
  `,

  ProdBrandContainer: styled.div`
    width: 113px;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 14px;
    font-family: Pretendard;
    height: 20px;
  `,

  DeleteButton: styled.button`
    width: 24px;
    height: 16px;
    font-size: 8px;
    background-color: transparent;
    cursor: pointer;
  `,

  CloseButton: styled.button`
    width: 40px;
    height: 30px;
    right: 30px;
    top: 25px;
    position: absolute;
    &:hover {
      color: gray;
    }

    ${styleFont.bodyMedium}
  `,

  SearchResultsContainer: styled.div`
    width: 400px;
    height: 478px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    margin-right: 150px;

    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  `,

  DeleteIconContainer: styled(FlexAlign)`
    width: 40px;
    margin-left: 210px;
    font-family: pretendard;
    font-weight: 600;
    font-size: 11px;
    color: #98a2b3;
  `,

  TagIconContainer: styled(FlexCenter)`
    position: relative;
  `,
  TagIconBox: styled(FlexCenter)`
    cursor: pointer;

    width: 40px;
    height: 40px;

    border-radius: 100px;

    background-color: white;

    position: absolute;
    top: -30px;
    left: -20px;
  `,

  ModalContainer: styled(FlexCenter)`
    position: absolute;
    color: #242424;
    width: 195px;
    height: 26px;

    font-size: 10px;
    font-weight: 600;
    font-family: Pretendard;
    background-color: #ffffff;
    border-radius: 10px;
    margin-top: 340px;
    margin-left: 140px;
  `
};
