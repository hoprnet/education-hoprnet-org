import React from 'react';
import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";
import PropTypes from 'prop-types';

const SButton = styled(MuiButton)`
  &.btn-hopr--v2 {
    font-family: Source Code Pro;
    text-align: center;
    color: #FFF;
    background: linear-gradient(#000050, #0000b4);
    border-radius: 20px;
    text-transform: none;
    width: 100%;
    font-size: 18px;
    /* height: 51px; */
    border-radius: 32px;
    padding: 16px;
  }

  &.btn-hopr--size70 {
    min-height: 70px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.14999999105930328px;
  }


  &.btn-hopr--image-only {
    padding: 8px;
    width: 70px;
    height: 70px;
    img {
      width: 100%;
      max-width: 54px;
    }
  }

`

export default function Button(props) {
  const {hopr, imageOnly, size70, ...rest} = props;

  return (
    <SButton
      variant={props.hopr ? 'contained' : props.variant }
      className={`${props.hopr && 'btn-hopr--v2'} ${props.imageOnly && 'btn-hopr--image-only'} ${props.size70 && 'btn-hopr--size70'}`}
      {...rest}
    >
      <span>{props.children}</span>
    </SButton>
  )
}

Button.defaultProps = {
  hopr: false,
  imageOnly:  false,
  size70:  false,
}

Button.propTypes = {
  hopr: PropTypes.bool,
  imageOnly:  PropTypes.bool,
  size70:  PropTypes.bool,
};