import React, {FunctionComponent} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Balance from '../screens/Balance';

//components
import {colors} from '../components/colors';
import Greetings from '../components/Header/Greetings';
import Profile from '../components/Header/Profile';

import {CardProps} from '../components/Cards/types';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={require('./../assets/avi/avatar.png')}
              imgContainerStyle={{
                backgroundColor: colors.tertiary,
              }}
              onPress={() => console.log('pressed')}
            />
          ),
        }}
        initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => (
              <Greetings
                mainText={'Hi Ele'}
                subText={'Welcome back'}
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({route}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: props => (
              <AntDesign
                {...props}
                name="caretleft"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
