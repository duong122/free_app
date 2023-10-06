import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, 
        TextInput, TouchableOpacity, 
        View, Image, 
        Button, FlatList} from 'react-native';
import No2 from '../Screens/No2'

const Tab = createBottomTabNavigator();

const Render = ({item}) => {
    return(
        <View style={styles.SliderContainer}>
            <Image source={item.uri}></Image>
            <View style={styles.ConTentLowerImg}>
                <Text style={styles.TextContentImg}>{item.text}</Text>
                <Image source={item.icon_uri}/>
            </View>
        </View>
    );
};

const RenderTitle = ({item, onPress}) =>{
    return(
        <View style={styles.NextToYou}>
                <View style={styles.ContentInside}>
                    <Text style={styles.TextContent}>{item.titleText}</Text>
                    <TouchableOpacity style={styles.OnTheMapBtn} onPress={onPress}>
                        <Text>{item.buttonTitle}</Text>
                        <Image source={require('../assets/img/IconArrow.png')} style={styles.IconArrowStyle}></Image>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const RenderCategoriesItem = ({item}) => {
  return (
    <View style={styles.stylebox}>
      <View style={styles.LeftPart}>
        <Image source={item.image} style={styles.LeftPartImage}></Image>
        <View>
          <Text style={styles.LeftPartTitle}>{item.textTitle}</Text>
          <Text style={styles.LeftPartQuantity}>{item.taskQuantity}</Text>
        </View>
      </View>

      <Image source={require('../assets/img/IconArrow.png')} style={styles.RightPart}></Image>
    </View>
  );
};

const GotoNextToYou = ({ navigation }) => {
  navigation.navigate('No2');
}

export default function App({ navigation }) {
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

            <RenderTitle item={Nty}/>

            <View style={styles.Slider}>
                <FlatList data={dataSource} renderItem={
                    ({item, dataSource}) => {
                        return <Render item={item}/>
                    }} 
                    horizontal ></FlatList>
            </View>
            
            <RenderTitle item={Cate}/>

            <View style={styles.Categories}>
                <FlatList data={dataSourceCate} renderItem={
                  ({item, dataSourceCate}) => {
                    return <RenderCategoriesItem item={item}/>
                  }
                }/>
            </View>
        </View>
        <Tab.Navigator >
                <Tab.Screen name='No2' component={No2} options={{
                  tabBarLabel: '',
                  tabBarIcon: (({ width1, height1}) => {
                    return(<Image source={require('../assets/img/iconMenuList.png')}
                    style={{width: 24, height: 24}}/>);
                  })
                }}/>
                <Tab.Screen name='No3' component={No2} options={{
                  tabBarLabel: '',
                  tabBarIcon: (({ width1, height1}) => {
                    return(<Image source={require('../assets/img/Vector.png')}
                    style={{width: 24, height: 24}}/>);
                  })
                }}/>
                <Tab.Screen name='No4' component={No2} options={{
                  tabBarLabel: '',
                  tabBarIcon: (({ width1, height1}) => {
                    return(<Image source={require('../assets/img/iconAdd.png')}
                    style={{width: 48, height: 48}}/>);
                  })
                }}/>
                <Tab.Screen name='No5' component={No2} options={{
                  tabBarLabel: '',
                  tabBarIcon: (({ width1, height1}) => {
                    return(<Image source={require('../assets/img/Icon_Chat.png')}
                    style={{width: 24, height: 24}}/>);
                  })
                }}/>
                <Tab.Screen name='No6' component={No2} options={{
                  tabBarLabel: '',
                  tabBarIcon: (({ width1, height1}) => {
                    return(<Image source={require('../assets/img/User.png')}
                    style={{width: 24, height: 24}}/>);
                  })
                }}/>
                
        </Tab.Navigator>
    </View>
  );
}

const dataSource = [
    {
        key: 1,
        uri: require('../assets/img/imgDogCard.png'),
        text: 'Go for a walk and feed the dog',
        icon_uri: require('../assets/img/Icon_Chat.png'),
    },
    {
        key: 2,
        uri: require('../assets/img/imgDogCard.png'),
        text: 'Water the flowers once a week',
        icon_uri: require('../assets/img/Icon_Chat.png'),
    },
];

const Nty = {
    key: 1,
    titleText: 'Next to you',
    buttonTitle: 'On the map',
};
const Cate = {
    key: 2,
    titleText: 'Categories',
    buttonTitle: 'See all',
};

const dataSourceCate = [
  {
    key: 1,
    image: require('../assets/img/Icon_Moving.png'),
    textTitle: 'Moving and things',
    taskQuantity: '24 tasks',
  },
  {
    key: 2,
    image: require('../assets/img/Icon_House.png'),
    textTitle: 'Help around the house',
    taskQuantity: '5 tasks',
  },
]

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
    height: 16, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
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
    marginVertical: 30,
  },
  SliderContainer: {
    marginLeft: 20,
  },
  TextContentImg: {
    width: 142,
    height: 44,
    fontWeight: '600',
    fontSize: 16,
  },
  ConTentLowerImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  Slider: {
    marginTop: 15,
  },
  LeftPart: {
    flexDirection: 'row',
  },
  stylebox: {
    flexDirection: 'row',
    width: 327,
    height: 72,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between'
  },
  LeftPartImage: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  LeftPartTitle: {
    width: 155,
    height: 20,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
  },
  LeftPartQuantity: {
    color: '#31313180',
  },
  RightPart: {
    width: 6,
    height: 12,
    position: 'relative',
    top: 10,
  },

});
