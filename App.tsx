import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponentMeninaEntrar from "./assets/MeninaFelizEntrar";
import DailyEvaluationScreen from "./DailyEvaluationScreen";
import WelcomeScreen from "./WelcomeScreen";
import RedefinirScreen from "./Redefinir";
import Timer from "./Timer";
import Diario from "./Diario";
import RedeDeApoio from "./RedeDeApoio";
import OndasSonoras from "./OndasSonoras";
import Respiracao from "./Respiracao";
import MindFulness from "./MindFulness";
import LerArtigos from "./LerArtigos";
import MindFulnessSobre from "./MindFulnessSobre";
import MindFulnessPratica from "./MindFulnessPratica";
import TimerMindFulness from "./TimerMindFulness";
import CadCriar from "./CadCriar";
import CadPaci from "./CadPaci";
import CadProfi from "./CadProfi";
import TelaLerArtigos from "./TelaLerArtigos";
import ConfigPaciente from "./ConfigPaciente";
import TelaDeTestes from "./TelaDeTestes";
import Tela1 from "./Tela";
import { StatusBar } from "expo-status-bar";
import RespiracaoTipos from "./RespiracaoTipos";
import RespiracaoDiafragmatica from "./RespiracaoDiafragmatica";
import RedeDeApoioPessoas from "./RedeDeApoioPessoas";

// 1. IMPORTAÇÃO DA SUA SPLASH SCREEN
// (Caso o arquivo esteja em outra pasta, ajuste o caminho './SplashScreen')
import SplashScreen from "./Splas";

const { Navigator, Screen } = createNativeStackNavigator();

// Exportações de estado global
export const Avaliacoes: any[] = [];
export const RedeDeApoioLista: any[] = [];
export let Usuario = { nome: 'João' };

export function editarNome(nome: string = 'Luan') {
  Usuario = { nome };
}

// Componente de Login corrigido com tipagem 'any' para evitar conflitos no Navigation
const EntrarScreen = ({ setIsLogged }: any) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<any>>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (email === "") {
      Alert.alert("Coloque seu Email!");
    } else if (password === "") {
      Alert.alert("Coloque sua Senha!");
    } else if (!validarEmail(email)) {
      Alert.alert("Email inválido!");
    } else {
      setIsLogged?.(); // Ativa o estado de logado
      navigation.navigate("home");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("./assets/entrar.png")}
        style={[styles.backgroundImage, { height: height * 1.05 }]}
      >
        <SafeAreaView>
          <View style={styles.containerImagensVoltar}>
            <View style={{ width: 20 }} />
            <SvgComponentLogoAzulInicio />
          </View>
        </SafeAreaView>

        <View style={styles.inner}>
          <View style={styles.containerImagens}>
            <SvgComponentMeninaEntrar />
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
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={24} color="#1E1E1E" />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  placeholderTextColor="#A3A3A3"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Icon
                    name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#1E1E1E"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.link}>
              <TouchableOpacity onPress={() => navigation.navigate("Redefinir")}>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.link2}>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro criar")}>
              <Text style={styles.signUpText}>Não tem uma conta ainda? Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#E5E7FF" />
      <Navigator screenOptions={{ headerShown: false }}>
        
        {/* 2. ADICIONADA COMO A PRIMEIRA TELA DO NAVIGATOR */}
        <Screen name="Splash" component={SplashScreen} />

        {/* Mantendo um mapeamento secundário para 'home' caso queira usar como ponto alternativo */}
        <Screen name="home" component={Tela1} />

        {/* Usando Render Callback para passar props sem erro de tipo */}
        <Screen name="inicio">
          {(props) => <EntrarScreen {...props} setIsLogged={() => setIsLogged(true)} />}
        </Screen>

        <Screen name="Redefinir" component={RedefinirScreen} />
        <Screen name="RespiracaoTipos" component={RespiracaoTipos} />

        <Screen name="Cadastro criar">
          {(props: any) => <CadCriar {...props} />}
        </Screen>

        <Screen name="Cadastro paciente" component={CadPaci} />
        <Screen name="Cadastro profissional" component={CadProfi} />
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="DailyEvaluation" component={DailyEvaluationScreen} />
        <Screen name="Timer" component={Timer} />
        <Screen name="Diario" component={Diario} />
        <Screen name="RedeDeApoio" component={RedeDeApoio} />
        <Screen name="OndasSonoras" component={OndasSonoras} />
        <Screen name="Respiracao" component={Respiracao} />
        <Screen name="MindFulness" component={MindFulness} />
        <Screen name="LerArtigos" component={LerArtigos} />
        <Screen name="MindFulnessSobre" component={MindFulnessSobre} />
        <Screen name="MindFulnessPratica" component={MindFulnessPratica} />
        <Screen name="TimerMindFulness" component={TimerMindFulness} />
        <Screen name="TelaLerArtigos" component={TelaLerArtigos} />
        
        <Screen name="EntrarScreen">
          {(props) => <EntrarScreen {...props} setIsLogged={() => setIsLogged(true)} />}
        </Screen>
        
        <Screen name="ConfigPaciente" component={ConfigPaciente} />
        <Screen name="TelaDeTestes" component={TelaDeTestes} />
        <Screen name="RedeDeApoioPessoas" component={RedeDeApoioPessoas} />
        <Screen name="RespiracaoDiafragmatica" component={RespiracaoDiafragmatica} />
      </Navigator>
    </NavigationContainer>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerImagensVoltar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: width * 0.32,
    marginLeft: "5%",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerImagens: { alignItems: "center" },
  title: {
    fontSize: width * 0.06,
    color: "#ffffff",
    marginBottom: height * 0.02,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: height * 0.01,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: height * 0.07,
    backgroundColor: "#FFF",
    marginBottom: height * 0.015,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  input: { flex: 1, height: "100%", marginLeft: 10 },
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
  },
  signUpText: { color: "#D8DBFF", textDecorationLine: "underline" },
  backgroundImage: { flex: 1, justifyContent: "center" },
  inputs: { width: "100%", alignItems: "center", paddingBottom: 20 },
  link: { flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 5 },
  link2: { flexDirection: "row-reverse", justifyContent: "center", width: "100%", marginTop: 10 },
});

export default App;