import React from 'react';
import { Text , View, Image, TouchableOpacity} from 'react-native';

export default function UserAction({ name, url, description ,onPress=()=>{},style={} }){
    return(
      <TouchableOpacity style={style} onPress={onPress}>
        <View style={{flex:1,alignItems:'center', flexDirection:'row',margin:10,padding:5}}> 
          <Image source={{uri:url}} style={{marginHorizontal:10,height:50,width:50,borderRadius:25,borderWidth:1.6,borderColor:'#da2d79'}} />
          <View style={{marginHorizontal:10}}>
            <Text style={{fontSize:17}}>{name}</Text>
            <Text style={{fontSize:13,color:'#555'}}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }