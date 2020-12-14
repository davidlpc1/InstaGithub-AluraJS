import React from 'react';
import { Text, View,ScrollView ,Image} from 'react-native';

function Notification({name,url,description}){
  return(
    <View style={{flex:1,alignItems:'center', flexDirection:'row',margin:10,padding:5,borderBottomWidth:0.2,borderBottomColor:'#444'}}> 
      <TouchableOpacity>
        <Image source={{uri:url}} style={{marginHorizontal:10,height:50,width:50,borderRadius:25,borderWidth:1.6,borderColor:'#da2d79'}} />
      </TouchableOpacity>
      <View style={{marginHorizontal:10}}>
        <Text style={{fontSize:17}}>{name}</Text>
        <Text style={{fontSize:14}}>{description}</Text>
      </View>
    </View>
  )
}

export default function Notifications(){
  const users = ['omariosouto','vweberfroes','gabrielfroes','peas','davidlpc1','filipedeschamps','diego3g','maykbrito','guilhermesilveira']
  return(
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
      <Text style={{fontSize:16,margin:10}}>Novo</Text>
      {users.map(user => (
        <Notification key={`Menção__${user}`} name={'Menção'} description={`@${user} te marcou`} url={`https://github.com/${user}.png`} />
      ))}
      {users.map(user => (
        <Notification key={`Curtida__${user}`} name={'Curtida'} description={`@${user} curtiu o teu post`} url={`https://github.com/${user}.png`} />
      ))}
    </ScrollView>
  )
}