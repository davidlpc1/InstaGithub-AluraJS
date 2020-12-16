import React, { useCallback } from 'react';
import {TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native';
import users from '../../users_data'

function PostsHorizontalSearch({ navigation }){
    const sortRandom = useCallback(
      () => Math.round(
        Math.random() + (10 * Math.random()) * (Math.random() * 10) - Math.random()
      ),[ navigation ]
    )

    const viewUsersPosts = useCallback(user => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('User',user)} style={{maxWidth:100}} key={user}>
            <Image source={{uri:`https://github.com/${user}.png`}} style={{width:100,height:200}}/>
          </TouchableOpacity>
        )
      },[ users ]
    )

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
          {users.sort(sortRandom).map(viewUsersPosts)}
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