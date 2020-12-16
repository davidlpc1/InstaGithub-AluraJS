import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Feed from './screens/Feed/index';
import IGTV from './screens/IGTV/index';
import Store from './screens/Store/index';
import Search from './screens/Search/index';
import User from './screens/Search/user';

import CreatePost from './screens/Feed/createpost'
import Notifications from './screens/Feed/notifications';
import Direct from './screens/Feed/direct';
import MessageDirect from './screens/Feed/messagedirect';

const UsersStack = createStackNavigator();
const FeedStack = createStackNavigator();

function FeedTabStack() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={Feed} options={{headerShown:false,}}  />
      <FeedStack.Screen name="CreatePost" component={CreatePost} options={{headerTitleAlign:'center',}} />
      <FeedStack.Screen name="Notifications" component={Notifications} options={{headerTitleAlign:'center',}} />
      <FeedStack.Screen name="Direct" component={Direct} options={{headerTitleAlign:'center',}} />
      <FeedStack.Screen name="MessageDirect" component={MessageDirect} options={{headerTitleAlign:'center',}} />
    </FeedStack.Navigator>
  );
}

function UsersTabStack() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Search" component={Search} options={{headerTitleAlign:'center',}}  />
      <UsersStack.Screen name="User" component={User} options={{headerTitleAlign:'center',}} />
    </UsersStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Feed: 'home',
            Search: 'search1',
            IGTV:'videocamera',
            Store:'shoppingcart'
          };

          return (
            <AntDesign
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Feed" component={FeedTabStack} />
      <Tab.Screen name="Search" component={UsersTabStack} />
      <Tab.Screen name="IGTV" component={IGTV} />
      <Tab.Screen name="Store" component={Store} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}