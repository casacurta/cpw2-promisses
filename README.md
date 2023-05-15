# cpw2-promisses
Atividade

Implemente um código JS que carregue imagens randômicas a medida que o usuário realiza a rolagem (scroll) até o final da página. Nesse sentido, siga os seguintes passos:

1 – Antes de iniciar, crie um arquivo chamado data.json que contenha pelo menos 15 imagens no seguinte formato json: 

[{"url": "http://exemplo.com/img2.jpg"}, {"url": "http://exemplo.com/img2.jpg"}]

2 – Quando o usuário entrar na página, faça uma requisição XMLHttpRequest (Ajax) para carregar de maneira randômica um conjunto de imagens; repita essa ação quando o usuário realizar o scroll até o final da página  com o objetivo de manter um carregamento infinito de imagens. Dica para detectar o scroll até o final da página:

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
// você está no final da página
}

3 - Porém, a nesse exercício a função que implementa o objeto XMLHttpRequest deve retornar uma Promisse. Um exemplo de completo de como podemos trabalhar retornar uma Promisse que utiliza o objeto XMLHttpRequest pode ser obtido na documentação do MDN:

https://github.com/mdn/js-examples/blob/master/promises-test/index.html

Como entregar a atividade?

Depois de pronto, disponibilize seu código no https://jsfiddle.net ou no https://github.com