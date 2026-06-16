import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// 🌟 IMPORTAÇÕES DOS SEUS COMPONENTES E DA API
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentMeninaEntrar from "./assets/MeninaFelizEntrar";
import { loginApiCall } from "./back/auth.service"; // Ajuste o caminho se sua pasta 'back' estiver em outro nível

interface EntrarScreenProps {
  navigation: NavigationProp<any>;
  setIsLogged: () => void;
}

const EntrarScreen: React.FC<EntrarScreenProps> = ({ navigation, setIsLogged }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  // 🌟 ESTADOS ADICIONADOS: Para capturar o que o usuário digita
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // 🌟 FUNÇÃO DE LOGIN ADAPTADA PARA A SUA API REAL
  const handleLogin = async () => {
    if (email.trim() === "" || senha.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    try {
      setLoading(true);
      // Dispara a requisição para o endpoint do Ngrok
// ✅ CORREÇÃO: Email primeiro, depois Senha
const resultado = await loginApiCall(email, senha);
      // Se a API retornar dados válidos (geralmente um token ou os dados do usuário)
      if (resultado) {
        if (setIsLogged) {
          setIsLogged(); // Destrava o App.tsx e te joga para a Home real!
        }
      } else {
        Alert.alert("Erro de Autenticação", "Não foi possível realizar o login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.log("Erro no fluxo de login:", error);
      Alert.alert("Erro de Conexão", "Falha ao comunicar com o servidor.");
    } finally {
      setLoading(false);
    }
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
        source={require("./assets/entrar.png")}
        style={styles.backgroundImage}
      >
        <SafeAreaView>
          <View style={styles.containerImagensVoltar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
                  autoCapitalize="none"
                  value={email}          // 🌟 Vinculado ao estado
                  onChangeText={setEmail} // 🌟 Atualiza o estado
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={24} color="#1E1E1E" />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  placeholderTextColor="#A3A3A3"
                  secureTextEntry={!passwordVisible}
                  value={senha}          // 🌟 Vinculado ao estado
                  onChangeText={setSenha} // 🌟 Atualiza o estado
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
          
          <TouchableOpacity 
            style={[styles.submitButton, loading && { opacity: 0.7 }]} 
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.submitButtonText}>
              {loading ? "Carregando..." : "Entrar"}
            </Text>
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