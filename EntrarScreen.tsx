
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentMeninaEntrar from "./assets/MeninaFelizEntrar";

interface EntrarScreenProps {
  navigation: NavigationProp<any>;
}

const EntrarScreen: React.FC<EntrarScreenProps> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Tela1");
  };

  const handleRedefinir = () => {
    navigation.navigate("Redefinir");
  };

  const handleCriar = () => {
    navigation.navigate("CadastroCriar");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("./assets/entrar.jpg")}
        style={styles.backgroundImage}
      >
        <SafeAreaView>
          <View style={styles.containerImagensVoltar}>
            <TouchableOpacity>
              <SvgComponentVoltar />
            </TouchableOpacity>
            <SvgComponentLogoAzulInicio />
          </View>
        </SafeAreaView>

        <View style={styles.inner}>
          <View style={styles.containerImagens}>
            <SvgComponentMeninaEntrar/>
          </View>
          <View style={styles.inputs}>
            <Text style={styles.title}>Entrar</Text>
            <View style={styles.textContainer}>
              <View style={styles.inputContainer}>
                <Icon name="email-outline" size={24} color="#1E1E1E" />
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor="#A3A3A3"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={24} color="#1E1E1E" />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  placeholderTextColor="#A3A3A3"
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Icon
                    name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#1E1E1E"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.link}>
              <TouchableOpacity onPress={handleRedefinir}>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.submitButtonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.link2}>
            <TouchableOpacity onPress={handleCriar}>
              <Text style={styles.signUpText}>
                Não tem uma conta ainda? Criar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImagensVoltar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "32%",
    marginLeft: "5%",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  containerImagens: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  illustration: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#FFF",
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
  forgotPassword: {
    color: "#D8DBFF",
    textDecorationLine: "underline",
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  submitButton: {
    width: 320,
    height: 50,
    backgroundColor: "#FFB201",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#1E1E1E",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  signUpText: {
    color: "#D8DBFF",
    textDecorationLine: "underline",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  inputs: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
  },
  link: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 5,
  },
  link2: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
});

export default EntrarScreen;