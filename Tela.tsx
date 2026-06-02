import { StackNavigationProp } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";

import RegisterSection from "./RegisterSection";
import ExerciseCard from "./ExerciseCard";
import WelcomeScreen from "./WelcomeScreen";
import DailyEvaluationScreen from "./DailyEvaluationScreen";
import SplashScreen from "./Splas";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponentDiario from "./assets/diario";
import SvgComponentRedeDeApoio from "./assets/RedeDeApoio";
import SvgComponentMeditacao from "./assets/Meditacao";
import SvgComponentOndasSonoras from "./assets/OndasSonoras";
import SvgComponentRespiracao from "./assets/Respiracao";
import SvgComponentMindFulness from "./assets/Mindfulness";
import SvgComponentPsicofobia from "./assets/LerArtigos";
import SvgComponentRegistros from "./assets/Registros";

// Definindo o tipo para as props de navegação
type RootStackParamList = {
  Welcome: undefined;
  DailyEvaluationScreen: undefined;
};

type TelaProp = {
  navigation: StackNavigationProp<RootStackParamList, "Welcome">;
};

const { Navigator, Screen } = createNativeStackNavigator();

function Tela1() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleMeditation = () => {
    navigation.navigate("Welcome");
  };

  const handleSearchPress = () => {
    navigation.navigate("LerArtigos");
  };

  const handleSoundWavesPress = () => {
    navigation.navigate("OndasSonoras");
  };

  const handleBreathingPress = () => {
    navigation.navigate("Respiracao");
  };
  const handleDiario = () => {
    navigation.navigate("Diario");
  };
  const handleRedeDeApoio = () => {
    navigation.navigate("RedeDeApoio");
  };
  const handleMindFuness = () => {
    navigation.navigate("MindFulness");
  };

  const handleTelaTeste = () => {
    navigation.navigate("TelaDeTestes");
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <RegisterSection />

        <View style={styles.mainSection}></View>

        <View style={styles.exerciseSection}>
          <Text style={styles.exerciseTitle}>Para exercitar</Text>
          <View style={styles.exerciseCards}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={styles.card} onPress={handleRedeDeApoio}>
                <SvgComponentRedeDeApoio />
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={handleMeditation}>
                <SvgComponentMeditacao />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleBreathingPress}
              >
                <SvgComponentRespiracao />
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={handleMindFuness}>
                <SvgComponentMindFulness />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <TouchableOpacity onPress={handleSearchPress} style={styles.searchBar}>
          <SvgComponentPsicofobia />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTelaTeste} style={styles.card}>
          <SvgComponentRegistros />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tela: React.FC<TelaProp> = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Tela} />
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="DailyEvaluation" component={DailyEvaluationScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#ffffff", // Background color adjusted
  },

  card: {
    width: 140,
    height: 160,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  mainSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  exerciseSection: {
    marginBottom: 20,
    justifyContent: "space-around",
  },
  exerciseTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  exerciseCards: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  searchBar: {
    alignItems: "center",
    marginBottom: 20,
  },
  searchImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
});

export default Tela1;
