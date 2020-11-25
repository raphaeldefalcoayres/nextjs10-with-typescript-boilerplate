import { lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
  }

  body {
    background:${props => props.theme.colors.background};
    color:${props => props.theme.colors.text};
    font: 400 16px Nunito, sans-serif;
    overflow-x:hidden;
  }

  input, textarea, select {
    border-radius: 15px;
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.text};
    border: none;
    height: 30px;
    width: 20%;
    padding: 0 10px;
    border:1px solid ${props => lighten(0.2, props.theme.colors.text)};

    &::placeholder {
      color: ${props => props.theme.colors.text};
    }
  }`
