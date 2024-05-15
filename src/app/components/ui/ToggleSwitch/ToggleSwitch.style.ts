import styled from '@emotion/styled';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    margin-left: 12px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const StyledSwitch = styled(Switch)`
  width: 42px;
  height: 26px;
  padding: 0;

  .MuiSwitch-switchBase {
    padding: 0;
    margin: 2px;
    transition-duration: 300ms;

    &.Mui-checked {
      transform: translateX(16px);
      color: #fff;

      & + .MuiSwitch-track {
        background-color: #5533ff;
        opacity: 1;
        border: 0;
      }

      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }

    &.Mui-focusVisible .MuiSwitch-thumb {
      color: #5533ff;
      border: 6px solid #fff;
    }

    &.Mui-disabled .MuiSwitch-thumb {
      color: #ccc;
    }

    &.Mui-disabled + .MuiSwitch-track {
      opacity: 0.3;
    }
  }

  .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 22px;
    height: 22px;
  }

  .MuiSwitch-track {
    border-radius: 13px;
    background-color: #e9e9ea;
    opacity: 1;
    transition: background-color 500ms;
  }
`;
