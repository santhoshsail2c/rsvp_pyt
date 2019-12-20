import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import RSVP_Reg from './screens/RegScreen';
import DetailsScreen from './screens/DetailsScreen';
import RSVP_Members from './screens/ListScreen';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const RegistrationScreenNavigator = createStackNavigator({
  First: {
    screen: RSVP_Reg,
    navigationOptions: ({ navigation }) => ({
      title: 'RSVP Registration',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4d95ff',
      },
      headerTintColor: '#fff',
    }),
  },
});

const MemberListScreenNavigator = createStackNavigator({
  Second: {
    screen: RSVP_Members,
    navigationOptions: ({ navigation }) => ({
      title: 'RSVP Members',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4d95ff',
      },
      headerTintColor: '#fff',
    }),
  },
  Details: DetailsScreen,
});

const DrawerNavigatorExample = createDrawerNavigator({
  RSVP_Reg: {
    screen: RegistrationScreenNavigator,
    navigationOptions: {
      drawerLabel: 'RSVP Registration',
    },
  },
  RSVP_Members: {
    screen: MemberListScreenNavigator,
    navigationOptions: {
      drawerLabel: 'RSVP Members',
    },
  },

});

export default createAppContainer(DrawerNavigatorExample);
