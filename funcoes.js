function criptografar(){

//variável que armazenará o conteúdo do texto digitado pelo usuário
var mensagem = document.getElementById("entrada_texto").value;

//variável que armazenará todos os caracteres permitidos
var minusculas_mais_espaco = "abcdefghijklmnopqrstuvwxyz!?,.; ";

//variáveis que serão usadas na função replace, que indicarão quais caracteres a função deverá encontrar, além de ser todos os resultados
var crip_a = /a/gi;
var crip_e = /e/gi;
var crip_i = /i/gi;
var crip_o = /o/gi;
var crip_u = /u/gi;

//laço que percorre o texto digitado caractare a caractere para validar as regras do texto
for(i=0; i<mensagem.length ; i++){
    //caso o caractere analisado do texto digitado não esteja na variável com os caracteres permitidos, a função para
    if(minusculas_mais_espaco.indexOf(mensagem.charAt(i)) == '-1'){
        alert('Digite somente minúsculas!');
        exit;
    }
}

//variáveis que armazenarão as novas versões criptografadas, substituindo os caracteres pelas palavras, regra a regra, de forma cumulativa, aproveitando o último resultado
var mensagem_criptografada = mensagem.replace(crip_a, "ai");
var mensagem_criptografada2 = mensagem_criptografada.replace(crip_e, "enter");
var mensagem_criptografada3 = mensagem_criptografada2.replace(crip_i, "imes");
var mensagem_criptografada4 = mensagem_criptografada3.replace(crip_o, "ober");
var mensagem_criptografada5 = mensagem_criptografada4.replace(crip_u, "ufat");

//ao clicar no botão, a configuração inicial de imagens e frases são inativadas e ativa-se a caixa de texto
document.getElementById("img_e_msgs").style.display = "none";
document.getElementById("saida_texto").style.display = "flex";
//o texto criptografado é inserido na caixa de texto
document.getElementById("saida").innerText = mensagem_criptografada5;

}

function descriptografar(){

    //variável que armazenará o conteúdo do texto digitado pelo usuário
    var mensagem = document.getElementById("entrada_texto").value;
    
    //variável que armazenará todos os caracteres permitidos
    var minusculas_mais_espaco = "abcdefghijklmnopqrstuvwxyz!?,.; ";
    
    //variáveis que serão usadas na função replace, que indicarão quais conjunto de caracteres a função deverá encontrar, além de ser todos os resultados
    var descrip_a = /ai/gi;
    var descrip_e = /enter/gi;
    var descrip_i = /imes/gi;
    var descrip_o = /ober/gi;
    var descrip_u = /ufat/gi;
    
    //laço que percorre o texto digitado caractare a caractere para validar as regras do texto
    for(i=0; i<mensagem.length ; i++){
        //caso o caractere analisado do texto digitado não esteja na variável com os caracteres permitidos, a função para
        if(minusculas_mais_espaco.indexOf(mensagem.charAt(i)) == '-1'){
            alert('Digite somente minúsculas!');
        }
    }
    
    //processo inverso: variáveis que armazenarão as novas versões descriptografadas, substituindo as palavras pelos caracteres, regra a regra, de forma cumulativa, aproveitando o último resultado
    var mensagem_descriptografada = mensagem.replace(descrip_u, "u");
    var mensagem_descriptografada2 = mensagem_descriptografada.replace(descrip_o, "o");
    var mensagem_descriptografada3 = mensagem_descriptografada2.replace(descrip_i, "i");
    var mensagem_descriptografada4 = mensagem_descriptografada3.replace(descrip_e, "e");
    var mensagem_descriptografada5 = mensagem_descriptografada4.replace(descrip_a, "a");

    //ao clicar no botão, a configuração inicial de imagens e frases são inativadas e ativa-se a caixa de texto
    document.getElementById("img_e_msgs").style.display = "none";
    document.getElementById("saida_texto").style.display = "flex";
    //o texto descriptografado é inserido na caixa de texto
    document.getElementById("saida").innerText = mensagem_descriptografada5;
    
    }

    function copiar(){
        //variável que armazenará o texto extraído da caixa de texto
        var texto_copiado = document.getElementById("saida").value;
        //o conteúdo da variável, isto é, o texto, é armazenado na memória
        navigator.clipboard.writeText(texto_copiado);
    }