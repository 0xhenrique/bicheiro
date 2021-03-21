import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import RelatorioScreen from '../screens/RelatorioScreen';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeScreenParamList,  CadastroScreenParamList, LoginScreenParamList, RelatorioScreenParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="RelatorioScreen"
        component={RelatorioScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cadastro"
        component={CadastroScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
    
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home Title' }}
      />
    </HomeScreenStack.Navigator>
  );
}

const CadastroScreenStack = createStackNavigator<CadastroScreenParamList>();

function CadastroScreenNavigator() {
  return (
    <CadastroScreenStack.Navigator>
      <CadastroScreenStack.Screen
        name="CadastroScreen"
        component={CadastroScreen}
        options={{ headerTitle: 'Cadastro Title' }}
      />
    </CadastroScreenStack.Navigator>
  );
}

const LoginScreenStack = createStackNavigator<LoginScreenParamList>();

function LoginScreenNavigator() {
  return (
    <LoginScreenStack.Navigator>
      <LoginScreenStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Login Title' }}
      />
    </LoginScreenStack.Navigator>
  );
}

const RelatorioScreenStack = createStackNavigator<RelatorioScreenParamList>();

function RelatorioScreenNavigator() {
  return (
    <RelatorioScreenStack.Navigator>
      <RelatorioScreenStack.Screen
        name="RelatorioScreen"
        component={RelatorioScreen}
        options={{ headerTitle: 'Relatorio Title' }}
      />
    </RelatorioScreenStack.Navigator>
  );
}