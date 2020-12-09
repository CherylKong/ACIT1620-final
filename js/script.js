let form = document.body.querySelector('.form')

form.classList.add('visible')

function add_image()
{
    for (let i =1; i<=5;i++)
    {
        let img = document.createElement('img')
        let image_div = document.querySelector('#thumb-bar')
        img.src = `images/pic${i}.jpg`
        img.alt = `image${i}`
        img.setAttribute('height', '40');//img.height
        img.setAttribute('width', '40');//img.width
        image_div.appendChild(img)
    }
}
add_image()
