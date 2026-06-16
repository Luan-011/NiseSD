// userService.ts

// Dados do Usuário
let usuarioLogado = { nome: 'Visitante' };

export const editarNome = (nome: string) => {
  usuarioLogado = { nome };
  console.log("Nome do usuário atualizado:", usuarioLogado.nome);
};

export const obterUsuario = () => {
  return usuarioLogado;
};

// --- NOVAS EXPORTAÇÕES PARA AS TELAS DE AVALIAÇÃO E TESTES ---

// Array que armazenará os registros da Avaliação Diária
export let Avaliacoes: any[] = [];

// Array para a Rede de Apoio (caso você use em outras telas)
export let RedeDeApoioLista: any[] = [];