import { StackNavigationProp } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import SplashScreen from "./Splas";
import DailyEvaluationScreen from "./DailyEvaluationScreen";
import SvgComponentMental from "./assets/MentalHealthBro";
import SvgComponentLogoBranca from "./assets/LogoNiseBranca";
import SvgComponentVoltar from "./assets/SetaBack";

type RootStackParamList = {
  DailyEvaluationScreen: undefined;
};

type WelcomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "DailyEvaluationScreen">;
};

const { Navigator, Screen } = createNativeStackNavigator();

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleStartPress = () => {
    // Navegar para a próxima tela ou executar qualquer ação necessária
    navigation.navigate("Timer");
  };

  return (
    <ImageBackground 
    source={require("./assets/imagem_med.png")}
    style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SvgComponentVoltar />
        </TouchableOpacity>

        <SvgComponentLogoBranca />

        <View style={styles.content}>
          <Text style={styles.welcomeText}>BEM-VINDO!</Text>
          <Text style={styles.descriptionText}>
            Aqui você fará exercícios de meditação.
          </Text>

          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartPress}
          >
            <Text style={styles.startButtonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="DailyEvaluationScreen"
          component={DailyEvaluationScreen}
        />
        <Screen name="Welcome" component={WelcomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
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
    top: 40,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    position: "absolute",
    top: 20,
    width: 80, // Adjust size as needed
    height: 80, // Adjust size as needed
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    alignItems: "center",
    width: "90%",
  },
  welcomeText: {
    marginTop: 120, // Adjust as needed to ensure it's below the logo
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD098",
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight:"bold",
    color: "#FFB201",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  startButton: {
    marginTop: 30,
    backgroundColor: "#FFD098",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  startButtonText: {
    color: "#3F3D56",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
