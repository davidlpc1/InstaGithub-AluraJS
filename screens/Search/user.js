import React from 'react';
import InstaGithub from '../../components/Posts/post';

export default function User({ route }){
    const githubUser = route.params
    return (
      <InstaGithub githubUser={githubUser}/>
    )
  }