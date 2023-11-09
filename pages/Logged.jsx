import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text } from "react-native";
import { Container } from "../styles/GlobalStyles";

import Home from "./Home.js";
import Perfil from "./Perfil.js";
import Vagas from "./Vagas.js";

const Tab = createMaterialBottomTabNavigator();

const Logged = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#6666CC',  }}
    activeColor="#694fad"
    inactiveColor="#fff">
      <Tab.Screen options={{ tabBarIcon: 'home',
          tabBarLabel: <Text style={{color: "white"}}>Home</Text> }} name="home" component={Home} />
      <Tab.Screen options={{ tabBarIcon: 'briefcase',
          tabBarLabel: <Text style={{color: "white"}}>Vagas</Text> }} name="Vagas" component={Vagas} />
      <Tab.Screen options={{ tabBarIcon: 'account', 
          tabBarLabel: <Text style={{color: "white"}}>Perfil</Text>
          }} name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

export default Logged;
