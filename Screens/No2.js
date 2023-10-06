import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';

export default function App({ navigation }) {
  return (
     
      <ImageBackground source={require('../assets/img/MapsicleMap.png')} style={styles.ImageBack}>
      <View style={styles.container}>
          <View style={styles.ImageContainer}>
            <Image source={require('../assets/img/Avas.png')} style={styles.headImg}/>
            <Image source={require('../assets/img/ava.png')} style={styles.theNearest}/>
          </View>

          <View style={styles.theNearInfoBox}>
            <View style={styles.theBoxBorder}>
              <View style={styles.TheBox}>
                <View style={styles.header}>
                  <Text style={styles.textIconVerify}>Anderson G. <Image source={require('../assets/img/Icon_Verify.png')}/></Text>
                  <Image source={require('../assets/img/Vector.png')}/>
                </View>
                  <Image source={require('../assets/img/Rating.png')} style={styles.ratingImg}/>
                <View style={{width: 190, height: 44, marginHorizontal: 8,}}>
                  <Text style={styles.titleBox}>Go for a walk and feed the dog </Text>
               </View>
                <View style={styles.textBottomBox}>
                  <View style={styles.distance}> 
                    <Image style={styles.iconGeo} source={require('../assets/img/iconGeo.png')}></Image>
                    <Text style={styles.NumberDistance}>400m</Text>
                  </View>
                  <Text style={styles.price}> 34$ </Text>
                </View>
              </View>
            </View>
          </View>
      </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  ImageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  ImageBack: {
    flex: 1,
    resizeMode: 'cover',
  },
  headImg: {
    width: 350,
    height: 278,
    marginTop: 12,
    resizeMode:'stretch',
  },
  theNearest: {
    width: 99,
    height: 114,
  },
  theNearInfoBox: {
    alignItems: 'center',
  },
  TheBox: {
    backgroundColor: '#fff',
    width: 279,
    height: 158,
    borderRadius: 20,
  },
  theBoxBorder: {
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal: 8,
    width: 260,
    marginTop: 8,
  },
  distance: {
    flexDirection: 'row',
  },
  textIconVerify: {
    fontWeight: '600',
    fontSize: 16,
  },
  textBottomBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
    marginTop: 12,
    marginHorizontal: 8,
  },
  titleBox: {
    fontWeight: '600',
    fontSize: 16,
  },
  ratingImg: {
    marginVertical: 12,
    marginHorizontal: 8,
  },
  titleBox: {
  },
  NumberDistance: {
    color: '#31313180',
  },
  price: {
    fontWeight: '700',
    fontSize: 20,
  }
});
