import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './GlobalTheme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  
  // font-display: swap - 
  // Instructs the browser to use the fallback font to display the text until the custom font has fully downloaded.

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, span, div, p, a, h1, h2, h3, label, div[data-list-heading-sec='topNavigation'] label, p[data-section='imgCaption'] span {
    font-family: "Poppins", sans-serif;
  }

  h4 {
    font-family: "Poppins", sans-serif;
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.brandBlack.body}
  }

  a {
    text-decoration: none !important;
  }

  footer {
    background-color: ${({ theme }) => theme.colors.brandBlack.footer}
  }
`;