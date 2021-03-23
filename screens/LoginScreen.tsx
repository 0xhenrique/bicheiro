import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoC}>
      <Image source={require('../assets/logo.png')} style={styles.logo}  />
      </View>

      <View style={styles.container}>
      <Input placeholder='Nickname' leftIcon={<Icon name='user'size={24} color='#8F9EA6'/>}/>
      <Input placeholder='Senha' leftIcon={<Icon name='lock'size={24} color='#8F9EA6'/>}/>
      <Button title="Login" buttonStyle={{backgroundColor: "#0CB38A"}} />
      <Button title="Cadastrar" type="clear" titleStyle={{color: "#60CD91"}} />      
      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoC: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 340,
    height: 340,
    alignItems: 'stretch',
  },
  logo: {
    width: 350,
    height: 350,
    alignItems: 'baseline',
    resizeMode: 'contain',
  },
});
