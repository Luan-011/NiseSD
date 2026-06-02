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

function LerArtigos() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ImageBackground
      source={require("./assets/let-artigos.png")}
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
          <Text style={styles.welcomeText}>BEM-VINDO!</Text>
          <Text style={styles.descriptionText}>
          Aqui você terá acesso à artigos postados por especialistas.
          </Text>

          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("TelaLerArtigos")}>
            <Text style={styles.startButtonText}>Ler artigos</Text>
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

  containerLogo:{
    justifyContent:'center',
    marginLeft: 15,
    marginTop: -5
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
    width: "90%",
    justifyContent: "center",
    marginBottom: 200
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#555279",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#3F3D56",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
    fontWeight:'bold'
  },
  startButton: {
    backgroundColor: "#5861A9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  startButtonText: {
    color: "#FFEAD0",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LerArtigos;
