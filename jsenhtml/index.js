// 1. Buscar y guardar en una variable todos los elementos img de mi web
    
    const myImgs = document.querySelectorAll ('img');

    console.log(myImgs)



// 2. Recorrer todos los elementos img encontrados y cambiarles el src

    myImgs.forEach (imgNode => {
        imgNode.src = 'https://cdn.andro4all.com/andro4all/2016/06/montapuercos.jpg'
    })