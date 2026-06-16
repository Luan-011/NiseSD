import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
// 🌟 CORREÇÃO 1: Ajustado o caminho do import baseado na raiz do seu projeto
import { getResumoIA } from "./back/ia.service"; 

type ParamList = {
  FeedbackIA: {
    idPaciente: string;
  };
};

const FeedbackIAScreen: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, "FeedbackIA">>();
  const navigation = useNavigation();
  const { idPaciente } = route.params;

  const [loading, setLoading] = useState(true);
  const [resumo, setResumo] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const buscarDadosIA = async () => {
      try {
        setLoading(true);
        setErro(false);
        const dados = await getResumoIA(idPaciente);
        
        console.log("DADOS VINDOS DA IA:", dados); 

        // 🌟 CORREÇÃO 2: Puxando o campo exato 'mensagem' que seu NestJS retorna
        if (dados && typeof dados === "object") {
          setResumo(dados.mensagem || dados.resumo || "Sem resposta do servidor.");
        } else if (typeof dados === "string" && dados.trim() !== "") {
          setResumo(dados);
        } else {
          setResumo("A análise emocional está sendo processada pela Nise IA.");
        }
      } catch (error) {
        console.error("Erro na tela da IA:", error);
        setErro(true);
      } finally {
        setLoading(false);
      }
    };

    buscarDadosIA();
  }, [idPaciente]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header da Tela */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nise Inteligência Artificial</Text>
        <View style={styles.spacer} />
      </View>

      {/* Conteúdo principal */}
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeBox}>
          <Icon name="sparkles" size={28} color="#FFB201" />
          <Text style={styles.welcomeText}>
            Análise computacional baseada nos seus últimos registros do diário emocional.
          </Text>
        </View>

        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#FFB201" />
            <Text style={styles.loadingText}>A IA da Nise está analisando seus dados...</Text>
          </View>
        ) : erro ? (
          <View style={styles.centerContainer}>
            <Icon name="alert-circle-outline" size={48} color="#FF5252" />
            <Text style={styles.errorText}>Não foi possível carregar a análise. Verifique a conexão com o servidor.</Text>
          </View>
        ) : (
          <View style={styles.reportCard}>
            <View style={styles.reportHeader}>
              <Icon name="file-document-edit-outline" size={22} color="#FFF" />
              <Text style={styles.reportHeaderTitle}>Relatório de Bem-Estar</Text>
            </View>
            <View style={styles.reportContent}>
              <Text style={styles.reportText}>{resumo}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  spacer: {
    width: 24,
  },
  container: {
    padding: 20,
  },
  welcomeBox: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#FFB201",
  },
  welcomeText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 13,
    color: "#4A5568",
    lineHeight: 18,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  loadingText: {
    marginTop: 14,
    color: "#718096",
    fontSize: 14,
  },
  errorText: {
    marginTop: 14,
    color: "#718096",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  reportCard: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  reportHeader: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    padding: 14,
    alignItems: "center",
  },
  reportHeaderTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 8,
  },
  reportContent: {
    padding: 18,
  },
  reportText: {
    fontSize: 15,
  color: "#2D3748",
  lineHeight: 24,       
  textAlign: "left",    
  },
});

export default FeedbackIAScreen;