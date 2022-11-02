import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

//components:
import {colors} from '../colors';
import RegularButton from '../Buttons/RegularButton';

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{width: '50%'}} onPress={() => {}}>
        Cancel <AntDesign size={27} name="card" color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
