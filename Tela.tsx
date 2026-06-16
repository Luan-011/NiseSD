import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Ícone para o card da IA

// Importação de Componentes Locais
import RegisterSection from "./RegisterSection";

// Importação de Assets SVG
import SvgComponentRedeDeApoio from "./assets/RedeDeApoio";
import SvgComponentMeditacao from "./assets/Meditacao";
import SvgComponentRespiracao from "./assets/Respiracao";
import SvgComponentMindFulness from "./assets/Mindfulness";
import SvgComponentPsicofobia from "./assets/LerArtigos";
import SvgComponentRegistros from "./assets/Registros";

type RootStackParamList = {
  Welcome: undefined;
  DailyEvaluationScreen: undefined;
};

function Tela1() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleMeditation = () => {
    navigation.navigate("Welcome");
  };

  const handleSearchPress = () => {
    navigation.navigate("LerArtigos");
  };

  const handleBreathingPress = () => {
    navigation.navigate("Respiracao");
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

  // 🌟 NOVO: Abre a tela da IA passando o ID do paciente de teste
  const handleIA = () => {
    navigation.navigate("FeedbackIA", {
      idPaciente: "85ac60a9-4c6a-4e41-bf15-a16d71f4a3cd",
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <RegisterSection />

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

              <TouchableOpacity style={styles.card} onPress={handleBreathingPress}>
                <SvgComponentRespiracao />
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={handleMindFuness}>
                <SvgComponentMindFulness />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        {/* 🌟 NOVO CARD: Chamada estilizada para a inteligência artificial Nise IA */}
        <TouchableOpacity style={styles.iaCard} onPress={handleIA}>
          <View style={styles.iaContent}>
            <Icon name="brain" size={32} color="#1E1E1E" style={styles.iaIcon} />
            <View style={styles.iaTextContainer}>
              <Text style={styles.iaTitle}>Nise Inteligência Artificial</Text>
              <Text style={styles.iaSubtitle}>Veja a análise do seu bem-estar emocional</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#1E1E1E" />
          </View>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#ffffff",
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
  exerciseSection: {
    marginBottom: 20,
    justifyContent: "space-around",
  },
  exerciseTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  exerciseCards: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  searchBar: {
    alignItems: "center",
    marginBottom: 20,
  },
  // 🌟 ESTILOS DO NOVO CARD DA IA (Combinando com o design do botão amarelo do login)
  iaCard: {
    width: "100%",
    backgroundColor: "#FFB201",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iaContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iaIcon: {
    marginRight: 12,
  },
  iaTextContainer: {
    flex: 1,
  },
  iaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 2,
  },
  iaSubtitle: {
    fontSize: 12,
    color: "#4A4A4A",
  },
});

export default Tela1;