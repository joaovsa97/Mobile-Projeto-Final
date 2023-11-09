import { TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import * as React from "react";
import { Container, Content, Title } from "../styles/GlobalStyles";

const Login = ({ navigation }) => {
  const [pwToggle, setPwToggle] = React.useState(true);

  return (
    <Container>
      <Title>Login</Title>
      <Content>
        <TextInput mode="outlined" label="E-mail" />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={pwToggle}
          right={
            <TextInput.Icon icon="eye" onPress={() => setPwToggle(!pwToggle)} />
          }
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 12,
          }}
        >
          <Button
            style={{ backgroundColor: "#6666CC", width: "40%" }}
            textColor="#fff"
            onPress={() => navigation.navigate("Logged")}
          >
            Cadastrar
          </Button>
          <Button
            style={{ backgroundColor: "#6666CC", width: "40%" }}
            textColor="#fff"
            onPress={() => navigation.navigate("Logged")}
          >
            Logar
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
