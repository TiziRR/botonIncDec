function incrementar(){
    
    const valorElemento = document.getElementById('valor');

    let valorActual = parseInt(valorElemento.textContent);
    valorActual++;

    valorElemento.textContent = valorActual;
}

function disminuir(){
    
    const valorElemento = document.getElementById('valor');

    let valorActual = parseInt(valorElemento.textContent);
    valorActual--;

    valorElemento.textContent = valorActual;
}