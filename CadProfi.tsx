import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import SvgComponentVoltar from "./assets/SetaBack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import SvgComponentMeninaEntrar from "./assets/MeninaFelizEntrar";
import { reloadAppAsync } from "expo";


function CadProfi(){
  const navigation = useNavigation<NavigationProp<any>>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { height } = useWindowDimensions();
  const [name, setName] = React.useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("./assets/entrar.png")}
      style={[styles.backgroundImage, { height: height * 1.05 }]}
    >
      <SafeAreaView>
        <View style={[styles.containerImagensVoltar]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <SvgComponentVoltar />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            marginLeft: "32%",
            height: height * 0.4,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: height * 0.4,
              marginTop: '30%'
            }}
          >
            <SvgComponentLogoAzulInicio />
            <SvgComponentMeninaEntrar />
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.title}>Criar</Text>

        <View style={styles.inputContainer}>
          <Icon name="pencil-outline" size={24} color="#1E1E1E" />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            placeholderTextColor="#A3A3A3"
          />
        </View>
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
            placeholder="Senha"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
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

        <View style={styles.inputContainer}>
          <Icon name="card-text-outline" size={24} color="#1E1E1E" />
          <TextInput
            style={styles.input}
            placeholder="CRP"
            placeholderTextColor="#A3A3A3"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.reset({
          index: 0,
          routes:[{name: "inicio"}]
        })}>
          <Text style={styles.footerText}>
            Já tem uma conta? <Text style={styles.linkText}>Entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: height * 0.07, // Dynamic height based on screen size
    backgroundColor: "#FFF",
    marginBottom: height * 0.015, // Dynamic margin based on screen size
    paddingHorizontal: width * 0.02, // Dynamic padding based on screen size
    borderRadius: width * 0.02, // Dynamic border radius based on screen size
    borderWidth: 1,
    borderColor: "#DDD",
  },

  containerImagensVoltar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "0%",
    marginTop: "-1%",
    marginRight: width * 0.32,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    marginTop: "86%",
    width: "100%",
    position: "absolute",
  },
  backButton: {
    position: "absolute",
    top: 35,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#FFB201",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight:"medium"
  },
  footerText: {
    marginTop: 20,
    color: "white",
  },
  linkText: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default CadProfi;
