import React from 'react';
import { useAtom } from 'jotai';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MypageSideBarButtonTab = () => {
  const location = useLocation();

  return (
    <S.Container>
      <S.TapButton to={'mypage/profile'} $type={'/mypage/profile'} $location={location.pathname}>
        <S.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="100%" height="100%" fill="none" />
            <path
              d="M10.0001 1.6665C8.38385 1.66957 6.80336 2.1426 5.45115 3.02795C4.09893 3.91331 3.03337 5.17279 2.38424 6.65298C1.73511 8.13317 1.53044 9.77019 1.79514 11.3646C2.05985 12.9591 2.78252 14.4421 3.87512 15.6332C4.65547 16.479 5.60257 17.1541 6.65674 17.6158C7.7109 18.0776 8.84927 18.3159 10.0001 18.3159C11.151 18.3159 12.2893 18.0776 13.3435 17.6158C14.3977 17.1541 15.3448 16.479 16.1251 15.6332C17.2177 14.4421 17.9404 12.9591 18.2051 11.3646C18.4698 9.77019 18.2651 8.13317 17.616 6.65298C16.9669 5.17279 15.9013 3.91331 14.5491 3.02795C13.1969 2.1426 11.6164 1.66957 10.0001 1.6665ZM10.0001 16.6665C8.27384 16.6639 6.61588 15.9917 5.37512 14.7915C5.75183 13.8745 6.39265 13.0901 7.21617 12.5381C8.03968 11.9861 9.00871 11.6913 10.0001 11.6913C10.9915 11.6913 11.9606 11.9861 12.7841 12.5381C13.6076 13.0901 14.2484 13.8745 14.6251 14.7915C13.3844 15.9917 11.7264 16.6639 10.0001 16.6665ZM8.33346 8.33317C8.33346 8.00354 8.4312 7.6813 8.61434 7.40722C8.79748 7.13314 9.05777 6.91952 9.36232 6.79337C9.66686 6.66723 10.002 6.63422 10.3253 6.69853C10.6486 6.76284 10.9455 6.92157 11.1786 7.15466C11.4117 7.38775 11.5705 7.68472 11.6348 8.00802C11.6991 8.33132 11.6661 8.66643 11.5399 8.97098C11.4138 9.27552 11.2002 9.53582 10.9261 9.71895C10.652 9.90209 10.3298 9.99984 10.0001 9.99984C9.55809 9.99984 9.13417 9.82424 8.82161 9.51168C8.50905 9.19912 8.33346 8.7752 8.33346 8.33317ZM15.7585 13.3332C15.0139 12.0596 13.868 11.069 12.5001 10.5165C12.9244 10.0354 13.2009 9.44205 13.2963 8.8077C13.3918 8.17335 13.3022 7.52493 13.0382 6.94025C12.7743 6.35557 12.3473 5.85947 11.8084 5.51148C11.2695 5.16348 10.6416 4.97838 10.0001 4.97838C9.35863 4.97838 8.73076 5.16348 8.19187 5.51148C7.65297 5.85947 7.22593 6.35557 6.962 6.94025C6.69806 7.52493 6.60844 8.17335 6.7039 8.8077C6.79935 9.44205 7.07582 10.0354 7.50012 10.5165C6.13229 11.069 4.98635 12.0596 4.24179 13.3332C3.64841 12.3224 3.33489 11.1719 3.33346 9.99984C3.33346 8.23173 4.03583 6.53604 5.28608 5.28579C6.53632 4.03555 8.23201 3.33317 10.0001 3.33317C11.7682 3.33317 13.4639 4.03555 14.7142 5.28579C15.9644 6.53604 16.6668 8.23173 16.6668 9.99984C16.6654 11.1719 16.3518 12.3224 15.7585 13.3332Z"
              fill="black"
            />
          </svg>
        </S.Icon>
        프로필
      </S.TapButton>

      <S.TapButton to={'mypage/mypost?=mypost'} $type={'/mypage/mypost'} $location={location.pathname}>
        <S.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="100%" height="100%" fill="none" />
            <path
              d="M8.33331 10.8333H11.6666C11.8877 10.8333 12.0996 10.7455 12.2559 10.5893C12.4122 10.433 12.5 10.221 12.5 10C12.5 9.77899 12.4122 9.56702 12.2559 9.41074C12.0996 9.25446 11.8877 9.16667 11.6666 9.16667H8.33331C8.1123 9.16667 7.90034 9.25446 7.74406 9.41074C7.58777 9.56702 7.49998 9.77899 7.49998 10C7.49998 10.221 7.58777 10.433 7.74406 10.5893C7.90034 10.7455 8.1123 10.8333 8.33331 10.8333ZM15.8333 2.5H4.16664C3.58036 2.50455 3.01432 2.71501 2.56748 3.0946C2.12064 3.47418 1.82143 3.99874 1.72215 4.57658C1.62286 5.15441 1.72982 5.74876 2.02434 6.25572C2.31885 6.76269 2.78217 7.15002 3.33331 7.35V15C3.33331 15.663 3.5967 16.2989 4.06554 16.7678C4.53439 17.2366 5.17027 17.5 5.83331 17.5H14.1666C14.8297 17.5 15.4656 17.2366 15.9344 16.7678C16.4033 16.2989 16.6666 15.663 16.6666 15V7.35C17.2178 7.15002 17.6811 6.76269 17.9756 6.25572C18.2701 5.74876 18.3771 5.15441 18.2778 4.57658C18.1785 3.99874 17.8793 3.47418 17.4325 3.0946C16.9856 2.71501 16.4196 2.50455 15.8333 2.5ZM15 15C15 15.221 14.9122 15.433 14.7559 15.5893C14.5996 15.7455 14.3877 15.8333 14.1666 15.8333H5.83331C5.6123 15.8333 5.40034 15.7455 5.24406 15.5893C5.08778 15.433 4.99998 15.221 4.99998 15V7.5H15V15ZM15.8333 5.83333H4.16664C3.94563 5.83333 3.73367 5.74554 3.57739 5.58926C3.42111 5.43298 3.33331 5.22101 3.33331 5C3.33331 4.77899 3.42111 4.56702 3.57739 4.41074C3.73367 4.25446 3.94563 4.16667 4.16664 4.16667H15.8333C16.0543 4.16667 16.2663 4.25446 16.4226 4.41074C16.5788 4.56702 16.6666 4.77899 16.6666 5C16.6666 5.22101 16.5788 5.43298 16.4226 5.58926C16.2663 5.74554 16.0543 5.83333 15.8333 5.83333Z"
              fill="black"
            />
          </svg>
        </S.Icon>
        보관함
      </S.TapButton>

      <S.TapButton to={'mypage/achievement'} $type={'/mypage/achievement'} $location={location.pathname}>
        <S.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="100%" height="100%" fill="none" />
            <path
              d="M17.3916 14.375L15.1332 10.475C15.5954 9.62625 15.8361 8.67473 15.8332 7.70833C15.8332 6.16124 15.2186 4.67751 14.1247 3.58354C13.0307 2.48958 11.547 1.875 9.9999 1.875C8.4528 1.875 6.96907 2.48958 5.87511 3.58354C4.78115 4.67751 4.16656 6.16124 4.16656 7.70833C4.16369 8.67473 4.40444 9.62625 4.86656 10.475L2.60823 14.375C2.53495 14.5019 2.49644 14.6459 2.49658 14.7925C2.49673 14.9391 2.53552 15.083 2.60906 15.2098C2.68259 15.3366 2.78826 15.4417 2.9154 15.5146C3.04255 15.5875 3.18667 15.6256 3.33323 15.625H5.7249L6.94156 17.675C6.98258 17.7429 7.03309 17.8047 7.09156 17.8583C7.24605 18.0072 7.45201 18.0908 7.66656 18.0917H7.78323C7.90904 18.0744 8.02925 18.0287 8.13468 17.9579C8.24011 17.8872 8.32798 17.7932 8.39156 17.6833L9.9999 14.9167L11.6082 17.7083C11.6728 17.8167 11.761 17.909 11.8664 17.9783C11.9718 18.0476 12.0915 18.092 12.2166 18.1083H12.3332C12.5507 18.1096 12.76 18.0259 12.9166 17.875C12.9726 17.8244 13.0204 17.7654 13.0582 17.7L14.2749 15.65H16.6666C16.8134 15.6506 16.9578 15.6124 17.0851 15.5392C17.2124 15.466 17.3181 15.3605 17.3916 15.2333C17.4694 15.1037 17.5106 14.9554 17.5106 14.8042C17.5106 14.653 17.4694 14.5046 17.3916 14.375ZM7.65823 15.65L6.91656 14.4083C6.84353 14.2851 6.73999 14.1828 6.61592 14.1113C6.49184 14.0398 6.35143 14.0015 6.20823 14H4.76656L5.95823 11.9333C6.77884 12.7241 7.81308 13.2571 8.93323 13.4667L7.65823 15.65ZM9.9999 11.875C9.17581 11.875 8.37023 11.6306 7.68502 11.1728C6.99982 10.715 6.46576 10.0642 6.1504 9.30285C5.83503 8.54149 5.75252 7.70371 5.91329 6.89546C6.07406 6.0872 6.4709 5.34477 7.05362 4.76205C7.63634 4.17934 8.37877 3.7825 9.18702 3.62173C9.99528 3.46096 10.8331 3.54347 11.5944 3.85884C12.3558 4.1742 13.0065 4.70825 13.4644 5.39346C13.9222 6.07866 14.1666 6.88424 14.1666 7.70833C14.1666 8.8134 13.7276 9.87321 12.9462 10.6546C12.1648 11.436 11.105 11.875 9.9999 11.875ZM13.7916 14C13.6484 14.0015 13.508 14.0398 13.3839 14.1113C13.2598 14.1828 13.1563 14.2851 13.0832 14.4083L12.3416 15.65L11.0749 13.4417C12.1911 13.2278 13.2215 12.6953 14.0416 11.9083L15.2332 13.975L13.7916 14Z"
              fill="black"
            />
          </svg>
        </S.Icon>
        편식 업적
      </S.TapButton>

      {/* <S.TapButton to={'/'}>
        <S.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="100%" height="100%" fill="none" />
            <path
              d="M18.0918 12.9834L14.3251 9.22507C14.404 8.84121 14.443 8.45026 14.4418 8.0584C14.4415 6.98394 14.1704 5.9269 13.6534 4.98497C13.1365 4.04304 12.3904 3.24663 11.4842 2.66935C10.578 2.09207 9.5409 1.75255 8.46875 1.68218C7.3966 1.61181 6.32401 1.81285 5.35012 2.26673C5.22674 2.3231 5.11898 2.40873 5.0362 2.5162C4.95342 2.62366 4.89813 2.74971 4.87512 2.8834C4.85221 3.01539 4.86145 3.15096 4.90207 3.27861C4.94269 3.40627 5.01348 3.52225 5.10846 3.61673L8.73346 7.2334L7.23346 8.7334L3.61679 5.1084C3.52151 5.0149 3.40517 4.94566 3.27755 4.90651C3.14993 4.86735 3.01478 4.85943 2.88346 4.8834C2.75061 4.90556 2.62511 4.95959 2.51771 5.04087C2.41031 5.12214 2.32422 5.22824 2.26679 5.35007C1.81139 6.32715 1.61052 7.40355 1.68287 8.47912C1.75521 9.55469 2.09841 10.5945 2.68055 11.5018C3.26269 12.4091 4.06485 13.1544 5.01241 13.6685C5.95997 14.1825 7.02214 14.4485 8.10012 14.4417C8.49199 14.443 8.88294 14.4039 9.26679 14.3251L13.0251 18.0917C13.1026 18.1698 13.1948 18.2318 13.2963 18.2741C13.3979 18.3165 13.5068 18.3382 13.6168 18.3382C13.7268 18.3382 13.8357 18.3165 13.9373 18.2741C14.0388 18.2318 14.131 18.1698 14.2085 18.0917C14.2866 18.0143 14.3486 17.9221 14.3909 17.8205C14.4332 17.719 14.455 17.6101 14.455 17.5001C14.455 17.3901 14.4332 17.2811 14.3909 17.1796C14.3486 17.078 14.2866 16.9859 14.2085 16.9084L10.1251 12.8251C10.0231 12.7237 9.89654 12.6505 9.75782 12.6125C9.61909 12.5745 9.47289 12.5731 9.33346 12.6084C8.9311 12.7161 8.51665 12.7722 8.10012 12.7751C7.47683 12.7806 6.85861 12.6627 6.28107 12.4282C5.70354 12.1937 5.1781 11.8473 4.73503 11.4089C4.29196 10.9705 3.94002 10.4487 3.69947 9.87369C3.45893 9.29866 3.33453 8.68171 3.33346 8.0584C3.33238 7.77925 3.35468 7.50049 3.40012 7.22507L6.66679 10.5001C6.74426 10.5782 6.83643 10.6402 6.93798 10.6825C7.03953 10.7248 7.14845 10.7466 7.25846 10.7466C7.36847 10.7466 7.47739 10.7248 7.57894 10.6825C7.68049 10.6402 7.77266 10.5782 7.85012 10.5001L10.5001 7.82507C10.6503 7.66968 10.7343 7.46201 10.7343 7.2459C10.7343 7.02978 10.6503 6.82212 10.5001 6.66673L7.25846 3.40007C7.53394 3.35508 7.81266 3.33278 8.09179 3.3334C9.34349 3.33561 10.5432 3.83439 11.4275 4.72026C12.3118 5.60613 12.8085 6.80669 12.8085 8.0584C12.8055 8.47492 12.7495 8.88938 12.6418 9.29173C12.6065 9.43117 12.6079 9.57736 12.6459 9.71609C12.6839 9.85482 12.7571 9.98136 12.8585 10.0834L16.9418 14.1667C17.0987 14.3237 17.3115 14.4118 17.5335 14.4118C17.7554 14.4118 17.9682 14.3237 18.1251 14.1667C18.282 14.0098 18.3702 13.797 18.3702 13.5751C18.3702 13.3531 18.282 13.1403 18.1251 12.9834H18.0918Z"
              fill="black"
            />
          </svg>
        </S.Icon>
        고객센터
      </S.TapButton> */}
    </S.Container>
  );
};

export default MypageSideBarButtonTab;

type Props = {
  $location: string;
  $type: string;
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 10px;
  `,
  Icon: styled.div`
    width: 20px;
    height: 20px;
    margin-right: 4px;
  `,
  TapButton: styled(Link)<Props>`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    border-radius: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    ${(props) =>
      // if(!props.$type) {return;}

      props.$type === props.$location &&
      css`
        background-color: #efefef;
      `}
    &:hover {
      background-color: #efefef;
    }
  `
};
