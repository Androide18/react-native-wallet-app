import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

//colors
import {colors} from '../colors';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

//types
import {TransactionAviProps} from './types';

const TransactionAvi: FunctionComponent<TransactionAviProps> = props => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <AntDesign
        name={props.icon}
        style={{color: colors.white, fontSize: 20}}
      />
    </StyledView>
  );
};

export default TransactionAvi;
