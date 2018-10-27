import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  // Views are just components in React Native
  View,
} from 'react-360';

export default class VR_Street_View_Mobile_App extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

//Stylesheet is INLINE on actual JS file rather than a CSS file 
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

//In React Native you need to use 'App Registry' to register a component to the entire app 
AppRegistry.registerComponent('VR_Street_View_Mobile_App', () => VR_Street_View_Mobile_App);
