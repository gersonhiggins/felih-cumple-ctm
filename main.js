const scare = document.querySelector('.scare');
const scareButton = document.querySelector('.no');
const burguer = document.querySelector('.burguer');
const bar = document.querySelectorAll('.bar');
const siButton = document.querySelector('.si');
const images = document.querySelector('.fotos');

scareButton.addEventListener('click', () => {
    scare.classList.add('active');
    bar.forEach(n => n.classList.add('active'));

});

burguer.addEventListener('click', () => {
    scare.classList.remove('active');
    bar.forEach(n => n.classList.remove('active'));

})

siButton.addEventListener('click', () => {
    images.classList.toggle('active');
})