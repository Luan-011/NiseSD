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

function MindFulness() {
  const navigation = useNavigation<NavigationProp<any>>();
  const handleSobre = () =>{
    navigation.navigate("MindFulnessSobre")
  }

  return (
    <ImageBackground
      source={require("./assets/Mindfulness.png")}
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
          Aqui você aprenderá a prática de se concentrar completamente no presente.
          </Text>

          <TouchableOpacity onPress={handleSobre} style={styles.startButton}>
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
    color: "#4A50DF",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#3F3D56",
    textAlign: "center",
    fontWeight:'bold',
    paddingHorizontal: 20,
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

export default MindFulness;
