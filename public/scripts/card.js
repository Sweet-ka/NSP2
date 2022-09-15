import { create } from "../shared.js";

var image = document.querySelector('.gosreg');
var gos = document.querySelector('.gos');
const card_reviews = document.querySelector('.card_reviews');

gos.addEventListener('click', function() {
  image.classList.toggle('show');
  fullScreen(image);
});

function fullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.webkitRequestFullScreen ) {
    element.webkitRequestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}
    
async function addCard() {
    const url = `/getgoodsbyid${location.search}`;
    const response = await fetch(url);
    const goods = await response.json();
    const el = goods[0];
    createGoodsPage(el);
}

function createGoodsPage(elem) {
    const card_img_wrapper = document.querySelector('.card_img_wrapper');
    const img_goods = create('img');
    img_goods.setAttribute('src', `/images/photo_goods/${elem.id}.webp`);
    card_img_wrapper.appendChild(img_goods);

    const text_label = document.querySelector('.text_label');
    const text_label_h2 = create('h2');
    text_label_h2.innerText = elem.goodsName;
    text_label.appendChild(text_label_h2);

    const text_label_en = document.querySelector('.text_label_en');
    const text_label_h5 = create('h5');
    text_label_h5.innerText = elem.goodsNameEn;
    text_label_en.appendChild(text_label_h5);

    const retail_price = document.querySelector('.retail_price');
    const span_retail_price = create('span');
    console.log(span_retail_price)
    span_retail_price.classList.add('span_retail_price');
    span_retail_price.innerText = elem.retailPrice;
    retail_price.appendChild(span_retail_price);

    const distributors_price = document.querySelector('.distributors_price');
    const span_distributors_price = create('span');
    console.log(span_distributors_price)
    span_distributors_price.classList.add('span_distributors_price');
    span_distributors_price.innerText = elem.distributorsPrice;
    distributors_price.appendChild(span_distributors_price);



    function createLi(elem, par, parName, print) {
        if(!elem[par]) { return };

        const h2 = create('h2');
        h2.innerText = parName;
    
        const arr = elem[par].split('\n');
        const ul = create('ul');
        const section = document.querySelector(`.${par}`);
        if(print) {section.appendChild(h2)};
        section.appendChild(ul);
        arr.forEach(element => {
            const li = create('li');
            const p = create('p');
            ul.appendChild(li);
            li.appendChild(p);
            p.innerText = element;
        });
    }

    createLi(elem, 'properties', 'Свойства', false);
    createLi(elem, 'description', 'Описание', true);
    createLi(elem, 'composition', 'Состав', true);
    createLi(elem, 'application', 'Применение', true);
    createLi(elem, 'contraindications', 'Противопоказания', true);
    createLi(elem, 'keeping', 'Условия хранения', true);
    createLi(elem, 'note', 'Примечание', true);

    async function addReview() {
      const url = `/getReviewByID${location.search}`;
      const response = await fetch(url);
      const reviews = await response.json();
      console.log(reviews)
      const p = create('p');
      card_reviews.appendChild(p);
      const el = reviews[0];  
      p.innerText = el;
    }
    addReview()
}

addCard()
