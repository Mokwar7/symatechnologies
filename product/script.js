const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav-container')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active')
    nav.classList.toggle('header__nav-container_active')
    body.classList.toggle('body_fixed')
})

const revs = document.querySelectorAll('.rev__people')
const naming = document.querySelector('.rev__main-name')
const text = document.querySelector('.rev__about-main')
const photo = document.querySelector('.rev__img')
let arrNames = []
let revsAll = [
    "<strong class=\"rev__strong_heavy\">It is a long established fact</strong> that a reader will be distracted by the readable content of a page when looking at its layout. The point of using <strong class=\"rev__blue\">Lorem Ipsum</strong> is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', <strong class=\"rev__strong_easy\">making it look like readable English.</strong></p>",
    "Lorem ipsum dolor sit amet consectetur <strong class=\"rev__strong_heavy\">adipisicing elit</strong>. Reiciendis magnam repellendus temporibus libero inventore enim ipsam illo praesentium, architecto laboriosam corrupti provident, aut maxime fugit tempora dolores, voluptatibus sit! Id labore quod repudiandae nesciunt at ad maiores iste ducimus odio.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta delectus nisi temporibus nobis reprehenderit culpa optio ad aperiam at est fuga, <strong class=\"rev__strong_heavy\">neque doloremque enim recusandae expedita saepe commodi provident</strong> quam nesciunt rem consectetur adipisci asperiores architecto. Ab, a magni.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo quibusdam nisi distinctio nesciunt? Ducimus dolor iure et obcaecati, harum tempore? <strong class=\"rev__strong_heavy\">Enim alias natus minus culpa impedit numquam obcaecati qui</strong> consequatur sapiente. Qui dolor in necessitatibus quis nam."
]


revs.forEach((element) => {
    element.addEventListener('click', () => {
        revs.forEach((el) => {
            el.classList.remove('rev__people_clicked')
        })
        element.classList.add('rev__people_clicked')
        const name = element.querySelector('.rev__name').textContent
        const img = element.querySelector('.rev__photo').src
        photo.src = img
        naming.textContent = name
        let i = 0
        arrNames.filter((nm) => {
            nm == name ? text.innerHTML = revsAll[i] : ''
            i++
        })
    })
    arrNames.push(element.querySelector('.rev__name').textContent)
})