import styled from '@emotion/styled';

export const SearchForm = styled.form`
  height: 39px;
  min-width: 300px;
  max-width: 780px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  border: 1px solid rgba(255, 255, 255, 0.44);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.14);
`;

export const Search = styled.input`
  width: 100%;
  height: 39px;
  padding: 0 16px;
  border: none;
  outline: 0;
  background-color: transparent;
  font: 15px / 30px;
  overflow: hidden;
  color: #fff;

  &::placeholder {
    font: 16px / 39px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const SearchBtn = styled.button`
  height: 39px;
  padding: 0 15px;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border: none;
`;

export const CalendarBtn = styled.button`
  height: 39px;
  padding: 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.14);
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease-out;
`;

export const SettingBtn = styled.button`
  position: relative;
  width: 39px;
  height: 39px;
  padding-top: 5px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.14);
`;

export const CounterPanel = styled.button`
  position: relative;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  height: 33px;
  padding: 0 20px;
  overflow: hidden;
  color: rgba(255, 255, 255);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  font: 14px / normal;
  font-weight: 400;
  transition: all 0.5s ease-out;
`;

export const CounterPanelValue = styled.div`
  display: inline-block;
  padding: 1px 6px;
  font: 11px / normal;
  font-weight: 500;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255);
`;

export const SynсhBtn = styled.button`
  height: 26px;
  padding: 0 13px;
  line-height: 24px;
  border-radius: 13px;
  background-color: #3bc8f5;
  color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  transition: all 0.5s ease-out;
`;

export const SharingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.44);
`;

export const CalendarSharingSwitcher = styled.div`
  display: flex;
  align-items: center;
  width: 37px;
  height: 17px;
  margin: 0 8px 0 7px;
  padding: 0 4px;
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;
  background-color: #bbed21;
`;

export const SwitcherCursor = styled.div`
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: #fff;
  flex-grow: 0;
  flex-shrink: 0;
  order: 1;
`;

export const SwitcherEnabled = styled.div`
  width: 100%;
  height: 100%;
  color: rgba(81, 92, 105, 0.5);
  text-align: center;
  font-size: 7px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  order: 0;
`;

export const CalendarSharingBtn = styled.button`
  position: relative;
  padding: 0 10px;
  color: #fff;
  text-transform: uppercase;
  line-height: 24px;
  font-size: 11px;
  font-weight: 600;
  background-color: transparent;
  border: none;
`;
