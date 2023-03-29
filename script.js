const button = document.querySelector('button')
button.addEventListener('click', validation);

function validation(){

const email = document.querySelector('input');
const text = document.querySelector('.checkEmail');
const pattern = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

if (email.value.match(pattern)) {
    email.classList.remove('redInput')
    text.innerHTML = ''
}
else {
    email.classList.add('redInput')
    text.innerHTML = 'Please check your email'

}
}

const button2 = document.querySelector('.early-access-button')
button2.addEventListener('click', validation2);

function validation2(){

const email2 = document.querySelector('.early-access-input-email');
const text2 = document.querySelector('.checkEmail2');
const pattern2 = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

if (email2.value.match(pattern2)) {
    email2.classList.remove('redInput')
    text2.innerHTML = ''
}
else {
    email2.classList.add('redInput')
    text2.classList.add('checkEmail')
    text2.innerHTML = 'Please check your email'

}
}


