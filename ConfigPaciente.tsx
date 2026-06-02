import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  useWindowDimensions,
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
import { SafeAreaView } from "react-native-safe-area-context";

function ConfigPaciente() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { height } = useWindowDimensions();

  return (
    <ImageBackground
      source={require("./assets/configPaciente.png")}
      style={[styles.background, { height: height * 1.05 }]}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgComponentVoltar />
        </TouchableOpacity>
        <View style={styles.containerLogo}>
          <Text style={styles.textoConfig}>Configurações</Text>
        </View>
        <View style={styles.divNome}>
          <Text style={styles.styleNome}>Amanda</Text>
          <Text style={styles.stylePaciente}>Paciente</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Icon name="email-outline" size={24} color="#1E1E1E" />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#A3A3A3"
              keyboardType="email-address"
            />
          </View>
          <Text style={styles.descriptionText}>
            Aqui você terá acesso á Exercícios de respiração.
          </Text>

          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Começar</Text>
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
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: "10%", // Dynamic height based on screen size
    backgroundColor: "#FFF",
    marginBottom: "10%", // Dynamic margin based on screen size
    paddingHorizontal: "10%", // Dynamic padding based on screen size
    borderRadius: 10, // Dynamic border radius based on screen size
    borderWidth: 1,
    borderColor: "#DDD",
  },
  textoConfig: {
    fontWeight: "bold",
    color: "#2F2E41",
    fontSize: 20,
    marginTop: "5%",
    marginRight: "3%",
  },
  styleNome: {
    fontSize: 22,
    fontWeight: "semibold",
    color: "#3F3D56",
  },
  stylePaciente: {
    fontSize: 16,
    color: "#7277F6",
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
    top: 45,
    left: 20,
    borderRadius: 20,
    marginLeft: -10,
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
    marginBottom: 200,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E2B177",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#3F3D56",
    textAlign: "center",
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
  divNome: {
    marginTop: "5%",
    marginRight: "55%",
  },
});

export default ConfigPaciente;
