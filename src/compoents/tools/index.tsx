import styled from 'styled-components/native';
import {Platform, Dimensions, StatusBar} from 'react-native';
export const Error = styled.Text`
  color: red;
`;
export const WrapperContainer = styled.View`
  flex: 1;
  background: #fff;
`;
export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: #f0f0f5;
`;
type HeaderTextProps = {
  fontSize: number;
};

export const HeaderText = styled.Text<HeaderTextProps>`
  font-size: ${({fontSize = 10}) => `${fontSize}px`};
`;
const {width, height} = Dimensions.get('window');
const androidStatusBarHeight = StatusBar.currentHeight;
const isAndroid = Platform.OS === 'android';
export const dimensions = {
  width,
  height,
  androidStatusBarHeight,
  isAndroid,
};
