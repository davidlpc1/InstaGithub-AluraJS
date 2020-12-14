import React from 'react';
import {TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native';

function PostsHorizontalSearch({navigation}){
    const users = ['omariosouto','vweberfroes','gabrielfroes','peas','davidlpc1','filipedeschamps','diego3g','maykbrito','guilhermesilveira']
    const sortRandom = () => Math.round(Math.random()) + (10 * Math.round(Math.random())) * Math.round(Math.random() * 10) -  Math.round(Math.random())
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
          {users.sort(sortRandom).map(user => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('User',user)} style={{maxWidth:100}} key={user}>
                <Image source={{uri:`https://github.com/${user}.png`}} style={{width:100,height:200}}/>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    )
  }
  
export default function Search({  navigation  }) {
    return (
      <ScrollView>
        {[1,2,3,4,5,6,7,8].map(number => <PostsHorizontalSearch navigation={navigation} key={number} /> )}
      </ScrollView>
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