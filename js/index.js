// pegando itens
const criptografarBtn = document.getElementById('btn-criptografar');
const descriptografarBtn = document.getElementById('btn-descriptografar');
const textArea = document.getElementById('frase');

const resultado = document.getElementsByClassName('textoResult');
const copiar = document.getElementById('btn-copiar');

const preResposta = document.getElementsByClassName('pre-respostas')
const resposta = document.getElementsByClassName('resposta')

const alerta = document.getElementsByClassName('avisos');
const colar = document.getElementById('btn-colar');

// criptografar
criptografarBtn.addEventListener('click', () => {
    if (textArea.value === '') {
        alerta[0].innerHTML = '<i class="mif-cross-light"></i> Digite algo para ser criptografado';
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
        const criptografada = fraseMinuscula.replace(/a/g, '1f').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');

        resultado[0].innerHTML = criptografada;

        preResposta[0].style.display = 'none';
        resposta[0].style.display = 'flex';
        
        textArea.value = '';
    }
});

// descriptografar
descriptografarBtn.addEventListener('click', () => {
    if (textArea.value === '') {
        alerta[0].innerHTML = '<i class="mif-cross-light"></i> Digite algo para ser descriptografado';
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);

        return;
    } else {
        const frase = textArea.value;
        console.log(frase);
        const descriptografada = frase.replace(/1f/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
        

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
       alerta[0].innerHTML = '<i class="mif-cross-light"></i> Não foi possível colar';
       alerta[0].style.display = 'block';
       alerta[0].classList.add('error');
       setTimeout(() => {
           alerta[0].style.display = 'none';
       }, 3000);
   }

});