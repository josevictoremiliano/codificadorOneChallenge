// pegando itens
const criptografarBtn = document.getElementById('btn-criptografar');
const descriptografarBtn = document.getElementById('btn-descriptografar');
const textArea = document.getElementById('frase');
const aviso = document.getElementById('avisoDeLetrasTexto');

const footer = document.getElementById('footer-text');

const resultado = document.getElementsByClassName('textoResult');
const copiar = document.getElementById('btn-copiar');

const preResposta = document.getElementsByClassName('pre-respostas')
const resposta = document.getElementsByClassName('resposta')

const alerta = document.getElementsByClassName('avisos');
const colar = document.getElementById('btn-colar');

const buttons = document.querySelectorAll('.btn-linguagem');
const pt = document.getElementById('btn-pt');
const es = document.getElementById('btn-es');
const en = document.getElementById('btn-en');

const preRespostasH5 = document.getElementById('TextoSemMensagem');
const preRespostasSpan = document.getElementById('SpanDoTextoSemMensagem')


// criptografar
criptografarBtn.addEventListener('click', () => {
    if (textArea.value === '') {
        if (pt.classList.contains('active')) {
            alerta[0].innerHTML = '<i class="mif-cross-light"></i> Digite algo para ser criptografado';
        } else {
            alerta[0].innerHTML = '<i class="mif-cross-light"></i> Escribe algo para cifrar';
        }
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);

        return;
    } else {
        const frase = textArea.value;
        //substituir letras maiusculas por minusculas
        const fraseMinuscula = frase.toLowerCase();

        //substituir vogais por numeros
        const criptografada = fraseMinuscula.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');

        resultado[0].innerHTML = criptografada;

        preResposta[0].style.display = 'none';
        resposta[0].style.display = 'flex';

        textArea.value = '';
    }
});

// descriptografar
descriptografarBtn.addEventListener('click', () => {
    if (textArea.value === '') {
        if (pt.classList.contains('active')) {
            alerta[0].innerHTML = '<i class="mif-cross-light"></i> Digite algo para ser descriptografado';
        } else {
            alerta[0].innerHTML = '<i class="mif-cross-light"></i> Escribe algo para descifrar';
        }
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);

        return;
    } else {
        const frase = textArea.value;
        console.log(frase);
        const descriptografada = frase.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');


        resultado[0].innerHTML = descriptografada;

        preResposta[0].style.display = 'none';
        resposta[0].style.display = 'flex';

        textArea.value = '';
    }
});

// copiar
copiar.addEventListener('click', () => {
    const copiado = resultado[0].innerText;
    navigator.clipboard.writeText(copiado);
    copiar.innerHTML = '<i class="mif-clipboard"></i> Copiado!  ';

});

// colar
colar.addEventListener('click', () => {
    if (navigator.clipboard.readText) {
        navigator.clipboard.readText().then(text => {
            textArea.value = text;
        });
    } else {
        if (pt.classList.contains('active')) {
            alerta[0].innerHTML = '<i class="mif-cross-light"></i> Não foi possível colar';
        } else {
            alerta[0].innerHTML = '<i class="mif-cross-light"></i> No se pudo pegar';
        }
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);
    }

});

document.addEventListener('DOMContentLoaded', function () {

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // se o botão pt for clicado troca o idioma para português e se o botão es for clicado troca o idioma para espanhol
    pt.addEventListener('click', () => {
        criptografarBtn.innerHTML = 'Criptografar';
        descriptografarBtn.innerHTML = 'Descriptografar';
        copiar.innerHTML = 'Copiar';
        textArea.placeholder = 'Digite seu texto';
        aviso.innerHTML = 'Apenas letras minúsculas e sem acento.';

        preRespostasH5.innerHTML = 'Nenhuma mensagem encontrada';
        preRespostasSpan.innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar.';
        footer.innerHTML = 'Feito com <span>❤</span> por <a href="https://github.com/josevictoremiliano">José Victor Emiliano da Silva</a> - 2024';
    });

    es.addEventListener('click', () => {
        criptografarBtn.innerHTML = 'Cifrar';
        descriptografarBtn.innerHTML = 'Descifrar';
        copiar.innerHTML = 'Copiar';
        textArea.placeholder = 'Escribe tu texto';
        aviso.innerHTML = 'Solo letras minúsculas y sin acento.';
        preRespostasH5.innerHTML = 'No se encontró ningún mensaje';
        preRespostasSpan.innerHTML = 'Escribe un texto que quieras cifrar o descifrar.';
        footer.innerHTML = 'Hecho con <span>❤</span> por <a href="https://github.com/josevictoremiliano">José Victor Emiliano da Silva</a> - 2024';
    })

    en.addEventListener('click', () => {
        criptografarBtn.innerHTML = 'Encrypt';
        descriptografarBtn.innerHTML = 'Decrypt';
        copiar.innerHTML = 'Copy';
        textArea.placeholder = 'Type your text';
        aviso.innerHTML = 'Only lowercase letters and no accent.';
        preRespostasH5.innerHTML = 'No message found';
        preRespostasSpan.innerHTML = 'Type a text you want to encrypt or decrypt.';
        footer.innerHTML = 'Made with <span>❤</span> by <a href="https://github.com/josevictoremiliano">José Victor Emiliano da Silva</a> - 2024'; 
    })
});

