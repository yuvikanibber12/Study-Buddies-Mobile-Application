import React from 'react';
import { Text, View } from 'react-native';

export default function MainMenu () {
  return (
    <View>
      <Text>Welcome to the Main Menu!</Text>
      <Text>Friend Finder</Text>
      <Text>Grade Calculator</Text>
      <Text>Missing Buddy</Text>
      <Text>Buddy Cloud</Text>
      <Text>Resource Center</Text>
      <Text>Sign Out</Text>
    </View>
  )
}

//export MainMenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
