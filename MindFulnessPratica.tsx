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

function MindFulnessPratica() {
  const navigation = useNavigation<NavigationProp<any>>();
  const handleTimer = () => {
    navigation.navigate("TimerMindFulness");
  };

  return (
    <ImageBackground
      source={require("./assets/Mindfulness4.png")}
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
          <View style={styles.textView}>
            <Text style={styles.welcomeText}>
              <Text style={{ fontWeight: "bold", color: "#3F3D56" }}>
                Concentre-se na sua respiração:
              </Text>{" "}
              Comece prestando atenção à sua respiração. Observe o ar entrando e
              saindo do seu corpo. Sinta o movimento do seu peito e abdômen.
            </Text>
            <Text style={styles.welcomeText}>
              <Text style={{ fontWeight: "bold", color: "#3F3D56" }}>
                Respire naturalmente:
              </Text>{" "}
              Não tente controlar a respiração. Deixe-a fluir naturalmente, como
              acontece no seu ritmo normal.
            </Text>
            <Text style={styles.welcomeText}>
              <Text style={{ fontWeight: "bold", color: "#3F3D56" }}>
                Note as distrações:
              </Text>{" "}
              É normal que a mente se distraia. Quando perceber que está
              pensando em outra coisa, gentilmente traga a sua atenção de volta
              para a respiração, sem se julgar.
            </Text>
            <Text style={styles.welcomeText}>
              <Text style={{ fontWeight: "bold", color: "#3F3D56" }}>
                Permaneça presente:
              </Text>{" "}
              Continue focando na sua respiração pelo tempo que achar
              confortável. Pode começar com 5 minutos e, gradualmente, aumentar
              a duração conforme se sentir mais à vontade com a prática.
            </Text>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={handleTimer}>
            <Text style={styles.startButtonText}>Contar tempo de prática</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textView: {
    backgroundColor: "#ffffffcc",
    width: "110%",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: '199%',
    marginBottom: '5%',
    borderColor: '#FFD980',
    borderWidth: 2,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
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
    width: "80%",
    justifyContent: "center",
    marginTop: 170,
    marginBottom: 340,
  },
  welcomeText: {
    fontSize: 15,
    color: "#555279",
    marginBottom: 18,
  },
  startButton: {
    backgroundColor: "#FFD980",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  startButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MindFulnessPratica;
