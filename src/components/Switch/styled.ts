import styled from "styled-components";

// stole it from here - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 26px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6c6c6c;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(18px);
  }

  /* Rounded sliders */

  .slider.round {
    border-radius: 26px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const LabelRow = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
`;
