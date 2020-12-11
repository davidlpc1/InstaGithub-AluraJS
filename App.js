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
function InstaGitHubCard({ githubUser }){
  const [liked,setLikeState] = useState(false);
  const [countClick,setCountClick] = useState(0);
  return (
      <View>
        <View style={{ 
          flexDirection: 'row',
          padding:15,
          alignItems:'center',
        }}>
          <Image 
            style={{
              marginRight:15,
              width:40,
              height:40,
              borderRadius:20
            }}
            source={{
              uri:`https://github.com/${githubUser}.png`
            }} 
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
              style={{
                width:'100%',
                height:350,
              }}
              source={{
                uri:`https://github.com/${githubUser}.png`
              }} 
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={{ 
          flexDirection: 'row',
          padding:15,
          alignItems:'center',
        }}>
          <TouchableOpacity onPress={() => setLikeState(!liked)}>
            {liked &&  <AntDesign name="heart" size={24} color="red" />}
            {!liked && <AntDesign name="hearto" size={24} color="black" />}
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default function App() {
  const users = ['omariosouto','vweberfroes','gabrielfroes','peas','davidlpc1']
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {users.map(githubUser => 
          <InstaGitHubCard githubUser={githubUser} key={githubUser} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
