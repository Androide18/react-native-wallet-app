import React, {FunctionComponent} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';

import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyle?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>;
}

const Greetings: FunctionComponent<GreetingProps> = props => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: colors.secondary,
            fontSize: 22,
          },
          props.mainTextStyle,
        ]}>
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            color: colors.graydark,
          },
          props.subTextStyle,
        ]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greetings;
