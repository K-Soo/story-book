import { css } from 'styled-components';

interface MediaQueryProps {
  [key: string]: number;
}
const breakpoints: MediaQueryProps = {
  mobile: 480,
  tablet: 768,
};

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `.join('');
  return acc;
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => string>);
