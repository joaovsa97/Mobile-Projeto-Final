import { ScrollView, Image, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { Content, Title, Subtitle } from "../styles/GlobalStyles";
import Icon from "../assets/avatar.png";

const Perfil = () => {
  return (
    <Content>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            padding: 8,
            borderRadius: 8,
            marginBottom: 8,
          }}
        >
          <Image
            style={{
              height: 120,
              width: 120,
              alignSelf: "center",
            }}
            source={Icon}
          />
          <Title>John Doe</Title>
          <Subtitle>Desenvolvedor</Subtitle>
        </View>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            padding: 8,
            borderRadius: 8,
            marginBottom: 8,
          }}
        >
          <Title>Sobre</Title>

          <Text style={{ padding: 8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            hendrerit elementum quam, quis fringilla lorem suscipit in. Quisque
            et imperdiet ipsum. Etiam eget est ullamcorper, fringilla justo
            vitae, suscipit est. Morbi vitae metus vitae erat luctus mattis.
            Maecenas imperdiet nisi vel sagittis tristique. Sed tempor eros ac
            augue cursus, id interdum lorem euismod. Nullam diam nulla, finibus
            sit amet interdum in, finibus in magna. Vestibulum placerat nisl nec
            hendrerit ornare. Fusce venenatis aliquet quam. Aliquam risus erat,
            convallis ut lorem at, blandit lacinia quam. Maecenas imperdiet nisi
            vel sagittis tristique. Sed tempor eros ac augue cursus, id interdum
            lorem euismod. Nullam diam nulla, finibus sit amet interdum in,
            finibus in magna. Vestibulum placerat nisl nec hendrerit ornare.
            Fusce venenatis aliquet quam. Aliquam risus erat, convallis ut lorem
            at, blandit lacinia quam.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            padding: 8,
            borderRadius: 8,
            marginBottom: 8,
          }}
        >
          <Title>Portifólio</Title>
          <Subtitle style={{ color: "#6666CC", textAlign: "center" }}>
            Tem algum projeto e quer compartilhar com sua rede? Adicione-o aqui
          </Subtitle>
          <IconButton
            icon="plus-circle"
            iconColor="#6666CC"
            size={64}
            onPress={() =>
              alert("Função de adicionar projetos em desenvolvimento")
            }
          />
        </View>
      </ScrollView>
    </Content>
  );
};

export default Perfil;
