import React from 'react';
import { Text, View ,Image} from 'react-native';

function Product(){
  return (
    <View style={{margin:40,flexDirection:'column',justifyContent:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,maxWidth:200}}>

      <Image source={{uri:'https://github.com/omariosouto.png'}} style={{position:'relative',width:200,height:200}}/>
      <View style={{position:'absolute',top:0,left:0,flexDirection:'row',alignItems: 'center'}}>
        <Image source={{uri:'https://github.com/omariosouto.png'}} style={{width:30,height:30,borderRadius:15}} />
        <Text style={{marginHorizontal:5}}>omariosouto</Text>
      </View>
      <Text style={{textAlign:'center'}}>Camisa preta</Text>
    </View>
  )
}

export default function Store(){
    return (
      <View style={{}}>
        <Product />
      </View>
    ) 
  }
  