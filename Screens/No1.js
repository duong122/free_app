import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.SearchHeader}>
                    <View style={styles.SearchInput}>
                        <Image style={styles.SearchInputIcon} source={require('../assets/img/iconSearch.png')}/>
                        <Text style={styles.SearchInputValue}> Search </Text>
                    </View>
                    <TouchableOpacity style={styles.Group3}>
                        <Image source={require('../assets/img/Group3.png')} style={styles.Group3_icon}></Image>
                    </TouchableOpacity>
            </View>
            <View style={styles.NextToYou}>
                <View style={styles.ContentInside}>
                    <Text style={styles.TextContent}> Next to you</Text>
                    <TouchableOpacity style={styles.OnTheMapBtn}>
                        <Text> On the Map</Text>
                        <Image source={require('../assets/img/IconArrow.png')} style={styles.IconArrowStyle}></Image>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  subContainer: {
    marginTop: 74,
  },
  SearchHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SearchInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 263,
    height: 48,
    borderBlockColor: '#fff',
    borderRadius: 20,
  },
  SearchInputIcon: {
    marginHorizontal: 16,
  },
  SearchInputValue: {
    color: '#313131'
  },
  Group3: {
    height: 48,
    width: 48,
    borderRadius: 10,
    backgroundColor: '#A58EFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  OnTheMapBtn: {
    width: 88, 
    height: 16, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  IconArrowStyle: {
    width: 4, 
    height: 7, 
    position: 'relative',
    left: 4,
    top: 3,
  },
  ContentInside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  TextContent: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 24,
  },


  NextToYou: {
    marginTop: 30,
  }
});
