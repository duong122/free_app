
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContain}>
        <ImageBackground source={require('../assets/img/imgFlowers1.png')} style={styles.headerImage}>
          <View>
            <TouchableOpacity>
              <Image source={require('../assets/img/Vector1.png')}></Image>
              <Image source={require('../assets/img/iconShare.png')}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.textContain}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContain: {
    flex: 2,
    resizeMode: 'stretch',
    borderRadius: 32,
    
  },
  headerImage: {
    flex:1,
    width: '100%',

  },
  textContain: {
    flex: 2,

  }
});
