import { StackNavigationProp } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SvgComponent from "./assets/SVG_Livros";
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgComponentComponente5 from "./assets/Componente5";
import SvgComponentNome from "./assets/CoisoDoNome";
import SvgComponentLogoHeader from "./assets/LogoHeader";
import SvgComponentConfig from "./assets/Config";

// ⚠️ CORREÇÃO DA LINHA 24: Puxa o usuário do serviço isolado e limpa o looping!
import { obterUsuario } from "./userService";

type RootStackParamList = {
  Welcome: undefined;
  DailyEvaluationScreen: undefined;
};

type DailyEvaluationProp = {
  navigation: StackNavigationProp<RootStackParamList, "DailyEvaluationScreen">;
};

const { Navigator, Screen } = createNativeStackNavigator();

const RegisterSection: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  // Busca os dados do usuário do serviço isolado
  const usuario = obterUsuario();

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.usuario}>
          <ImageBackground
            style={styles.coisaDoNome}
            source={require("./assets/coisaDoNome.png")}
          >
            <Text style={styles.username}>{usuario.nome}</Text>
          </ImageBackground>
        </View>
        <View style={{ marginRight: '35%' }}>
          <SvgComponentLogoHeader />
        </View>
      </View>

      <Text style={styles.greeting}>Olá, João!</Text>

      <View
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SvgComponentComponente5 />
        <View style={styles.container}>
          <View style={styles.containerReg}>
            <Text style={styles.text}>Que tal registrarmos o seu dia?</Text>
            <TouchableOpacity
              style={styles.registrar}
              onPress={() => navigation.navigate("DailyEvaluation")}
            >
              <Text style={styles.registrarText}>Registrar</Text>
            </TouchableOpacity>
          </View>
          {/* CORRIGIDO: Removido o source={} que estava injetando texto solto */}
          <SvgComponent />
        </View>
      </View>
    </View>
  );
};

const DailyEvaluationScreen: React.FC<DailyEvaluationProp> = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="DailyEvaluationScreen"
          component={DailyEvaluationScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  coisaDoNome: {
    height: 34,
    width: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  registrar: {
    marginLeft: 15,
    backgroundColor: "#fbb03b",
    width: 160,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    color: "#2F2E41",
    shadowColor: "black",
    elevation: 5,
  },
  registrarText: {
    fontWeight: "bold",
    color: "#2F2E41"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginTop: 4,
    marginLeft: 25,
  },
  logo: {
    width: 40,
    height: 40,
  },
  settingsIcon: {
    marginLeft: 10,
  },
  settingsImage: {
    width: 20,
    height: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3F4695",
  },
  background: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2F2E41",
    paddingLeft: 15,
    marginBottom: 10,
  },
  usuario: {
    backgroundColor: "#CBD0FF",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  containerReg: {
    flexDirection: "column",
  },
});

export default RegisterSection;