import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

//types
import {RootStackParamList} from '../navigators/RootStack';
import {StackScreenProps} from '@react-navigation/stack';

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FunctionComponent<Props> = () => {
  const CardsData = [
    {
      id: 1,
      accountNo: '12342341231',
      balance: 1000,
      alias: 'Work Debit',
      logo: require('../assets/cards/mc.png'),
    },
    {
      id: 2,
      accountNo: '12341234124',
      balance: 2500,
      alias: 'Personal Prepaid',
      logo: require('../assets/cards/mc.png'),
    },
    {
      id: 3,
      accountNo: '54353453454',
      balance: 4400,
      alias: 'School Prepaid',
      logo: require('../assets/cards/visa_white.png'),
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: '-$86.00',
      date: '12 Sep 2022',
      title: 'Taxi',
      subtitle: 'Uber car',
      art: {
        background: colors.primary,
        icon: 'car',
      },
    },
    {
      id: 2,
      amount: '-$286.00',
      date: '12 Sep 2022',
      title: 'Shopping',
      subtitle: 'Amazon',
      art: {
        background: colors.tertiary,
        icon: 'stepforward',
      },
    },
    {
      id: 3,
      amount: '-$86.00',
      date: '12 Sep 2022',
      title: 'Travel',
      subtitle: 'Flight ticket',
      art: {
        background: colors.secondary,
        icon: 'aircraft',
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '2544.56',
      name: 'John Doe',
      background: colors.tertiary,
      img: require('../assets/portraits/1.jpg'),
    },
    {
      id: 2,
      amount: '1333.46',
      name: 'Mary Poppins',
      background: colors.primary,
      img: require('../assets/portraits/2.jpg'),
    },
    {
      id: 3,
      amount: '123.32',
      name: 'Peter Pan',
      background: colors.secondary,
      img: require('../assets/portraits/3.jpg'),
    },
  ];

  return (
    <HomeContainer>
      <StatusBar barStyle="dark-content" />
      <CardSection data={CardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
