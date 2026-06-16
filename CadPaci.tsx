import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  useWindowDimensions,
  Dimensions,
  Alert,
  ActivityIndicator, // Adicionado para mostrar que está carregando
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponentMeninaEntrar from "./assets/MeninaFelizEntrar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { editarNome } from "./userService"; // Importa a função para editar o nome do usuário
import axios from "axios";

function CadPaci() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { height } = useWindowDimensions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  
  const validarEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    // 1. Validações Locais
    if (name.trim() === "") {
      Alert.alert("Erro", "Coloque seu Nome!");
      return;
    } 
    if (email.trim() === "") {
      Alert.alert("Erro", "Coloque seu Email!");
      return;
    } 
    if (password.trim() === "") {
      Alert.alert("Erro", "Coloque sua Senha!");
      return;
    } 
    if (!validarEmail(email)) {
      Alert.alert("Erro", "Email inválido!");
      return;
    }

    // Ativa o carregamento para travar cliques duplos
    setLoading(true);

    try {
      // ⚠️ COLOQUE SEU IP LOCAL AQUI (Mantenha a porta 3000 do NestJS)
      const IP_COMPUTADOR = "192.168.X.X"; 

      // 2. Faz a chamada ao Backend de forma síncrona dentro do bloco async
      const resposta = await axios.post(`http://${IP_COMPUTADOR}:3000/auth/register`, {
        nome: name,
        email: email,
        password: password,
      });

      // 3. SE CHEGOU AQUI, DEU CERTO NO BACKEND
      setLoading(false);
      Alert.alert("Sucesso", "Sua conta foi criada com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            editarNome(name);
            navigation.navigate('home');
          }
        }
      ]);

    } catch (error: any) {
      setLoading(false);
      console.log("Erro na integração:", error);
      
      // Captura a mensagem do NestJS (ex: "E-mail já cadastrado") se houver
      const mensagemErro = error.response?.data?.message || "Não foi possível conectar ao servidor backend. Verifique se o servidor está rodando e se o IP está correto.";
      Alert.alert("Erro no Cadastro", String(mensagemErro));
    }
  };

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
            onChangeText={setName}
            placeholderTextColor="#A3A3A3"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="email-outline" size={24} color="#1E1E1E" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#A3A3A3"
            keyboardType="email-address"
            autoCapitalize="none"
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
            autoCapitalize="none"
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

        {/* Botão muda para um indicador de carregamento enquanto o Axios processa */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleSubmit()}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "inicio" }],
            })
          }
        >
          <Text style={styles.footerText}>
            Já tem uma conta? <Text style={styles.linkText}>Entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: Dimensions.get("window").height * 0.07,
    backgroundColor: "#FFF",
    marginBottom: Dimensions.get("window").height * 0.015,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
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
    top: 10,
    left: 20,
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
    color: "#000",
  },
  button: {
    backgroundColor: "#FFB201",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
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

export default CadPaci;