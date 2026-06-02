import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";

type RootStackParamList = {
  Tela: undefined;
  DailyEvaluationScreen: undefined;
};

const CadCriar: React.FC<RootStackParamList> = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [selected, setSelected] = useState<"profissional" | "paciente" | null>(
    null
  );

  const handleSelect = (type: "profissional" | "paciente") => {
    setSelected(type);
  };

  const handleContinue = () => {
    if (selected === "profissional") {
      navigation.navigate("Cadastro profissional");
    } else if (selected === "paciente") {
      navigation.navigate("Cadastro paciente");
    }
  };

  return (
    <ImageBackground
      source={require("./assets/usuarios.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.containerHeades}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgComponentVoltar />
        </TouchableOpacity>
        <View style={styles.logo}>
          <SvgComponentLogoAzulInicio />
          <Text style={styles.headerText}>
            Antes de criarmos a sua conta, precisamos que escolha uma das duas
            opções abaixo
          </Text>
        </View>
      </View>
      <View>
        <View style={{alignItems:'center', marginBottom: 60}}>
          <Text style={styles.contentTitle}>
            Qual tipo de usuário você será?
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[
                styles.button,
                selected === "paciente" && styles.selectedButton,
              ]}
              onPress={() => handleSelect("profissional")}
            >
              <Image
                source={require("./assets/profissional.png")}
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Profissional</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selected === "profissional" && styles.selectedButton,
              ]}
              onPress={() => handleSelect("paciente")}
            >
              <Image
                source={require("./assets/paciente.png")}
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Paciente</Text>
            </TouchableOpacity>
          </View>
          {selected && (
            <View style={styles.continueButtonContainer}>
              <TouchableOpacity onPress={() => handleContinue()} style={[styles.styleButton]}>
                <Text style={{fontSize: 24}}>Continuar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4ff",
  },

  styleButton:{
    borderRadius: 50,
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },

  containerHeades: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 40, // Padding added to avoid overlap with the status bar
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: "#FFD098",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    marginTop: '-5%',
    marginLeft: 20,
    alignItems:'center',
    height: 150
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    height: '50%',
    width: 300,
    marginTop: '5%'
  },
  content: {
    flex: 1,
    backgroundColor: "#4a5bf3",
    padding: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
  },
  contentTitle: {
    marginBottom: 30,
    fontSize: 22,
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 228,
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: '38%',
    marginHorizontal: 10,
  },
  selectedButton: {
    opacity: 0.5,
    width: '38%',

  },
  icon: {
    width: 60,
    height:60,
    resizeMode: "contain",
  },
  buttonText: {
    marginTop: 10,
    color: "#4a5bf3",
    fontSize: 16,
  },
  continueButtonContainer: {
    marginTop: -145,
    width:'100%',
    alignItems: 'center',
    marginBottom: 100
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CadCriar;
