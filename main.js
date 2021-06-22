import './styles/style.css';
import './styles/main.scss';


document.querySelector('.burger__cell').addEventListener('click', () => {
    document.querySelector('.section-one__list').classList.toggle('active'),
        document.querySelector('.burger__toggle').classList.toggle('cross'),
        document.querySelector('body').classList.toggle('off')
})

document.querySelector('.section-one__list').addEventListener('click', () => {
    document.querySelector('.section-one__list').classList.remove('active'),
        document.querySelector('.burger__toggle').classList.remove('cross'),
        document.querySelector('body').classList.remove('off')
})