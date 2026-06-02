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

function RespiracaoTipos() {
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
          <Text style={{ color: "#555279", fontWeight: "bold", fontSize: 20 }}>
            RESPIRAÇÃO
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.descriptionText}>
            A respiração é essencial para acalmar a ansiedade, pois técnicas de
            respiração profunda e consciente ajudam a reduzir o estresse,
            estimulam a resposta de relaxamento do corpo e promovem mindfulness,
            diminuindo a sensação de nervosismo e proporcionando uma sensação de
            calma e controle.
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('RespiracaoDiafragmatica')} style={styles.startButton}>
            <Text style={styles.startButtonText}>Praticar respiração diafragmática</Text>
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
    marginBottom: 300,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E2B177",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#555279",
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 40,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "#FFD098",
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

export default RespiracaoTipos;
