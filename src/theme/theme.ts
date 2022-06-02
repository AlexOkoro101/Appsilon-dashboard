import { extendTheme } from '@chakra-ui/react';
import { font } from './foundations/fonts';
import { globalStyles } from './styles';

export default extendTheme(
  globalStyles,
  font
);
