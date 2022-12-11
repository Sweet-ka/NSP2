import { create } from "../shared.js";

var part_parent = document.querySelector('.part');
var gos = document.querySelector('.gos');
console.log(gos)

const product = document.querySelector('.product');

// gos.addEventListener('click', function() {
//   image.classList.toggle('show');
  //fullScreen(image);
//});

// function fullScreen(element) {
//   if(element.requestFullScreen) {
//     element.requestFullScreen();
//   } else if(element.webkitRequestFullScreen ) {
//     element.webkitRequestFullScreen();
//   } else if(element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//   }
// }
async function createLink(link) {
  const url = `/getgoodsbyid?id=${link}`;
  const response = await fetch(url);
  const goods = await response.json();
  console.log(goods[0])
  return goods[0] ? goods[0] : '';
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
    card_img_wrapper.appendChild(img_goods);
    img_goods.setAttribute('src', `/images/photo_goods/${elem.photo}`);
    console.log(elem.part)

    if (elem.part) {
      part_parent.style.display = 'block';
      const part = elem.part.split(';');

      part.forEach(async el => {

      const part_elem = await createLink(el);
      const href_part = part_elem.id;
      const name_part = part_elem.goodsName;
      console.log(href_part)
      const part_el = create('li');
      const part_el_link = create('a', 'part_link');
      part_parent.appendChild(part_el);
      part_el.appendChild(part_el_link);
      part_el_link.innerText = `арт. ${el}`;  
      if (href_part) {
        part_el_link.setAttribute('href', `card?id=${href_part}`);
        part_el_link.innerText = name_part;  
      }
      })
    }

    const csr = document.querySelector('.CSR');
    if (elem.CSR) {
      csr.setAttribute('href', elem.CSR);
    } else {
      gos.style.display = 'none';
    }

    const text_label = document.querySelector('.text_label');
    const text_label_h2 = create('h2');
    text_label_h2.innerText = elem.goodsName;
    product.innerText = elem.goodsName;
    text_label.appendChild(text_label_h2);

    const text_label_en = document.querySelector('.text_label_en');
    const text_label_h5 = create('h5');
    text_label_h5.innerText = elem.goodsNameEn;
    text_label_en.appendChild(text_label_h5);

    const retail_price = document.querySelector('.retail_price');
    const span_retail_price = create('span');
    span_retail_price.classList.add('span_retail_price');
    span_retail_price.innerText = `${elem.retailPrice} $`;
    retail_price.appendChild(span_retail_price);

    const distributors_price = document.querySelector('.distributors_price');
    const span_distributors_price = create('span');
    span_distributors_price.classList.add('span_distributors_price');
    span_distributors_price.innerText = `${elem.distributorsPrice} $`;
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
      const card_rewiew_slider = document.querySelector('.card_rewiew_slider');
      const slider_dots = document.querySelector('.slider-dots');
      const url = `/getReviewByID${location.search}`;
      const response = await fetch(url);
      const reviews = await response.json();
      let count = 0;

      reviews.forEach(async (review_item) => {
        count += 1;
        const item = create('div', 'item');
        const slider_dots_item = create('span', 'slider-dots_item');
        slider_dots_item.setAttribute('data-count', count);
        card_rewiew_slider.appendChild(item);
        slider_dots.appendChild(slider_dots_item);
        slider_dots_item.addEventListener('click', () => {
          currentSlide(slider_dots_item.dataset.count);
        })

        const review_card = create('div', 'review_card');
        const review_user = create('div', 'review_user');
        const review_card_body = create('div', 'review_card_body');
        review_card.appendChild(review_user);
        review_card.appendChild(review_card_body);
    
        const review_user_avatar = create('div', 'review_user_avatar');
        const review_user_data = create('div', 'review_user_data');
        const review_user_name = create('div', 'review_user_name');
        review_user_data.appendChild(review_user_name);
        review_user.appendChild(review_user_avatar);
        review_user.appendChild(review_user_data);

        const review_date = create('div', 'review_date');
        review_date.innerText = new Date(review_item.date).toLocaleString();
    
        const review_card_text = create('p', 'review_card_text');
        review_card_body.appendChild(review_date);
        review_card_body.appendChild(review_card_text);
    
        const url = `/getuserbyid?id=${review_item.user_id}`;
        const response = await fetch(url);
        const user = await response.json();  

        review_user_name.innerText = user[0].login;
        review_user_avatar.style.backgroundImage = `url(/images/avatars/id_${user[0].id}.jpeg)`
        review_card_text.innerText = review_item.review;

        item.appendChild(review_card);
      })

      const prev = document.querySelector('.prev');
      const next = document.querySelector('.next');
      prev.addEventListener('click', plusSlide);
      next.addEventListener('click', minusSlide);

      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlide() {
          showSlides(slideIndex += 1);
      }
      
      function minusSlide() {
          showSlides(slideIndex -= 1);  
      }
      
      function currentSlide(n) {
          showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("item");
          var dots = document.getElementsByClassName("slider-dots_item");
          if (n > slides.length) {
            slideIndex = 1
          }
          if (n < 1) {
              slideIndex = slides.length
          }
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active";
      }
    }
    addReview()
}

addCard()
