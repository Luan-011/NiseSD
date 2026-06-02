import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Importação de Assets
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";

// Se as avaliações ainda estiverem no App.tsx, aponte para lá:
import { Avaliacoes } from "./App"; 

function TelaDeTestes() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("./assets/diario_background.png")}
      style={styles.background}
    >
      <View style={styles.container1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ alignSelf: "stretch" }}
          contentContainerStyle={{
            gap: 20,
            paddingTop: top + 10,
            paddingBottom: bottom + 30,
          }}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <SvgComponentVoltar />
            </TouchableOpacity>
            <View style={styles.containerLogo}>
              <SvgComponentLogoAzulInicio />
            </View>
            <View style={{ width: 40 }} /> 
          </View>

          {/* Lista de Avaliações */}
          <View style={styles.content}>
            {Avaliacoes && Avaliacoes.length > 0 ? (
              Avaliacoes.map((item: any, index: number) => (
                <View key={`avaliacao-${index}`} style={styles.itens}>
                  <View style={styles.row}>
                    <Text style={styles.textPrin}>Teve alguma crise?: </Text>
                    <Text>{item.teveCrise ? "Sim" : "Não"}</Text>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.textPrin}>Principais emoções: </Text>
                    <View style={styles.emotionsContainer}>
                      {item.emotions && item.emotions.map((emotion: any, eIndex: number) => (
                        <Text key={`emotion-${index}-${eIndex}`} style={styles.emotionTag}>
                          {emotion.emoji} {emotion.name}
                        </Text>
                      ))}
                    </View>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.textPrin}>Classificação do dia: </Text>
                    <Text>{item.classificacao}</Text>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.textPrin}>Como foi seu dia: </Text>
                    <Text style={styles.acontecimentosText}>{item.acontecimentos}</Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.descriptionText}>Nenhuma avaliação registrada ainda.</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container1: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FFD098",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo: {
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
  },
  itens: {
    borderRadius: 15,
    borderColor: "#FFB201",
    borderWidth: 2,
    gap: 8,
    padding: 15,
    backgroundColor: "#ffffffc8",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginTop: 5,
  },
  textPrin: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3F3695",
  },
  emotionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 5,
  },
  emotionTag: {
    backgroundColor: "#E8EAF6",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 13,
  },
  acontecimentosText: {
    marginTop: 2,
    color: "#333",
    fontStyle: "italic",
  },
  emptyState: {
    alignItems: "center",
    marginTop: 50,
  },
  descriptionText: {
    fontSize: 16,
    color: "#3F3D56",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TelaDeTestes;