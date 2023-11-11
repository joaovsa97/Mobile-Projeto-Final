import { Avatar, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { Content, Header, Footer } from "../styles/GlobalStyles";

import InteractiveButton from "../component/Button.jsx";
import Icon from "../assets/avatar.png";

const Home = () => {
  return (
    <ScrollView>
      <Content>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={40} source={Icon} />
            <Card.Title title="Full Stack Blog App" subtitle="John Doe" />
          </Header>
          <Card.Content>
            <Text>
              Olá rede, este é meu novo projeto de blog utilizando MERN.
            </Text>
          </Card.Content>
          <Footer>
            <InteractiveButton label="curtir" />
            <InteractiveButton
              label="comentar"
              onPress={() => alert("Página de visualização em desenvolvimento")}
            />
            <InteractiveButton
              label="compartilhar"
              onPress={() =>
                alert("Função de compartilhamento em desenvolvimento")
              }
            />
          </Footer>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title
              title="Procurando Java Senior."
              subtitle="HR Services"
            />
          </Header>
          <Card.Content>
            <Text>
              Estamos em busca de um profissional para atuar como Desenvolvedor
              Java Senior e liderar uma equipe de desenvolvedores
            </Text>
          </Card.Content>
          <Footer>
            <InteractiveButton label="curtir" />
            <InteractiveButton
              label="comentar"
              onPress={() => alert("Página de visualização em desenvolvimento")}
            />
            <InteractiveButton
              label="compartilhar"
              onPress={() =>
                alert("Função de compartilhamento em desenvolvimento")
              }
            />
          </Footer>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title
              title="Buscando Emprego - React Developer"
              subtitle="John Doe"
            />
          </Header>
          <Card.Content>
            <Text>
              Olá rede, estou em busca de uma nova oportunidade para atuar como
              desenvolvedor React
            </Text>
          </Card.Content>
          <Footer>
            <InteractiveButton label="curtir" />
            <InteractiveButton
              label="comentar"
              onPress={() => alert("Página de visualização em desenvolvimento")}
            />
            <InteractiveButton
              label="compartilhar"
              onPress={() =>
                alert("Função de compartilhamento em desenvolvimento")
              }
            />
          </Footer>
        </Card>
        <Card mode="outlined">
          <Header>
            <Avatar.Image size={36} source={Icon} />
            <Card.Title title="Curso de Power B.I" subtitle="Treina Tudo" />
          </Header>
          <Card.Content>
            <Text>
              Treinamento de Power B.I gratuito e com certificado pela
              instituição Treina Tudo. Clique no link a seguir para acessar e
              efetuar sua inscrição:
            </Text>
          </Card.Content>
          <Footer>
            <InteractiveButton label="curtir" />
            <InteractiveButton
              label="comentar"
              onPress={() => alert("Página de visualização em desenvolvimento")}
            />
            <InteractiveButton
              label="compartilhar"
              onPress={() =>
                alert("Função de compartilhamento em desenvolvimento")
              }
            />
          </Footer>
        </Card>
      </Content>
    </ScrollView>
  );
};

export default Home;
