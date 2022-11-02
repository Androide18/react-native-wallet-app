import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

//components
import BalanceCard from './BalanceCard';

const BalanceCardSectionBackground = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
`;

//tyes
import {BalanceCardProps} from './types';

const BalanceCardSection: FunctionComponent<BalanceCardProps> = props => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;
