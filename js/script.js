let form = document.body.querySelector('.form')

form.classList.add('visible')

let image_div = document.querySelector('#thumb-bar')
function add_image()
{
    for (let i =1; i<=5;i++)
    {
        let img = document.createElement('img')
        img.src = `images/pic${i}.jpg`
        img.alt = `pic${i}.jpg`
        img.setAttribute('height', '60');//img.height
        img.setAttribute('width', '50');//img.width
        image_div.appendChild(img)
    }
}
add_image()

let image = document.querySelector('.displayed-img')
function handlemouseover(e)
{
    form.classList.remove('visible')
    image.src = e.target.src
    image.alt = e.target.alt
}

image_div.addEventListener('mouseover',handlemouseover)

let input_text = document.body.querySelector('#effect')
let button = document.body.querySelector('button')
button.addEventListener('click', apply_effect)
function apply_effect(e)
{
    if(input_text.value === 'blur')
    {
        let new_image_posiiton = image.src.replace(image.src.substring(image.src.length-4),'B.jpg')
        image.src = new_image_posiiton
    }
    input_text.value = ''
}
