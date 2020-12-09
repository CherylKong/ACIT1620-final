let form = document.body.querySelector('.form')

form.classList.add('visible')

let image_div = document.querySelector('#thumb-bar')
function add_image()
{
    for (let i =1; i<=5;i++)
    {
        let img = document.createElement('img')
        img.src = `images/pic${i}.jpg`
        img.alt = `image${i}`
        img.setAttribute('height', '60');//img.height
        img.setAttribute('width', '50');//img.width
        image_div.appendChild(img)
    }
}
add_image()

function handlemouseover(e)
{
    form.classList.remove('visible')
}

image_div.addEventListener('mouseover',handlemouseover)
