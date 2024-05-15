import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  position: relative;
  height: calc(100% - 5.5rem);
`;

export const Container = styled.div<{ isSecurity: boolean }>`
  width: 100%;
  height: calc(100% ${(props) => (props.isSecurity ? '+ 1.5' : '- 3')}rem);
  overflow: auto;
  display: flex;
  padding: 1.5rem 1rem 1.5rem 0;
`;

export const ContentContainer = styled.div`
  height: fit-content;
  flex: 1;
`;
