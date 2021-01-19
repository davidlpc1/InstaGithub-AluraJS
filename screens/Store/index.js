import React from 'react';
import { Text, View ,Image, FlatList, ScrollView} from 'react-native';

function Product(){
  return (
    <View style={{}}>
      <View style={{margin:40,flexDirection:'column',justifyContent:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,maxWidth:150}}>
        <Image source={{uri:'https://github.com/omariosouto.png'}} style={{position:'relative',width:150,height:150}}/>
        <View style={{position:'absolute',top:0,left:0,flexDirection:'row',alignItems: 'center'}}>
          <Image source={{uri:'https://github.com/omariosouto.png'}} style={{width:30,height:30,borderRadius:15}} />
          <Text style={{marginHorizontal:5}}>omariosouto</Text>
        </View>
        <Text style={{textAlign:'center'}}>Camisa preta</Text>
      </View>
    </View>
  )
}

export default function Store(){
  const data = [
    {id:0,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:1,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:2,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:3,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:4,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:5,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:6,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:7,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:8,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
    {id:9,image:'https://github.com/omariosouto.png',name:'Camisa preta',user:'omariosouto'},
  ]
    return (
      <ScrollView>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          numColumns={2} 
          renderItem={({ item }) => {
            return (
              <View style={{margin:20,flexDirection:'column',justifyContent:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,maxWidth:150}}>
                <Image source={{uri:item.image}} style={{position:'relative',width:150,height:150}}/>
                <View style={{position:'absolute',top:0,left:0,flexDirection:'row',alignItems: 'center'}}>
                  <Image source={{uri:item.image}} style={{width:30,height:30,borderRadius:15}} />
                  <Text style={{marginHorizontal:5}}>{item.user}</Text>
                </View>
                <Text style={{textAlign:'center'}}>{item.name}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    ) 
  }
  