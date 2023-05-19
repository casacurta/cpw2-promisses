function myRequest(method,url){
    return new Promise((resolve,reject) => {
        // Instanciando o objeto XMLHttpRequest
        let xhr = new XMLHttpRequest();
        //tratamento do retorno
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200){
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                console.log(xhr.readyState);
            }
        }
        // Tratamento de erro
        xhr.onerror = () => reject(xhr.statusText);
        //Configurando a requisição
        xhr.open(method,url,true);
        // Enviando a requisição
        xhr.send();
    });
}