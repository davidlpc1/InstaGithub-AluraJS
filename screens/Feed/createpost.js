import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const CameraRef = useRef();
  const [photo,setPhoto] = useState({uri:'',width:0,height:0});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!hasPermission) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
      <View style={styles.container}>

        {photo.height == 0 && (        
          <Camera style={styles.camera} type={type} ref={CameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}>         
                  <MaterialCommunityIcons name="camera-retake-outline" size={48} color="black" />
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity onPress={async() => {
                let photoOfCamera = await CameraRef.current.takePictureAsync()
                setPhoto(photoOfCamera)
              }}>
                <Text><MaterialCommunityIcons name="camera-wireless-outline" size={48} color="black" /></Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )}
        {photo.height != 0 && (
          <Image source={{uri:photo.uri}} style={{width:300, height:300}}/>
        )}
      </View>
  );
}

const styles = StyleSheet.create({ 
  container:{
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  camera:{
    height:'70%',
    width:'100%'
  },
  buttonContainer:{},
  button:{},
 }); 