import React from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { myPagePostAtom } from 'src/globalState/GlobalState';

const MypageSideBarInfo = () => {
  const [post] = useAtom(myPagePostAtom);
  return (
    <>
      <S.ProfileArea>
        <S.ProfileImg></S.ProfileImg>
        <S.DetailArea>
          <S.Level>Lv.식신</S.Level>
          <S.NickName>닉네임 구역</S.NickName>
        </S.DetailArea>
      </S.ProfileArea>
      <S.ButtonArea>
        <S.SummaryButton>
          <S.IconArea>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M6.25 22.4999H11.55C11.7145 22.5009 11.8776 22.4693 12.0299 22.4071C12.1822 22.3449 12.3207 22.2533 12.4375 22.1374L21.0875 13.4749L24.6375 9.99992C24.7547 9.88372 24.8477 9.74547 24.9111 9.59314C24.9746 9.44082 25.0072 9.27744 25.0072 9.11242C25.0072 8.94741 24.9746 8.78403 24.9111 8.6317C24.8477 8.47938 24.7547 8.34113 24.6375 8.22492L19.3375 2.86242C19.2213 2.74526 19.083 2.65227 18.9307 2.58881C18.7784 2.52535 18.615 2.49268 18.45 2.49268C18.285 2.49268 18.1216 2.52535 17.9693 2.58881C17.817 2.65227 17.6787 2.74526 17.5625 2.86242L14.0375 6.39992L5.3625 15.0624C5.24665 15.1792 5.15499 15.3177 5.09279 15.47C5.03058 15.6223 4.99905 15.7854 5 15.9499V21.2499C5 21.5814 5.1317 21.8994 5.36612 22.1338C5.60054 22.3682 5.91848 22.4999 6.25 22.4999ZM18.45 5.51242L21.9875 9.04992L20.2125 10.8249L16.675 7.28742L18.45 5.51242ZM7.5 16.4624L14.9125 9.04992L18.45 12.5874L11.0375 19.9999H7.5V16.4624ZM26.25 24.9999H3.75C3.41848 24.9999 3.10054 25.1316 2.86612 25.366C2.6317 25.6005 2.5 25.9184 2.5 26.2499C2.5 26.5814 2.6317 26.8994 2.86612 27.1338C3.10054 27.3682 3.41848 27.4999 3.75 27.4999H26.25C26.5815 27.4999 26.8995 27.3682 27.1339 27.1338C27.3683 26.8994 27.5 26.5814 27.5 26.2499C27.5 25.9184 27.3683 25.6005 27.1339 25.366C26.8995 25.1316 26.5815 24.9999 26.25 24.9999Z"
                fill="black"
              />
            </svg>
          </S.IconArea>
          <S.Caption>편식조합</S.Caption>
          <S.Caption>15개</S.Caption>
        </S.SummaryButton>
        <S.SummaryButton>
          <S.IconArea>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M23.75 2.5C23.4185 2.5 23.1005 2.6317 22.8661 2.86612C22.6317 3.10054 22.5 3.41848 22.5 3.75V10.575L21.25 11.4125V3.75C21.25 3.41848 21.1183 3.10054 20.8839 2.86612C20.6495 2.6317 20.3315 2.5 20 2.5C19.6685 2.5 19.3505 2.6317 19.1161 2.86612C18.8817 3.10054 18.75 3.41848 18.75 3.75V11.4125L17.5 10.575V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5C15.9185 2.5 15.6005 2.6317 15.3661 2.86612C15.1317 3.10054 15 3.41848 15 3.75V11.25C15.0011 11.4559 15.053 11.6583 15.1511 11.8393C15.2492 12.0203 15.3905 12.1743 15.5625 12.2875L18.75 14.425V26.25C18.75 26.5815 18.8817 26.8995 19.1161 27.1339C19.3505 27.3683 19.6685 27.5 20 27.5C20.3315 27.5 20.6495 27.3683 20.8839 27.1339C21.1183 26.8995 21.25 26.5815 21.25 26.25V14.425L24.4375 12.2875C24.6094 12.1743 24.7508 12.0203 24.8489 11.8393C24.947 11.6583 24.9989 11.4559 25 11.25V3.75C25 3.41848 24.8683 3.10054 24.6339 2.86612C24.3995 2.6317 24.0815 2.5 23.75 2.5ZM11.25 2.5C9.5924 2.5 8.00269 3.15848 6.83058 4.33058C5.65848 5.50269 5 7.0924 5 8.75V16.25C5 16.5815 5.1317 16.8995 5.36612 17.1339C5.60054 17.3683 5.91848 17.5 6.25 17.5H10V26.25C10 26.5815 10.1317 26.8995 10.3661 27.1339C10.6005 27.3683 10.9185 27.5 11.25 27.5C11.5815 27.5 11.8995 27.3683 12.1339 27.1339C12.3683 26.8995 12.5 26.5815 12.5 26.25V3.75C12.5 3.41848 12.3683 3.10054 12.1339 2.86612C11.8995 2.6317 11.5815 2.5 11.25 2.5ZM10 15H7.5V8.75C7.49959 7.97418 7.73982 7.21734 8.18757 6.58377C8.63532 5.95021 9.26855 5.47111 10 5.2125V15Z"
                fill="black"
              />
            </svg>
          </S.IconArea>
          <S.Caption>그르르갉</S.Caption>
          <S.Caption>15개</S.Caption>
        </S.SummaryButton>
        <S.SummaryButton>
          <S.IconArea>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M26.0876 21.5625L22.7001 15.7125C23.3933 14.4394 23.7544 13.0121 23.7501 11.5625C23.7501 9.24186 22.8282 7.01626 21.1873 5.37532C19.5463 3.73437 17.3207 2.8125 15.0001 2.8125C12.6794 2.8125 10.4538 3.73437 8.81291 5.37532C7.17196 7.01626 6.25009 9.24186 6.25009 11.5625C6.24579 13.0121 6.60691 14.4394 7.30009 15.7125L3.91259 21.5625C3.80267 21.7529 3.7449 21.9689 3.74512 22.1887C3.74533 22.4086 3.80353 22.6245 3.91383 22.8147C4.02413 23.0048 4.18263 23.1625 4.37335 23.2719C4.56407 23.3813 4.78025 23.4384 5.00009 23.4375H8.58759L10.4126 26.5125C10.4741 26.6144 10.5499 26.707 10.6376 26.7875C10.8693 27.0109 11.1783 27.1362 11.5001 27.1375H11.6751C11.8638 27.1117 12.0441 27.0431 12.2023 26.9369C12.3604 26.8308 12.4922 26.6899 12.5876 26.525L15.0001 22.375L17.4126 26.5625C17.5094 26.725 17.6418 26.8635 17.7999 26.9674C17.9579 27.0714 18.1375 27.1381 18.3251 27.1625H18.5001C18.8263 27.1645 19.1403 27.0389 19.3751 26.8125C19.4592 26.7366 19.5309 26.648 19.5876 26.55L21.4126 23.475H25.0001C25.2204 23.4759 25.4369 23.4185 25.6279 23.3088C25.8189 23.199 25.9775 23.0408 26.0876 22.85C26.2044 22.6556 26.2661 22.4331 26.2661 22.2062C26.2661 21.9794 26.2044 21.7569 26.0876 21.5625ZM11.4876 23.475L10.3751 21.6125C10.2655 21.4277 10.1102 21.2743 9.92412 21.167C9.73801 21.0597 9.5274 21.0022 9.31259 21H7.15009L8.93759 17.9C10.1685 19.0861 11.7199 19.8857 13.4001 20.2L11.4876 23.475ZM15.0001 17.8125C13.764 17.8125 12.5556 17.4459 11.5278 16.7592C10.5 16.0724 9.69889 15.0963 9.22584 13.9543C8.7528 12.8122 8.62903 11.5556 8.87018 10.3432C9.11134 9.1308 9.7066 8.01716 10.5807 7.14308C11.4548 6.269 12.5684 5.67375 13.7808 5.43259C14.9932 5.19143 16.2498 5.31521 17.3919 5.78825C18.5339 6.2613 19.51 7.06238 20.1968 8.09019C20.8835 9.11799 21.2501 10.3264 21.2501 11.5625C21.2501 13.2201 20.5916 14.8098 19.4195 15.9819C18.2474 17.154 16.6577 17.8125 15.0001 17.8125ZM20.6876 21C20.4728 21.0022 20.2622 21.0597 20.0761 21.167C19.89 21.2743 19.7346 21.4277 19.6251 21.6125L18.5126 23.475L16.6126 20.1625C18.2869 19.8417 19.8326 19.0429 21.0626 17.8625L22.8501 20.9625L20.6876 21Z"
                fill="black"
              />
            </svg>
          </S.IconArea>
          <S.Caption>뱃지 개수</S.Caption>
          <S.Caption>15개</S.Caption>
        </S.SummaryButton>
      </S.ButtonArea>
    </>
  );
};

export default MypageSideBarInfo;

const S = {
  ProfileArea: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px 16px 32px 16px;
  `,
  ProfileImg: styled.div`
    width: 60px;
    height: 60px;
    border-radius: 75px;
    background: #d9d9d9;
  `,
  DetailArea: styled.div``,
  Level: styled.div`
    border-radius: 100px;
    /* width: 58px; */
    height: 20px;
    padding: 0px 9px 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    background: #d9d9d9;
  `,
  NickName: styled.div`
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  `,
  ButtonArea: styled.div`
    display: flex;
    margin: 0 16px 24px 16px;
    /* justify-content: center; */
    gap: 9px;
  `,
  SummaryButton: styled.div`
    width: 82px;
    height: 94px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  IconArea: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
  `,
  Caption: styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  `
};
