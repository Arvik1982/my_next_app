import styled from '@emotion/styled';
import PlusIcon from '../../../../../../../../public/images/plus.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #85889e;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  border-radius: 16px;
  background: rgba(180, 184, 204, 0.26);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PlusIconStyledProps {
  color?: string;
}

export const PlusIconStyled = styled(PlusIcon)<PlusIconStyledProps>`
  width: 24px;
  height: 24px;

  path {
    stroke: ${({ color }) => color ?? '#fff'};
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const Children = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
