const li = document.querySelector('li')

function strikeThrough() {
    li.styles.TextDecoration.linethrough
}

strikeThrough()
const image = document.querySelector('img')


function imgSetter(img, url) {
    document.getElementById(img).src = url
}

imgSetter('image-1', 'https://i.ytimg.com/vi/EQAPHlEZs3E/maxresdefault.jpg')
imgSetter('image-2', 'https: //i.ytimg.com/vi/EQAPHlEZs3E/maxresdefault.jpg')
imgSetter('image-3', 'https://i.ytimg.com/vi/EQAPHlEZs3E/maxresdefault.jpg')