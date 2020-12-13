import React from 'react';
import { 
  ScrollView,
} from 'react-native';
import InstaGitHubCard from './post.js';

export default function Posts(){
  const users = ['omariosouto','vweberfroes','gabrielfroes','peas','davidlpc1','filipedeschamps','diego3g','maykbrito','guilhermesilveira']
  return(
    <>
      <ScrollView>
        {users.map(githubUser => 
          <InstaGitHubCard githubUser={githubUser} key={githubUser} />
        )}
      </ScrollView>
    </>
  )
}