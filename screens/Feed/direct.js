import React from 'react';
import { Text, ScrollView ,View,Image,TouchableOpacity} from 'react-native';
import users from '../../users_data';
import Message from '../../components/UserAction/'

export default function Direct({ navigation }){
  return(
    <ScrollView>
      {users.map((user,index) => <Message 
        key={`${user}_${index}`} 
        name={user} 
        url={`https://github.com/${user}.png`} 
        description={`Olá,sou ${user} blz ? - ${index + Math.round(Math.random() * 59)} min`} 
        onPress={() => {
          navigation.navigate('MessageDirect',user)
        }}
        />
      )}
    </ScrollView>
  )
}