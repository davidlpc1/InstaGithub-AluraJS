import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image ,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function Header(){
  return (
    <View style={{    
      flexDirection: 'row',
      paddingHorizontal:15,
      paddingVertical:5,
      alignItems:'center',
      justifyContent:'space-around',
      borderBottomColor:'#eee',
      borderBottomWidth:1.5
    }}>
      <TouchableOpacity>
        <Image 
          source={{uri:'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'}} 
          style={{   
            width:120,
            height:33,
          }}
        />
      </TouchableOpacity>

      <View style={{      
        flexDirection: 'row',
        alignItems:'center',
      }}>
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

function InstaGitHubCard({ githubUser }){
  const [liked,setLikeState] = useState(false);
  const [countClick,setCountClick] = useState(0);
  const imageUser = {
    uri:`https://github.com/${githubUser}.png`
  }

  return (
      <View>
        <View style={styles.postInfo}>
          <Image 
            style={styles.miniImageUser}
            source={imageUser} 
          />
          <Text>{githubUser}</Text>
        </View>

        <View>
          <TouchableWithoutFeedback
             onPress={() => {
               setCountClick(countClick + 1);
               if(countClick >= 2){
                setLikeState(!liked)
                setCountClick(0)
               }
              }}
          >
            <Image 
              style={styles.postImage}
              source={imageUser} 
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.postInfo}>
          <TouchableOpacity onPress={() => setLikeState(!liked)}>
            {liked &&  <AntDesign name="heart" size={24} color="red" />}
            {!liked && <AntDesign name="hearto" size={24} color="black" />}
          </TouchableOpacity>
          <Text style={styles.margin5}>{githubUser} está em InstaGithub</Text>
        </View>
    </View>
  )
}

function Posts(){
  const users = ['omariosouto','vweberfroes','gabrielfroes','peas','davidlpc1']
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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Posts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },

  postInfo:{
    flexDirection: 'row',
    padding:15,
    alignItems:'center',
  },

  miniImageUser:{
    marginRight:15,
    width:40,
    height:40,
    borderRadius:20
  },

  postImage:{
    width:'100%',
    height:350,
  },
  margin5:{
    margin:5
  }
});
