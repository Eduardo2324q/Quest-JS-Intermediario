const inputs = document.querySelectorAll('.nome, .email, .telefone, .mensagem');

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.style.borderColor = 'green';
            removerMensagemErro(input);
        } else {
            input.style.borderColor = '';
        }
    });
});

function removerMensagemErro(input) {
    const erroExistente = input.nextElementSibling;
    if (erroExistente && erroExistente.classList.contains('erro')) {
        erroExistente.remove();
    }
}

const botaoEnviar = document.querySelector('.btn-enviar');

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    inputs.forEach(input => {
        removerMensagemErro(input);

        if (input.value.trim() === '') {
            input.style.borderColor = 'red';

            const mensagemErro = document.createElement('p');
            mensagemErro.textContent = 'campo obrigatório';
            mensagemErro.style.color = 'red';
            mensagemErro.style.margin = '5px 20px 0 20px';
            mensagemErro.style.display = 'block';
            mensagemErro.classList.add('erro');

            input.insertAdjacentElement('afterend', mensagemErro);
        } else {
            input.style.borderColor = '';
        }
    });
});