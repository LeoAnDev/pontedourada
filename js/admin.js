// js/admin.js - Funções Administrativas Simples

// ===== TOGGLE SIDEBAR =====
function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// ===== TOGGLE MOBILE SIDEBAR =====
function toggleMobileSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('mobile-open');
}

// ===== SALVAR PESSOA =====
function salvarPessoa(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    alert('Pessoa "' + nome + '" salva com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR ENDEREÇO =====
function salvarEndereco(event) {
    event.preventDefault();
    let logradouro = document.getElementById('logradouro').value;
    alert('Endereço "' + logradouro + '" salvo com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR USUÁRIO =====
function salvarUsuario(event) {
    event.preventDefault();
    let login = document.getElementById('login').value;
    alert('Usuário "' + login + '" salvo com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR CLIENTE =====
function salvarCliente(event) {
    event.preventDefault();
    let cpf = document.getElementById('cpf').value;
    alert('Cliente com CPF ' + cpf + ' salvo com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR PROFISSIONAL =====
function salvarProfissional(event) {
    event.preventDefault();
    let conselho = document.getElementById('conselho').value;
    alert('Profissional salvo com sucesso! Registro: ' + conselho);
    event.target.reset();
    return false;
}

// ===== SALVAR FORNECEDOR =====
function salvarFornecedor(event) {
    event.preventDefault();
    let razao = document.getElementById('razaoSocial').value;
    alert('Fornecedor "' + razao + '" salvo com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR PRODUTO =====
function salvarProduto(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    alert('Produto "' + nome + '" salvo com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR SERVIÇO =====
function salvarServico(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    alert('Serviço "' + nome + '" salvo com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR ATENDIMENTO =====
function salvarAtendimento(event) {
    event.preventDefault();
    let data = document.getElementById('dataAgendada').value;
    alert('Atendimento agendado para ' + data + ' com sucesso!');
    event.target.reset();
    return false;
}

// ===== SALVAR ATENDIMENTO PRODUTO =====
function salvarAtendimentoProduto(event) {
    event.preventDefault();
    let qtd = document.getElementById('quantidade').value;
    alert(qtd + ' produto(s) vinculado(s) ao atendimento com sucesso!');
    event.target.reset();
    return false;
}

// ===== MÁSCARAS =====
function aplicarMascaras() {

    // ===== CNPJ =====
    const cnpj = document.getElementById('cnpj');
    if (cnpj) {
        IMask(cnpj, {
            mask: '00.000.000/0000-00'
        });
    }

    // ===== CPF =====
    const cpf = document.getElementById('cpf');
    if (cpf) {
        IMask(cpf, {
            mask: '000.000.000-00'
        });
    }

    // ===== TELEFONE (FIXO + CELULAR) =====
    const telefone = document.getElementById('telefone');
    if (telefone) {
        IMask(telefone, {
            mask: [
                { mask: '(00) 0000-0000' },   // fixo
                { mask: '(00) 00000-0000' }   // celular
            ],
            dispatch: function (appended, dynamicMasked) {
                const valor = (dynamicMasked.value + appended).replace(/\D/g, '');

                // limite máximo
                if (valor.length > 11) {
                    return dynamicMasked.compiledMasks[1];
                }

                // celular
                if (valor.length === 11) {
                    return dynamicMasked.compiledMasks[1];
                }

                // fixo
                return dynamicMasked.compiledMasks[0];
            }
        });
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
    aplicarMascaras();
});