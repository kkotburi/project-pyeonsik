import { FlexAlign, FlexJustify } from 'src/styles/styleFlex';
import styled from 'styled-components';

export const S = {
  OrgArea: styled.div`
    margin: 20px 50px;
  `,

  OrgTextBox: styled(FlexAlign)`
    margin: 0px 0px 10px 0px;
    gap: 4px;
  `,

  OrgIcon: styled.div`
    width: 20px;
    height: 20px;
  `,

  OrgText: styled.div`
    color: var(--font-black, var(--black, #242424));

    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  `,

  OrgContentsBox: styled(FlexJustify)`
    width: 790px;
    height: 80px;
    padding: 16px;
    gap: 8px;
    border-radius: 10px;
    border: 1px solid var(--neutral-400, #98a2b3);
    flex-direction: column;
  `,

  OrgTitle: styled.div`
    width: 758px;

    color: var(--font-black, var(--black, #242424));
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  `,

  OrgInfoBox: styled(FlexAlign)`
    gap: 4px;

    color: var(--font-black, var(--black, #242424));
    font-style: normal;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  `
};
