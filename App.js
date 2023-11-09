import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Container, Title } from "./styles/GlobalStyles";
import { Entypo } from "@expo/vector-icons";
import "react-native-gesture-handler";

import Login from "./pages/Login"
import Logged from "./pages/Logged"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logged" component={Logged} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
