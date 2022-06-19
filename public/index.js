import { passLength, alph } from "./shared.js";

const reg_btn = document.querySelector('.reg');
const reg_window = document.querySelector('.reg_window');
const block = document.querySelector('.block');
const confirm = document.querySelector('.confirm_reg_btn');
const login = document.querySelector('.input_from_login');
const email = document.querySelector('.input_from_email');

const pass = function() {
    let pass = ''
    for (let i = 0; i < passLength; i++) {
        switch (Math.round(Math.random(), 0)) {
            case 0: pass += alph()[Math.round(Math.random()*(alph().length - 1), 0)].toUpperCase();
                    break;
            case 1: pass += alph()[Math.round(Math.random()*(alph().length - 1), 0)];
                    break;
        }
    }
    return pass;
}

const cons = document.querySelector('.get_consult');
cons.addEventListener('click', ()=> {
    console.log('click')
    fetch('/goods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        
    }).then((res) => {
        return(res.json());
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

})

reg_btn.addEventListener('click', () => {
    reg_window.setAttribute('style', 'display: block');
    block.setAttribute('style', 'display: block');
    document.body.style.overflow = 'hidden';
    login.value = 'testLogin';
    email.value = 'testEmail';
});

confirm.addEventListener('click', () => {
    let data = {
        login: login.value,
        email: email.value,
        password: pass(),
        avatar: ''
    };

    fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        console.log(res.text());
    }).catch((err) => {
        console.log(err);
    })
});
