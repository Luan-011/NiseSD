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
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import SvgComponentEsqueci from "./assets/RapazEsquecido";
import SvgComponentLogoHeader from "./assets/LogoHeader";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponentVoltar from "./assets/SetaBack";

interface RedefinirScreenProps {
  navigation: NavigationProp<any>;
}

const RedefinirScreen: React.FC<RedefinirScreenProps> = ({ navigation }) => {
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { height } = useWindowDimensions()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("./assets/entrar.png")}
        style={[styles.backgroundImage, {height: height*1.05}]}
      >
        <SafeAreaView>
          <View style={styles.containerImagensVoltar}>
            <TouchableOpacity onPress={navigation.goBack}>
              <SvgComponentVoltar />
            </TouchableOpacity>
            <SvgComponentLogoAzulInicio />
          </View>
        </SafeAreaView>

        <View style={styles.inner}>
          <View style={styles.containerImagens}>
            <SvgComponentEsqueci />
          </View>

          <Text style={styles.title}>Redefinir senha</Text>
          <View style={styles.textContainer}>
            <View style={styles.inputContainer}>
              <Icon name="lock-outline" size={24} color="#1E1E1E" />
              <TextInput
                style={styles.input}
                placeholder="Nova senha"
                placeholderTextColor="#363636"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock-outline" size={24} color="#1E1E1E" />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#363636"
                secureTextEntry={!confirmPasswordVisible}
              />
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                <Icon
                  name={
                    confirmPasswordVisible ? "eye-off-outline" : "eye-outline"
                  }
                  size={24}
                  color="#1E1E1E"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={navigation.goBack}
          >
            <Text style={styles.submitButtonText}>Pronto</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E8FD", // fundo da tela
  },

  containerImagens: {
    alignItems: "center",
    marginBottom: 12,
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
  logo: {
    width: 150,
    height: 50,
    marginTop: 1,
    resizeMode: "contain",
  },
  illustration: {
    width: "80%",
    height: 170,
    resizeMode: "contain",
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 50,
    fontFamily: "Poppins_400Regular",
  },
  title2: {
    fontSize: 18,
    color: "#F67A49",
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#FFF",
    marginBottom: 10,
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
  submitButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFB201",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
backgroundImage:{
   position:'absolute',
   top :0,
   left :0,
   right :0,
   bottom :0,
},
});

export default RedefinirScreen;