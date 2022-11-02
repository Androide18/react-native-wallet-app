import React, {FunctionComponent, ReactNode} from 'react';
import styled from 'styled-components/native';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {colors} from './../colors';
import RegularText from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  align-items: center;
`;

//types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  TextStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.TextStyle}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
