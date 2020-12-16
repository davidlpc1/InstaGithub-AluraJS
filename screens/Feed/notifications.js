import React from 'react';
import { Text, ScrollView } from 'react-native';
import users from '../../users_data'
import Notification from '../../components/UserAction/'

export default function Notifications(){
  return(
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
      <Text style={{fontSize:16,margin:10}}>Novo</Text>
      {users.map(user => (
        <Notification key={`Menção__${user}`} name={'Menção'} description={`@${user} te marcou`} url={`https://github.com/${user}.png`} />
      ))}
      {users.map(user => (
        <Notification key={`Curtida__${user}`} name={'Curtida'} description={`@${user} curtiu o teu post`} url={`https://github.com/${user}.png`} />
      ))}
      <Text style={{fontSize:16,margin:10}}>Este mês</Text>
      {users.map(user => (
        <Notification key={`Menção__${user}`} name={'Menção'} description={`@${user} te marcou`} url={`https://github.com/${user}.png`} />
      ))}
      {users.map(user => (
        <Notification key={`Curtida__${user}`} name={'Curtida'} description={`@${user} curtiu o teu post`} url={`https://github.com/${user}.png`} />
      ))}
    </ScrollView>
  )
}