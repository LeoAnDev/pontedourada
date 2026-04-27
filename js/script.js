// js/script.js - Validação com SweetAlert2 (draggable + botão OK obrigatório)

// Dados de autenticação (simulação do banco de usuários)
const USUARIOS = [
    { email: "gestor@gestor.com", senha: "123456", nome: "Administrador", perfil: "GESTOR" },
    { email: "atendimento@atendimento.com", senha: "123456", nome: "Operacional", perfil: "ATENDIMENTO" }
];

/**
 * Realiza a autenticação do usuário
 */
function login() {
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value;

    // Validação: campos vazios
    if (email === "" || senha === "") {
        mostrarAlerta('warning', 'Campos obrigatórios', 'Por favor, preencha todos os campos.');
        return;
    }

    // Busca usuário no array
    let usuarioEncontrado = null;
    for (let i = 0; i < USUARIOS.length; i++) {
        if (USUARIOS[i].email === email && USUARIOS[i].senha === senha) {
            usuarioEncontrado = USUARIOS[i];
            break;
        }
    }

    if (usuarioEncontrado) {
        // Login correto - mensagem de boas-vindas (Informação)
        mostrarAlerta('success', 'Boas-vindas!', 'Bem-vindo, ' + usuarioEncontrado.nome + '! Redirecionando...');

        // Redireciona após 1.5 segundos
        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        // Login incorreto - mensagem de Alerta
        mostrarAlerta('error', 'Acesso negado', 'E-mail ou senha incorretos. Tente novamente.');

        // Limpa campo senha e devolve foco (conforme requisito 5.1)
        document.getElementById('senha').value = '';
        document.getElementById('senha').focus();
    }
}

/**
 * Mostra alerta usando SweetAlert2
 * Configurações: draggable + somente botão OK fecha
 */
function mostrarAlerta(tipo, titulo, mensagem) {
    let corBotao = '#e67e22';

    Swal.fire({
        icon: tipo,
        title: titulo,
        text: mensagem,
        confirmButtonColor: corBotao,
        confirmButtonText: 'OK',

        // Draggable - pode arrastar o modal
        allowOutsideClick: false,     // Não fecha clicando fora
        allowEscapeKey: false,        // Não fecha pressionando ESC
        allowEnterKey: false,         // Não fecha pressionando ENTER

        // Timer apenas para sucesso (boas-vindas)
        timer: (tipo === 'success') ? 1500 : undefined,
        timerProgressBar: (tipo === 'success'),
        showConfirmButton: (tipo !== 'success')
    });
}