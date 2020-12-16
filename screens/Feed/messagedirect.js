import React from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import Header from '../../components/UserAction'

function Message({ url, text, isMe=false }){
    return (
        <View style={{flex:1,flexDirection:isMe ? 'row-reverse' : 'row',alignItems: 'center',marginVertical:5}}>
            <Image source={{uri:url}} style={{height:30,width:30,borderRadius:15}}/>
            <View style={{justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'#111a',borderRadius:20,minWidth:120,maxWidth:170}}>
                <Text style={{margin:5,color:'#fff'}}>{text}</Text>
            </View>
        </View>
    )
}

function DateOfMessage({ date,color="#fff" }){
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{backgroundColor:'#333a',paddingHorizontal:10,paddingVertical:5,color,borderRadius:10}}>{date}</Text>
        </View>
    )
}

export default function({ navigation,route }){
    const user = route.params;
    const myUser = 'davidlpc1'

    return (
        <View style={{backgroundColor:'#fff'}}>
            <Header style={{paddingVertical:20}} name={user} description={`Online há ${Math.round(Math.random() * 20)} hora(s)`} url={`https://github.com/${user}.png`} onPress={() => {}} />
            <ScrollView style={{paddingHorizontal:25,paddingVertical:10,minHeight:900}}>
                <DateOfMessage date={'Hoje'} />
                <Message url={`https://github.com/${user}.png`} text={`Olá sou o ${user} blz?`} />
                <Message url={`https://github.com/${user}.png`} text="Cara hoje é sexta" />
                <Message url={`https://github.com/${user}.png`} text="Pode fazer update sem where?" />
                <Message url={`https://github.com/${myUser}.png`} text="Opa não sei não hein kkkk" isMe={true} />
                <Message url={`https://github.com/${myUser}.png`} text="Nunca fiz isso" isMe={true} />
                <Message url={`https://github.com/${user}.png`} text="Nunca? Hmmm sei kkkkk" />
            </ScrollView>
        </View>
    )
}