import React,{useState} from 'react';
import Feed from './screens/Feed/index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View ,TouchableOpacity,Image,ScrollView,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import InstaGithub from './components/Posts/post'

function PostsHorizontalSearch({navigation}){
  const users = ['omariosouto','vweberfroes','gabrielfroes','peas','davidlpc1','filipedeschamps','diego3g','maykbrito','guilhermesilveira']
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
        {users.sort(() => Math.round(Math.random()) - Math.round(Math.random()) * Math.round(Math.random())).map(user => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('User',user)} style={{maxWidth:100}} key={user}>
              <Image source={{uri:`https://github.com/${user}.png`}} style={{width:100,height:200}}/>
            </TouchableOpacity>
          )
        })}
    </ScrollView>
  )
}

function Search({  navigation  }) {
  return (
    <ScrollView>
      {[1,2,3,4,5,6,7,8].map(number => <PostsHorizontalSearch navigation={navigation} key={number} /> )}
    </ScrollView>
  ) 
}

function IGTV(){
  return (
    <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
      <Text>Vídeos no IGTV</Text>
    </View>
  ) 
}

function Store(){
  return (
    <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
      <Text>Compre já</Text>
    </View>
  ) 
}


const styles = StyleSheet.create({
  postInfo:{
    flexDirection: 'row',
    padding:15,
    alignItems:'center',
  },

  miniImageUser:{
    marginRight:15,
    width:40,
    height:40,
    borderRadius:20,
  },

  postImage:{
    width:'100%',
    height:350,
  },
});

function User({ route }){
  const githubUser = route.params
  return (
    <InstaGithub githubUser={githubUser}/>
  )
}

// ====================================================

const UsersStack = createStackNavigator();

function UsersTabStack() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Search" component={Search}  />
      <UsersStack.Screen name="User" component={User} />
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
      <Tab.Screen name="Feed" component={Feed} />
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