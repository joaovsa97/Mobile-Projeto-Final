import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { Content, Header } from "../styles/GlobalStyles";
import Icon from "../assets/avatar.png"

const Vagas = () => {
  return (
    <ScrollView>
      <Content>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title
              title="React.js Jr."
              subtitle="Fictional Enterprise Inc."
            />
          </Header>
          <Card.Content>
            <Text>#React.Js  #Híbrido  #Nível Superior  #Nível Técnico</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                alert('Página de visualização em desenvolvimento')
              }>
              Ver
            </Button>
            <Button
              onPress={() => alert('Função de candidatura em desenvolvimento')}>
              Candidatar-se
            </Button>
          </Card.Actions>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title title="Java Senior." subtitle="SomeEntity S.A." />
          </Header>
          <Card.Content>
          <Text>#Java  #Spring  #Home Office  #Nível Superior</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                alert('Página de visualização em desenvolvimento')
              }>
              Ver
            </Button>
            <Button
              onPress={() => alert('Função de candidatura em desenvolvimento')}>
              Candidatar-se
            </Button>
          </Card.Actions>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title
              title="Looking for Job - React Developer"
              subtitle="John Doe"
            />
          </Header>
          <Card.Content>
          <Text>#React.Js  #Web Developer  #MongoDB  #Next.Js</Text>

          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                alert('Página de visualização em desenvolvimento')
              }>
              Ver
            </Button>
            <Button
              onPress={() => alert('Função de candidatura em desenvolvimento')}>
              Candidatar-se
            </Button>
          </Card.Actions>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title title="Accountant" subtitle="HR Services" />
          </Header>
          <Card.Content>
          <Text>#Gestão de impostos  #Conformidade fiscal  #Nível Superior  #Preenchimento de declarações</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                alert('Página de visualização em desenvolvimento')
              }>
              Ver
            </Button>
            <Button
              onPress={() => alert('Função de candidatura em desenvolvimento')}>
              Candidatar-se
            </Button>
          </Card.Actions>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title
              title="Senior Software Developer"
              subtitle="Fictional Enterprise Inc."
            />
          </Header>
          <Card.Content>
            <Text>#DevOps  #Docker  #SQL  #.Net  #Oracle</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() =>
                alert('Página de visualização em desenvolvimento')
              }>
              Ver
            </Button>
            <Button
              onPress={() => alert('Função de candidatura em desenvolvimento')}>
              Candidatar-se
            </Button>
          </Card.Actions>
        </Card>
      </Content>
    </ScrollView>
  );
};

export default Vagas;
