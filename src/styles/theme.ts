export const theme = {
  colors: {
    background: '#131313',
    cardBackground: '#1e1e1e',
    text: 'rgba(255, 255, 255, 0.87)',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    primary: '#7a3ef5',
    primaryHover: '#8f5af6',
    secondary: '#2c2c30',
    accent: '#a45dff',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '48':'12rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    default: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};

export type Theme = typeof theme;
