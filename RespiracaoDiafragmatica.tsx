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

function RespiracaoDiafragmatica() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ImageBackground
      source={require("./assets/Respiração-tipos.png")}
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
          <Text style={{ color: "#555279", fontWeight: "bold", fontSize: 15 }}>
          RESPIRAÇÃO DIAFRAGMÁTICA
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.textView}>
            <Text style={styles.descriptionText}>
              Trata-se de uma respiração muito aplicada nas aulas de yoga. Nesse
              caso, a técnica pode ser usada para minimizar os sintomas da
              ansiedade e do estresse, inclusive, em momentos de crises.
            </Text>

            <Text style={styles.descriptionText}>
              Para isso, é preciso se sentar de maneira confortável, manter a
              postura ereta e colocar a mão sobre o abdômen, próxima ao umbigo.
              A outra mão deve ficar na parte superior do peito.
            </Text>

            <Text style={styles.descriptionText}>
              Quando inspirar, que é puxar o ar, o abdômen precisa subir. Quando
              expirar, que é soltar o ar, é necessário que o abdômen desça. Esse
              processo não vai acontecer na primeira tentativa, então, é preciso
              se concentrar e ir praticando. Caso seja possível, conte até
              quatro enquanto estiver inspirando e respirando de forma lenta.
            </Text>
        </View>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("TimerMindFulness")}>
            <Text style={styles.startButtonText}>Começar</Text>
          </TouchableOpacity>
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
  textView: {
    backgroundColor: "#ffffffcc",
    width: "90%",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: "90%",
    borderColor: "#FFD980",
    borderWidth: 2,
  },

  containerLogo: {
    justifyContent: "center",
    marginLeft: 2,
    marginTop: 20,
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
    width: "100%",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E2B177",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 15,
    color: "#555279",
    textAlign: "left",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontWeight: "bold",
    width: "100%",
  },
  startButton: {
    backgroundColor: "#FFD098",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: '60%'
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RespiracaoDiafragmatica;
