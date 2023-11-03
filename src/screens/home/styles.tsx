import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
type ErrorTextProps = {
  color?: string;
};
export const Error = styled.Text<ErrorTextProps>`
  font-size: ${({theme}) => `${theme.fontSizes.h5}px`};
  color: ${({theme, color}) => `${color ? color : theme.colors.ui.error}`};
`;
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: theme.colors.bg.primary,
  },
});
