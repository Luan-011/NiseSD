import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import SvgComponentVoltar from "./assets/SetaBack";
import SvgComponentLogoAzulInicio from "./assets/LogoAzulInicio";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Contato {
  id: string;
  nome: string;
  relacao: string;
  contato: string;
}

function RedeDeApoioPessoas() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { top, bottom } = useSafeAreaInsets();

  const [contatos, setContatos] = useState<Contato[]>([
    { id: "1", nome: "Davi", relacao: "Amigo", contato: "Mensagem e ligação" },
    { id: "2", nome: "Dila", relacao: "Amigo", contato: "Mensagem e ligação" },
    { id: "3", nome: "Danilo", relacao: "Amigo", contato: "Mensagem e ligação" },
  ]);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [relacao, setRelacao] = useState("");
  // Inicializa a múltipla escolha com uma opção padrão
  const [contatoInfo, setContatoInfo] = useState("Mensagem e ligação");

  const adicionarContato = () => {
    if (!nome.trim() || !relacao.trim() || !contatoInfo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novoContato: Contato = {
      id: Date.now().toString(),
      nome,
      relacao,
      contato: contatoInfo,
    };

    setContatos([...contatos, novoContato]);
    
    setNome("");
    setRelacao("");
    setContatoInfo("Mensagem e ligação"); // Reseta para o padrão
    setModalVisivel(false);
  };

  const excluirContato = (id: string) => {
    setContatos(contatos.filter((item) => item.id !== id));
  };

  return (
    <ImageBackground
      source={require("./assets/rede-apoio.png")}
      style={styles.background}
    >
      <View style={styles.container1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ alignSelf: "stretch" }}
          contentContainerStyle={{
            gap: 20,
            paddingTop: top,
            paddingBottom: bottom + 30,
          }}
        >
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <SvgComponentVoltar />
            </TouchableOpacity>
            <View style={styles.containerLogo}>
              <SvgComponentLogoAzulInicio />
            </View>
          </View>

          {/* Renderização dos Contatos */}
          {contatos.map((item) => (
            <View key={item.id} style={styles.content}>
              <View style={styles.itens}>
                <TouchableOpacity 
                  style={styles.deleteButton} 
                  onPress={() => excluirContato(item.id)}
                >
                  <Text style={styles.deleteButtonText}>✕</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textPrin}>Nome da pessoa: </Text>
                  <Text>{item.nome}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textPrin}>Relação: </Text>
                  <Text>{item.relacao}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textPrin}>Contato: </Text>
                  <Text>{item.contato}</Text>
                </View>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setModalVisivel(true)}
          >
            <Text style={styles.startButtonText}>+</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Modal Customizado com Títulos e Múltipla Escolha */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Contato de Apoio</Text>
            
            {/* Campo: Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nome da pessoa:</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Maria Souza"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            {/* Campo: Relação */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Relação:</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Mãe, Amigo, Psicólogo"
                value={relacao}
                onChangeText={setRelacao}
              />
            </View>

            {/* Campo Múltipla Escolha: Contato */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Contato preferencial:</Text>
              
              <View style={styles.radioContainer}>
                {["Apenas Mensagem", "Apenas Ligação", "Mensagem e ligação"].map((opcao) => (
                  <TouchableOpacity
                    key={opcao}
                    style={[
                      styles.radioOption,
                      contatoInfo === opcao && styles.radioOptionSelected
                    ]}
                    onPress={() => setContatoInfo(opcao)}
                  >
                    <View style={[
                      styles.radioCircle,
                      contatoInfo === opcao && styles.radioCircleSelected
                    ]} />
                    <Text style={[
                      styles.radioText,
                      contatoInfo === opcao && styles.radioTextSelected
                    ]}>
                      {opcao}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Botões de Ação */}
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={adicionarContato}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingEnd: 115,
  },
  textPrin: {
    fontSize: 15,
    fontWeight: "bold",
  },
  itens: {
    position: 'relative',
    alignItems: "stretch",
    borderRadius: 15,
    borderColor: "#FFB201",
    borderWidth: 2,
    gap: 5,
    padding: 15,
    backgroundColor: "#ffffffc8",
  },
  containerLogo: {
    marginBottom: 10,
    marginTop: -5,
    marginLeft: -20,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FFD098",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: "#6246EA",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '30%',
    marginTop: 10,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: '#ff4d4d',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Estilos do Modal Modificados
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'stretch', // Alinha os filhos preenchendo a largura total
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6246EA',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3F3D56',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    fontSize: 15,
  },
  // Estilos da Múltipla Escolha (Radio Buttons)
  radioContainer: {
    gap: 8,
    marginTop: 4,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0eb',
  },
  radioOptionSelected: {
    backgroundColor: '#EFEBFF',
    borderColor: '#6246EA',
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#999999',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    borderColor: '#6246EA',
    backgroundColor: '#6246EA',
  },
  radioText: {
    fontSize: 14,
    color: '#333333',
  },
  radioTextSelected: {
    color: '#6246EA',
    fontWeight: 'bold',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap: 10,
  },
  modalButton: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  cancelButtonText: {
    color: '#333333',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#6246EA',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default RedeDeApoioPessoas;