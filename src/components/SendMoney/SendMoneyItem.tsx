import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {ScreenWidth} from './../shared';

//colors
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import Profile from '../Header/Profile';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

//types
import {SendMoneyProps} from './types';
import {Alert} from 'react-native';

const SendMoneyItem: FunctionComponent<SendMoneyProps> = props => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{backgroundColor: props.background}}
      onPress={() => Alert.alert('send money')}>
      <>
        <Profile
          img={props.img}
          imgContainerStyle={{marginBottom: 10}}
          onPress={() => Alert.alert('pressed')}
        />
        <SmallText
          textStyles={{
            color: colors.white,
            fontSize: 12,
            textAlign: 'left',
          }}>
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{
            color: colors.white,
            fontSize: 13,
            textAlign: 'left',
          }}>
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
