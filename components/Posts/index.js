import React from 'react';
import { 
  ScrollView,
} from 'react-native';
import InstaGitHubCard from './post.js';
import users from '../../users_data'

export default function Posts(){
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