import React from 'react';
import { ScrollView , Text } from 'react-native'
import InstaGithub from '../../components/Posts/post';
import Posts from '../../components/Posts'

export default function User({ route }){
    const githubUser = route.params
    return (
      <ScrollView>
        <InstaGithub githubUser={githubUser}/>
        <Text style={{fontSize:15,textAlign: 'center',fontWeight: 'bold'}}>Posts que talvez você curta</Text>
        <Posts />
      </ScrollView>
    )
  }