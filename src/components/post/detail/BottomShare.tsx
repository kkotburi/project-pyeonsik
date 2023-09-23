import React from 'react';
import { S } from './StyledBottomFunction';
import { IconLinkCopy, IconLinkFacebook, IconLinkKakao, IconLinkTwitter, IconUnLink } from 'src/components/icons';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { IMAGE_LOGO, URL_VERCEL } from 'src/utility/message';

interface BottomShareProps {
  title: string;
  likeCount?: number;
  commentCount?: number | null;
  sharedCount?: number;
}

const BottomShare = ({ title, likeCount, commentCount, sharedCount }: BottomShareProps) => {
  const { pathname } = useLocation();
  const shareUrl = URL_VERCEL + pathname;

  const clickFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const clickTwitter = () => {
    const shareText = title;
    window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`);
  };

  const clickKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        imageUrl: IMAGE_LOGO,
        link: {
          webUrl: shareUrl
        }
      },
      itemContent: {
        profileText: '편식, 까탈스러운 편식쟁이들의 놀이터'
      },
      social: {
        likeCount,
        commentCount,
        sharedCount
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl
          }
        }
      ]
    });
  };

  const clickCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast('주소가 복사되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.FunctionLink>
      <IconUnLink />
      <S.LinkBubble className="dropDownLink">
        <S.LinkTail />
        <S.LinkTailFalse />
        <S.LinkBox>
          <S.LlinkButton className="linkFacebook" onClick={clickFacebook}>
            <IconLinkFacebook />
          </S.LlinkButton>
          <S.LlinkButton className="linkTwitter" onClick={clickTwitter}>
            <IconLinkTwitter />
          </S.LlinkButton>
          <S.LlinkButton className="linkKakao" onClick={clickKakao}>
            <IconLinkKakao />
          </S.LlinkButton>
          <S.LlinkButton onClick={clickCopyLink}>
            <IconLinkCopy />
          </S.LlinkButton>
        </S.LinkBox>
      </S.LinkBubble>
    </S.FunctionLink>
  );
};

export default BottomShare;
