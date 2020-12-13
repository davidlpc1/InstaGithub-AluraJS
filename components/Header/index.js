import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image ,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container:{    
        flexDirection: 'row',
        paddingHorizontal:15,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'space-around',
        borderBottomColor:'#eee',
        borderBottomWidth:1.5
    },
    margin5:{
      margin:5
    },
    image:{   
        width:120,
        height:33,
    },
    containerIcons:{      
        flexDirection: 'row',
        alignItems:'center',
    },
});  

export default function Header(){
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image 
            source={{uri:'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'}} 
            style={styles.image}
          />
        </TouchableOpacity>
  
        <View style={styles.containerIcons}>
          <TouchableOpacity>
            <AntDesign style={styles.margin5} name="plussquareo" size={24} color="black" />
          </TouchableOpacity>
  
          <TouchableOpacity>
            <AntDesign style={styles.margin5}  name="hearto" size={24} color="black" />
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Entypo style={styles.margin5}  name="direction" size={24} color="black" />
          </TouchableOpacity>
          
        </View>
  
      </View>
    )
}
