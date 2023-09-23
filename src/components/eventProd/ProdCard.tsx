import React from 'react';
import styled from 'styled-components';
import { Product } from 'src/types/common';
import { FlexAlign, FlexCenter } from 'src/styles/styleFlex';
import { styleFont } from 'src/styles/styleFont';
import { setBrandName } from 'src/function/setBrandName';
import { IMAGE_ERROR } from 'src/utility/message';

interface Props {
  data: Product;
}

const ProdCard = ({ data }: Props) => {
  return (
    <S.ProdBox>
      <S.EventBar $brandName={data.prodBrand}>
        <S.EventBarBrand>{setBrandName(data.prodBrand)}</S.EventBarBrand>
        {data.event && (
          <>
            <S.EventDetailMonth>9월 간</S.EventDetailMonth>
            <S.EventDetail>{data.event?.type}</S.EventDetail>
          </>
        )}
      </S.EventBar>
      <S.ProdInfoBox>
        <S.ProdName>{data.prodName}</S.ProdName>
        <S.ProdPrice>{data.price}</S.ProdPrice>
      </S.ProdInfoBox>
      <S.ProdInnerBox>
        <S.ProdImg $src={data.prodImg} onError={IMAGE_ERROR} />
      </S.ProdInnerBox>
    </S.ProdBox>
  );
};

export default ProdCard;

interface ColorProps {
  $brandName: string;
}

const S = {
  ProdBox: styled.div`
    width: 200px;
    height: 260px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    background-color: white;
  `,
  EventBar: styled(FlexCenter)<ColorProps>`
    height: 28px;
    gap: 4px;
    background-color: ${(props) => {
      switch (props.$brandName) {
        case 'GS25':
          return '#2ABADA';
        case 'CU':
          return '#652F8D';
        case '7-ELEVEn':
          return '#008061';
        case 'emart24':
          return '#FFB81C;';

        default:
          return 'black';
      }
    }};
  `,
  EventBarBrand: styled.div`
    display: center;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    padding: 2px 7px;
    color: #000;
    text-align: center;
    ${styleFont.labelSmall}
    background-color: white;
  `,
  EventDetail: styled.div`
    color: white;
    text-align: center;
    ${styleFont.bodyMedium}
  `,
  EventDetailMonth: styled.div`
    color: var(--white, #fff);
    text-align: center;

    ${styleFont.bodyMedium}
  `,
  ProdInfoBox: styled(FlexAlign)`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 60px;

    flex-direction: column;
    padding: 8px 4px;
    gap: 8px;
  `,
  ProdName: styled.div`
    overflow: hidden;
    color: #000;
    text-align: center;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  `,
  ProdPrice: styled.div`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  `,
  ProdInnerBox: styled.div`
    width: 200px;
    height: 182px;
    padding: 20px;
  `,
  ProdImg: styled.div<{ $src: string }>`
    width: 100%;
    height: 100%;

    background-image: ${(props) => `url(${props.$src})`};
    background-position: center;
    background-size: contain;
  `
};
