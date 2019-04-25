const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const wrapper = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

wrapper.addEventListener('click', () =>{
    popup.style.display = 'none';
})