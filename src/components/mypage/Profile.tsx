import React, { useEffect, useRef, useState } from 'react';
import Filter from 'badwords-ko';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserData, updateUserNickname, updateProfileImg } from 'src/api/userLogin';
import useLoginUserId from 'src/hooks/useLoginUserId';
import supabase from 'src/lib/supabaseClient';
import { styled } from 'styled-components';
import { IconCamera, IconSecret } from '../icons';
import { Flex, FlexAlign, FlexCenter } from 'src/styles/styleFlex';
import { styleFont } from 'src/styles/styleFont';
import useUserMutate from 'src/hooks/useUserMutate';
import UserDelete from '../register/UserDelete';
import { toast } from 'react-toastify';
import {
  NICKNAME_CORRECT,
  NICKNAME_MAX,
  NICKNAME_ALREADY,
  NICKNAME_DIGITS,
  NICKNAME_FORM,
  NICKNAME_SLANG,
  PREPARING_SERVICE
} from 'src/utility/message';
import { debounce } from 'lodash';

const Profile = () => {
  const userId = useLoginUserId();
  const [nickname, setNickname] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [currentNickname, setCurrentNickname] = useState('');
  const [social, setSocial] = useState('');
  const inputRef = useRef<any>(null);
  const [nameLimitColor, setNameLimitColor] = useState<string>('black');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isNickError, setNickError] = useState(false);

  const filter = new Filter();

  const { data, isLoading, isError } = useQuery(['loginUser'], () => getUserData(userId), {
    enabled: userId ? true : false,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  const { nicknameMutation, profileImgMutation } = useUserMutate();

  useEffect(() => {
    const socialLogin = localStorage.getItem('social');

    if (socialLogin !== null) {
      setSocial(socialLogin);
    } else {
      setSocial('email');
    }

    setNickname(data?.data?.nickname);
    setCurrentNickname(data?.data?.nickname);
  }, [data]);

  const encodeFileTobase64 = (fileBlob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(() => {
      reader.onload = () => {
        const newProfileImg = {
          profileImg: reader.result,
          id: userId
        };
        profileImgMutation.mutate(newProfileImg);
      };
    });
  };

  const updateNickname = async () => {
    if (nickname === currentNickname) {
      toast('새로운 닉네임을 입력하지 않았습니다.');
      return;
    }
    const { data: allNickname, error: allNicknameError } = await supabase
      .from('users')
      .select('nickname')
      .eq('nickname', nickname);

    if (allNickname?.length !== 0) {
      toast(NICKNAME_ALREADY);
      return;
    }
    if (isNickError) {
      toast(errorMessage);
      return;
    }

    nicknameMutation.mutate({ nickname, id: userId });
    toast('닉네임이 변경되었습니다.');
  };

  useEffect(() => {
    handleDebounce(nickname);
    if (nickname === '') {
      setNickError(false);
      setSuccessMessage('편식에서만의 닉네임을 사용해 보세요!');
      return;
    } else {
      const randomIndex = Math.floor(Math.random() * NICKNAME_CORRECT.length);
      const randomMessage = NICKNAME_CORRECT[randomIndex];
      setSuccessMessage(randomMessage);
    }

    const nicknamePattern = /^[a-zA-Z0-9가-힣_\-]+$/;
    if (!nicknamePattern.test(nickname) && nickname) {
      setNickError(true);
      setErrorMessage(NICKNAME_FORM);
      return;
    } else setNickError(false);
    if (nickname.length < 2) {
      setNickError(true);
      setErrorMessage(NICKNAME_DIGITS);
      return;
    } else setNickError(false);

    const filterdNickName = filter.clean(nickname);

    if (filterdNickName.includes('*')) {
      setNickError(true);
      setErrorMessage(NICKNAME_SLANG);
      return;
    }

    if (nickname === currentNickname) {
      setNameLimitColor('black');
      return;
    }
    if (nickname.length < NICKNAME_MAX) {
      setNameLimitColor('blue');
    } else setNameLimitColor('red');
  }, [nickname]);

  if (isLoading) {
    return <p>Loading…</p>;
  }
  if (data?.error) {
    return <p>Error</p>;
  }
  if (data?.data.length === 0) {
    return <p>none</p>;
  }

  const handleDebounce = debounce((nickname: string) => {
    if (nickname.length > NICKNAME_MAX) setNickname((prevNickname) => prevNickname.slice(0, -1));
  }, 10);

  return (
    <>
      <S.Container>
        <S.ProfileBox>
          <S.ProfileChangeButton
            onClick={() => {
              inputRef.current.click();
            }}
          >
            <IconCamera />
          </S.ProfileChangeButton>
          <S.ProfileImgArea $url={data?.data?.profileImg || ''} />
          <S.ProfileChange
            ref={inputRef}
            type="file"
            accept="image/*"
            value={profileImg}
            onChange={(e) => {
              encodeFileTobase64(e.target.files![0] as Blob);
            }}
          />
        </S.ProfileBox>
        <S.InputWrapper>
          <S.InfoCaption>
            닉네임 {!isNickError && <S.SuccessMessage>{successMessage}</S.SuccessMessage>}
            {isNickError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.InfoCaption>
          <S.NicknameInputBox>
            <S.InputArea
              type="text"
              maxLength={NICKNAME_MAX}
              value={nickname || ''}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></S.InputArea>
            <S.InputLimtArea color={nameLimitColor}>
              {nickname.length}/{NICKNAME_MAX}
            </S.InputLimtArea>
            <S.InfoSubmitButton onClick={updateNickname}>변경</S.InfoSubmitButton>
          </S.NicknameInputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InfoCaption>이메일</S.InfoCaption>
          <S.InfoInputBox>{data?.data?.email}</S.InfoInputBox>
        </S.InputWrapper>
        {social !== 'email' && (
          <S.InputWrapper>
            <S.InfoCaption as="div">로그인된 소셜 계정</S.InfoCaption>
            <S.InfoInputBox>{`${social}로 로그인했어요!`}</S.InfoInputBox>
          </S.InputWrapper>
        )}

        <S.InputWrapper>
          <S.InfoCaption>비밀번호 변경</S.InfoCaption>
          <S.NicknameInputBox>
            <IconSecret />
            {PREPARING_SERVICE}
            <S.InfoSubmitButton>변경</S.InfoSubmitButton>
          </S.NicknameInputBox>
        </S.InputWrapper>
        <UserDelete />
      </S.Container>
    </>
  );
};

export default Profile;

interface ProfileImgProps {
  $url: string;
}

const S = {
  Container: styled(FlexCenter)`
    width: 100%;
    height: 660px;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    gap: 24px;
  `,
  ProfileChange: styled.input`
    visibility: hidden;
  `,
  ProfileChangeButton: styled(FlexCenter)`
    cursor: pointer;

    width: 42px;
    height: 42px;
    background: #fff;
    border-radius: 80px;
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.1);
  `,
  ProfileBox: styled.div`
    width: 130px;
    height: 130px;
    margin-bottom: 6px;
    position: relative;
  `,
  ProfileImgArea: styled(FlexCenter)<ProfileImgProps>`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    overflow: hidden;
    background-image: url(${(props) => props.$url});
    background-position: center;
    background-size: contain;
  `,
  InputWrapper: styled.div``,
  InfoCaption: styled.div`
    ${styleFont.labelSmall}
    display: flex;
    flex-direction: row;
  `,
  InfoInputBox: styled(FlexAlign)`
    width: 350px;
    margin-top: 4px;
    padding: 8px 8px 8px 12px;
    height: 36px;
    background: #efefef;
    border-radius: 10px;
    background: var(--neutral-100, #f2f4f7);

    color: var(--font-black, var(--black, #242424));

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  `,
  InputArea: styled.input`
    outline: none;
    width: 250px;

    border: none;
  `,

  InputLimtArea: styled.div`
    color: ${(props) => props.color};
    padding-right: 1px;
    margin-right: 0.4px;
    font-size: 12px;
  `,
  InfoSubmitButton: styled(Flex)`
    cursor: pointer;

    margin-left: auto;
    border-radius: 10px;
    height: 20px;
    padding: 2px 8px;
    background: var(--neutral-100, #f2f4f7);
    color: var(--font-black, var(--black, #242424));
    text-align: center;

    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  `,
  NicknameInputBox: styled(FlexAlign)`
    width: 350px;
    margin-top: 4px;
    padding: 8px 8px 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--neutral-100, #f2f4f7);
    gap: 4px;

    color: var(--font-black, var(--black, #242424));
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  `,

  ErrorMessage: styled.div`
    width: 294px;
    height: 20px;
    text-align: end;
    color: #ff7474;
    ${styleFont.labelSmall}
  `,
  SuccessMessage: styled.div`
    width: 294px;
    height: 20px;
    text-align: end;
    color: #4285f4;
    ${styleFont.labelSmall}
  `
};
