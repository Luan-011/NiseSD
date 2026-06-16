import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import EmotionButton from "./EmotionButton";
import PrimaryButton from "./PrimarryButton";
import SecondaryButton from "./SecundaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponentVoltar from "./assets/SetaBack";

// Importação vinda do arquivo de serviço para limpar o ciclo
import { Avaliacoes } from "./userService";

interface Emotion {
  name: string;
  emoji: string;
}

const DailyEvaluationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const emotions: Emotion[] = [
    { name: "Felicidade", emoji: "😊" },
    { name: "Calma", emoji: "😌" },
    { name: "Desânimo", emoji: "😔" },
    { name: "Estresse", emoji: "😣" },
    { name: "Nervosismo", emoji: "😨" },
    { name: "Tristeza", emoji: "😢" },
    { name: "Ansiedade", emoji: "😟" },
    { name: "Antipatia", emoji: "😒" },
  ];

  const confirm = () => {
    Alert.alert(
      "Deseja voltar?",
      "Todos os dados serão perdidos.",
      [
        {
          text: "Não",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => navigation.navigate("home"),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const [buttonDia, setButtonDia] = useState("");
  const [buttonCrise, setButtonCrise] = useState("");
  const [acontecimentos, setAcontecimentos] = useState("");
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  function registrar() {
    if (buttonDia === "" || buttonCrise === "") {
      Alert.alert('Erro', "Preencha todos os campos!");
    } else {
      Avaliacoes.push({
        id: Avaliacoes.length,
        classificacao: buttonDia,
        teveCrise: buttonCrise === "sim",
        acontecimentos: acontecimentos,
        emotions: selectedEmotions,
      });
      Alert.alert("Salvo!", "Registros salvos em Meus Registros.");
      navigation.goBack();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E3ECFF" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <TouchableOpacity onPress={confirm}>
          <SvgComponentVoltar />
        </TouchableOpacity>

        <Text style={styles.title}>Avaliação diária</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            O que mais esteve presente em seu dia?
          </Text>
          <View style={styles.emotionsContainer}>
            {emotions.map((emotion) => (
              <EmotionButton
                key={emotion.name}
                name={emotion.name}
                emoji={emotion.emoji}
                handlePress={() =>
                  setSelectedEmotions((prev) => [...prev, emotion])
                }
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Entre as opções abaixo, como classificaria seu dia?
          </Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              onPress={() => setButtonDia("Ruim")}
              style={[
                styles.optionButton,
                {
                  backgroundColor: buttonDia === "Ruim" ? "#F67A49" : "#ffffff",
                  borderWidth: buttonDia === "Ruim" ? 0 : 1,
                },
              ]}
            >
              <Text style={{ color: buttonDia === "Ruim" ? "#fff" : "#000" }}>Ruim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setButtonDia("Neutro")}
              style={[
                styles.optionButton,
                {
                  backgroundColor: buttonDia === "Neutro" ? "#FFD980" : "#ffffff",
                  borderWidth: buttonDia === "Neutro" ? 0 : 1,
                },
              ]}
            >
              <Text style={{ color: "#000" }}>Neutro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setButtonDia("Bom")}
              style={[
                styles.optionButton,
                {
                  backgroundColor: buttonDia === "Bom" ? "#8C91FD" : "#ffffff",
                  borderWidth: buttonDia === "Bom" ? 0 : 1,
                },
              ]}
            >
              <Text style={{ color: buttonDia === "Bom" ? "#fff" : "#000" }}>Bom</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Como foi seu dia?</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="..."
            value={acontecimentos}
            onChangeText={setAcontecimentos}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Você teve alguma crise?</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              onPress={() => setButtonCrise("sim")}
              style={[
                styles.optionButton,
                {
                  backgroundColor: buttonCrise === "sim" ? "#F67A49" : "#ffffff",
                  borderWidth: buttonCrise === "sim" ? 0 : 1,
                },
              ]}
            >
              <Text style={{ color: buttonCrise === "sim" ? "#fff" : "#000" }}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setButtonCrise("nao")}
              style={[
                styles.optionButton,
                {
                  backgroundColor: buttonCrise === "nao" ? "#8C91FD" : "#ffffff",
                  borderWidth: buttonCrise === "nao" ? 0 : 1,
                },
              ]}
            >
              <Text style={{ color: buttonCrise === "nao" ? "#fff" : "#000" }}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🌟 CONTAINER DE BOTÕES ATUALIZADO: Alinhamento limpo e sem esmagamento */}
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Registrar" onPress={registrar} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#E3ECFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1E1E1E",
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1E1E1E",
  },
  emotionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: "#000",
    width: "30%",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 80,
    textAlignVertical: "top",
    color: "#000",
  },
  // 🌟 ESTILOS REORGANIZADOS: 
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribui os botões nativamente mantendo o tamanho original deles
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    width: "100%",
  }
});

export default DailyEvaluationScreen;