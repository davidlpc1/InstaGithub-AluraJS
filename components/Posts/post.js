import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image ,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  postInfo:{
    flexDirection: 'row',
    padding:15,
    alignItems:'center',
  },

  miniImageUser:{
    marginRight:15,
    width:40,
    height:40,
    borderRadius:20,
  },

  postImage:{
    width:'100%',
    height:350,
  },
});

export default function InstaGitHubCard({ githubUser }){
    const [liked,setLikeState] = useState(false);
    const [lastTap,setLastTap] = useState(null);
    const imageUser = {
      uri:`https://github.com/${githubUser.trim()}.png`
    }
  
    return (
        <View>
          <View style={styles.postInfo}>
            <Image 
              style={styles.miniImageUser}
              source={imageUser} 
            />
            <Text style={{fontSize:15}}>{githubUser}</Text>
          </View>
  
          <View>
            <TouchableWithoutFeedback onPress={ () => {
                const now = Date.now();
                const DOUBLE_PRESS_DELAY = 500;
                if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
                  setLikeState(!liked)
                } else {
                  setLastTap(now);
                }
              }}>
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
            <Text style={{margin:5,fontSize:15}}>{githubUser} entrou no InstaGithub</Text>
          </View>
      </View>
    )
  }