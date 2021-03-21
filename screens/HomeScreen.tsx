import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem, Icon } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]


export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Veja as últimas extrações e tome no cu!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View>
          {
            list.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Icon name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>
      </View>
    </SafeAreaProvider>
    
  );
}

// demo code. saving just to lose
//<EditScreenInfo path="/screens/TabTwoScreen.tsx" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
