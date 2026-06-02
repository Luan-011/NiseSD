import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentLogoHeader from "./assets/LogoHeader";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";

function MindFulnessSobre() {
  const navigation = useNavigation<NavigationProp<any>>();
  const handlePratica = () => {
    navigation.navigate("MindFulnessPratica");
  };

  return (
    <ImageBackground
      source={require("./assets/Mindfulness2.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgComponentVoltar />
        </TouchableOpacity>
        <View style={styles.containerLogo}>
          <SvgComponentLogoAzulInicio />
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeText}>
            <Text style={{ fontWeight: "bold", color: "#3F3D56" }}>
              Mindfulness
            </Text>
            , palavra que pode ser traduzida como “atenção plena”, é a prática
            de se concentrar completamente no presente. Em atenção plena, as
            preocupações com passado e futuro dão lugar à uma consciência
            avançada do “agora”, que inclui percepção de sentimentos, sensações
            e ambiente.
          </Text>
          <Text style={styles.descriptionText}>
            Há várias abordagens e técnicas diferentes. Antes de começar a
            praticar, vale se informar mais profundamente sobre o assunto e, se
            necessário, buscar orientação de instrutores qualificados.
          </Text>

          <TouchableOpacity style={styles.startButton} onPress={handlePratica}>
            <Text style={styles.startButtonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  containerLogo: {
    justifyContent: "center",
    marginLeft: 15,
    marginTop: -5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 40, // Padding added to avoid overlap with the status bar
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: "#FFD098",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#3F3D56",
  },
  logo: {
    position: "absolute",
    top: 50,
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    alignItems: "center",
    width: "95%",
    justifyContent: "center",
    marginBottom: 200,
  },
  welcomeText: {
    fontSize: 18,
    color: "#555279",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 18,
    color: "#7277F6",
    textAlign: 'left',
    marginBottom: 40,

  },
  startButton: {
    backgroundColor: "#4A50DF",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MindFulnessSobre;
