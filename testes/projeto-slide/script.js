const images = [
    {'id' : '1', 'url':'./imagem/opc1.jpg'},
    {'id' : '2', 'url':'./imagem/opc2.webp'},
    {'id' : '3', 'url':'./imagem/hamburguer-nos.png'},
    {'id' : '4', 'url':'./imagem/backgroundtest.png'},
    {'id' : '5', 'url':'./imagem/backgroundpara1.png'},
    {'id' : '6', 'url':'./imagem/backgroundpara.png'},
]

const container = document.querySelector('#container-items')

const loadImages = (images, container) => {
    container.innerHTML = "";
    images.forEach (image => {
        container.innerHTML += `
            <div class="item">
                <img src= "${image.url}">
            </div>
        `
    })
}

loadImages(images, container);