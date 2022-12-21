import 'styled-components';
import { ColorsTypes } from './Theme';
import { MediaQueryProps, Media } from './Media';

declare module 'styled-components' {
  export interface DefaultTheme {
    // colors: ColorsTypes;
  }
}
