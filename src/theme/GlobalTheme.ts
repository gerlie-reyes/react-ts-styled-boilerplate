const theme = {
  colors: {
    brandBlack: {
      header: '#000000',
      body: '#ccc',
      footer: '#000000',
    },
    mediumGrey: '#878f9d',
  },

  breakpoints: {
    smMobileXSmall: '360px',
    smMobileSmall: '480px',
    smMobileMin: '576px', // sm
    smMobileMax: '767px',
    mdMobileMin: '768px', // md
    mdMobileMax: '991px',
    smDesktopMin: '992px',  // lg
    smDesktopMax: '1199px',
  }
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
