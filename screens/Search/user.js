import React from 'react';
import { ScrollView } from 'react-native'
import InstaGithub from '../../components/Posts/post';
import Posts from '../../components/Posts'

export default function User({ route }){
    const githubUser = route.params
    return (
      <ScrollView>
        <InstaGithub githubUser={githubUser}/>
        <Posts />
      </ScrollView>
    )
  }