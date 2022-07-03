export const alph = () => {
    let str = ''
    for(let i = 10; i < 36; i++){
        str += i.toString(36);
    };
    for(let i = 0; i <= 9; i++){
        str += i;
    }
    return str;
}

export const passLength = 8;

export const createCard = function(title, text, img, link, herf) {
    const card = document.createElement('div');
    const img_wrapper = document.createElement('div');
    const image = document.createElement('img');
    const card_body = document.createElement('div');
    const card_title = document.createElement('h5');
    const card_text = document.createElement('p');
    const card_link = document.createElement('a');

    card.classList.add('card');
    img_wrapper.classList.add('img_wrapper');
    image.classList.add('card-img-top');

    image.setAttribute('src', `/images/photo_goods/${img}`)
    card_body.classList.add('card-body');
    card_title.classList.add('card-title');
    card_text.classList.add('card-text');
    card_link.classList.add('btn');
    card_link.classList.add('btn-primary');
    card_link.setAttribute('herf', herf)

    card.appendChild(img_wrapper);
    img_wrapper.appendChild(image);
    card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(card_link);

    card_title.innerText = title;
    card_text.innerText = text;
    card_link.innerText = link;

    return card;
}