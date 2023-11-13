import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton, Text } from "react-native-paper";
import "react-native-gesture-handler";

import Login from "./pages/Login";
import Logged from "./pages/Logged";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#6666CC',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Logged"
          component={Logged}
          options={({ navigation }) => ({
            title: "",
            headerLeft: () => (
              <>
                <IconButton
                  icon="account"
                  iconColor="white"
                  size={40}
                  onPress={() => navigation.navigate("Perfil")}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>John Doe</Text>
              </>
            ),
            headerRight: () => (
              <>
                <IconButton
                  icon="plus"
                  iconColor="white"
                  onPress={() =>
                    alert(
                      'Função de Criar Publicação está em desenvolvimento'
                    )
                  }
                />
                <IconButton
                  icon="message"
                  iconColor="white"
                  onPress={() =>
                    alert(
                      'Função de Chat está em desenvolvimento'
                    )
                  }
                />
              </>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
