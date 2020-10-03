import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordScreen from './src/containers/RecordScreenContainer';
import RecordingsScreen from './src/containers/RecordingsScreenContainer';
import ProfileScreen from './src/containers/ProfileScreenContainer';
import configureStore from './src/store/configureStore';
import { Image, StyleSheet, View } from 'react-native';
import recordTabIcon from './src/images/record-tab-icon.png';
import recordingsTabIcon from './src/images/recordings-tab-icon.png';
import profileTabIcon from './src/images/profile-tab-icon.png';

const store = configureStore();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let tabIcon;
              if (route.name === 'Record') {
                tabIcon = recordTabIcon;
              } else if (route.name === 'Recordings') {
                tabIcon = recordingsTabIcon;
              } else {
                tabIcon = profileTabIcon;
              }

              let tabIconContainerStyle = {
                ...styles.tabIconContainer,
              };

              let tabIconStyle = {
                ...styles.tabIconImage,
              };

              if (focused) {
                tabIconStyle = {
                  ...tabIconStyle,
                  tintColor: '#125FB9',
                };

                tabIconContainerStyle = {
                  ...tabIconContainerStyle,
                  backgroundColor: '#243350',
                };
              }

              return (
                <View style={tabIconContainerStyle}>
                  <Image source={tabIcon} style={tabIconStyle} />
                </View>
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'yellow',
            showLabel: false,
            style: {
              backgroundColor: 'transparent',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              elevation: 0,
              borderTopColor: 'transparent',
            },
          }}
        >
          <Tab.Screen name="Record" component={RecordScreen} />
          <Tab.Screen name="Recordings" component={RecordingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconImage: {
    width: 24,
    height: 24,
    tintColor: '#83868D',
  },
});

export default App;
