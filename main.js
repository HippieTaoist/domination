const li = document.querySelector('li')

function strikeThrough() {
    li.styles.TextDecoration.linethrough
}

strikeThrough()
const image = document.querySelector('img')


function imgSetter(img, url) {
    document.getEleconstmentById(img).src = url
}

imgSetter('image-1', 'https://i.ytimg.com/vi/EQAPHlEZs3E/maxresdefault.jpg')
imgSetter('image-2', 'https: //i.ytimg.com/vi/EQAPHlEZs3E/maxresdefault.jpg')
imgSetter('image-3', 'https://i.ytimg.com/vi/EQAPHlEZs3E/maxresdefault.jpg')



const ul = document.querySelector('ul')


funciton appendImgUL(img) {
    ul.appendChild('img')
}

const img2 = document.createElement('img')

function imgAdj(img) {
    img.style.height = '30px';
}

function hider(ele) {
    ele.class = 'invisible';
}

hider('numbered-item') {

}

function liText(writeWhat) {
    li.innerText(writeWhat)
}