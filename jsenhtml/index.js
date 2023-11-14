// 1. Buscar y guardar en una variable todos los elementos img de mi web
    
    const myImgs = document.querySelectorAll ('img');

    console.log(myImgs)



// 2. Recorrer todos los elementos img encontrados y cambiarles el src

    myImgs.forEach (imgNode => {
        imgNode.src = 'https://cdn.andro4all.com/andro4all/2016/06/montapuercos.jpg'
    })



    document.querySelectorAll('img').forEach ((element) => {
        element.src= 'https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyJTIwcHVwcHl8ZW58MHx8MHx8fDA%3D


        // selector por id 
        document.querySelector('#logo').src = 'https://cdn.andro4all.com/andro4all/2016/06/montapuercos.jpg'


        // selector por clase 
        document.querySelector('.logo').style.background = 'red'

        //selector combinado,  me da la etiqueta a que tenga las clases menu y link, debe tener las dos 
        document.querySelector('a.menu.link').style.background = 'red';
        document.querySelector('.top-bar img').src = 'https://cdn.andro4all.com/andro4all/2016/06/montapuercos.jpg'
        ;
        