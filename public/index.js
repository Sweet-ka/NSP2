// import { hits } from "./hits/hits.js";
import { passLength, alph, createCard, addGoods, set_num } from "./shared.js";
// const entry_reg_btn = document.querySelector('.entry_reg_btn');
// const entry_btn = document.querySelector('.reg');
// const reg_window = document.querySelector('.reg_window');
// const entry_window = document.querySelector('.entry_window');
// const block = document.querySelector('.block');
// const confirm = document.querySelector('.confirm_reg_btn');
// const login = document.querySelector('.input_from_login');
// const email = document.querySelector('.input_from_email');
// const entry_back_btn = document.querySelector('.entry_back_btn');
// const reg_back_btn = document.querySelector('.reg_back_btn');
// const entry_close = document.querySelector('.entry_close');
// const reg_close = document.querySelector('.reg_close');

// const pass = function() {
//     let pass = ''
//     for (let i = 0; i < passLength; i++) {
//         switch (Math.round(Math.random(), 0)) {
//             case 0: pass += alph()[Math.round(Math.random()*(alph().length - 1), 0)].toUpperCase();
//                     break;
//             case 1: pass += alph()[Math.round(Math.random()*(alph().length - 1), 0)];
//                     break;
//         }
//     }
//     return pass;
// }

// entry_btn.addEventListener('click', () => {
//     entry_window.setAttribute('style', 'display: block');
//     block.setAttribute('style', 'display: block');
//     document.body.style.overflow = 'hidden';
//     // login.value = 'testLogin';
//     // email.value = 'testEmail';
// });

// entry_reg_btn.addEventListener('click', () => {
//     entry_window.setAttribute('style', 'display: none');
//     reg_window.setAttribute('style', 'display: block');
//     block.setAttribute('style', 'display: block');
//     document.body.style.overflow = 'hidden';
// });

// confirm.addEventListener('click',async () => {
//     let data = {
//         login: login.value,
//         email: email.value,
//         password: pass(),
//         avatar: ''
//     };
//     const insertUs = await insertUser(data);
//     const insertUs_res = await insertUs.text()
//     alert(insertUs_res);
// });

// entry_back_btn.addEventListener('click', ()=>{
//     close_window(block, entry_window);
// });

// reg_back_btn.addEventListener('click', ()=>{
//     close_window(block, reg_window);
// });

// reg_close.addEventListener('click', ()=>{
//     close_window(block, reg_window);
// });

// entry_close.addEventListener('click', ()=>{
//     close_window(block, entry_window);
// });

// block.addEventListener('click', ()=>{
//     close_window(block, entry_window, reg_window);
// });

// function close_window (...windows) {
//     for (let window of windows) {
//         window.setAttribute('style', 'display: none');
//         if (window === block) {
//             document.body.style.overflow = 'auto';
//         }
//     }
// }

// // запрос на получение товаров из базы данных
// const get_goods = async function() {
//     const res = await fetch('/goods', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//         },
//     })
//     return res.json()
// };

// // запрос на запись товаров в json файл
// const write_goods = async function(obj) {
//     const res = await fetch('/writejson', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//           'file': '/hits/hits.json'
//         },
//         body: JSON.stringify(obj)
//     });
//     return res;
// };

// // запрос на регистрацию пользователя
// const insertUser = async function(data) {
//     const res = await fetch('/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(data)
//     })
//     return res;
// };

// // запролняем карусель хитов из json файла

// // для админа:
// const get_goods_res =  await get_goods();
// await write_goods(get_goods_res);

//const get_hits_json = fetch('./hits/hits.json');
//const get_hits_json_res = await get_hits_json;
//const get_hits_json_json = await get_hits_json_res.text()
//addHitsFromJson(get_hits_json_json)

// function addHitsFromJson(json) {
//   const dataJson = JSON.parse(json);
//   const parent = document.querySelector(".slider__items");
//   for (let item in dataJson) {
//     let child = document.createElement("div");
//     child.classList.add("slider__item");
//     parent.appendChild(child);
//     child.appendChild(
//       createCard(
//         dataJson[item].goodsName,
//         dataJson[item].goodsGroup,
//         dataJson[item].photo,
//         ""
//       )
//     );
//   }
//   const $slider = document.querySelector('[data-slider="chiefslider"]');
//   const slider_hits = new ChiefSlider($slider, {
//     loop: true,
//     autoplay: false,
//     interval: 5000,
//     refresh: true,
//   });
// }

// async function addSliderHits() {
//     return createSliderHitsArr(hits);
// }

async function createSliderHitsArr(arr) {
  let arrhits = await arr.reduce(async (akk, element) => {
    let urlHit = `/getgoodsbyid?id=${element.goodsID}`;
    let responsehit = await fetch(urlHit);
    let hit = await responsehit.json();
    let akk_then = await akk;
    akk_then.push(hit[0]);
    return akk_then;
  }, []);

  return arrhits;
}

async function get_hits_bd() {
  const res = await fetch("/hits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await res.json();
}

const hits_bd = await get_hits_bd();

const get_hits = fetch("/getgoodsbygroupid");
const get_hits_res = await get_hits;
// const get_hits_res_json = await get_hits_res.json();

const urlCat = "/getgoodscat";
const responseCat = await fetch(urlCat);
const arrCat = await responseCat.json();
//createSliderHitsArr(hits);

const arrElem = await createSliderHitsArr(hits_bd);
addHitsFromServer();

async function addHitsFromServer() {
  addHits(arrElem);
  const $slider = document.querySelector('[data-slider="chiefslider"]');
  const slider_hits = new ChiefSlider($slider, {
    loop: true,
    autoplay: false,
    interval: 5000,
    refresh: true,
  });
}

function addHits(arr) {
  const parent = document.querySelector(".slider__items");

  arr.forEach((element) => {
    let child = document.createElement("div");
    child.classList.add("slider__item");
    parent.appendChild(child);
    addGoods(element, arrCat, child);
  });

  // const $slider = document.querySelector('[data-slider="chiefslider"]');
  // const slider_hits = new ChiefSlider($slider, {
  //   loop: true,
  //   autoplay: false,
  //   interval: 5000,
  //   refresh: true,
  // });
}

// отзывы
// запрос на получение отзывов из базы данных
const get_reviews = async function (con) {
  const res = await fetch("/reviews" + con, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await res.json();
};
console.log(await get_reviews("?date=max_date"));

// отзывы для главной страницы

const rew_all = await get_reviews("?date=not_max_date");

const four = new Set();

for (let i = 1; i <= 4; i++) {
  set_num(rew_all, four);
}

for (let i = 0; i <= 3; i++) {
  let avatar = document.getElementById(`avatar_${i}`);
  let name = document.getElementById(`name_${i}`);
  let text = document.getElementById(`text_${i}`);

  avatar.style.backgroundImage = `url(/images/users/avatars/id_${rew_all[i].id}/id_${rew_all[i].id}.jpeg)`;
  text.innerHTML = rew_all[i].review;
  let name_user = await get_rew_user(rew_all[i].user_id);
  name.innerHTML = name_user.name;
}

// новый отзыв
const rew = await get_reviews("?date=max_date");
console.log(rew[0]);
const new_rew = rew[0];

async function get_new_rew_goods(id) {
  const url = `/getgoodsbyid?id=${id}`;
  const response = await fetch(url);
  const goods = await response.json();
  console.log(goods);
  return goods[0] ? goods[0] : "";
}

const new_rew_goods = await get_new_rew_goods(new_rew.id_goods);

console.log(new_rew_goods);

const new_review_goods_photo_img = document.querySelector(
  ".new_review_goods_photo_img"
);
new_review_goods_photo_img.setAttribute(
  "src",
  `/images/photo_goods/${new_rew.id_goods}.webp`
);

//href="/card?id=4104"
const new_review_goods_name = document.querySelector(".new_review_goods_name");
new_review_goods_name.textContent = new_rew_goods.goodsName;

const new_review_goods_link = document.querySelector(".new_review_goods_link");
new_review_goods_link.setAttribute("href", `/card?id=${new_rew.id_goods}`);

const new_review_user_name = document.querySelector(".new_review_user_name");

async function get_rew_user(id) {
  const url = `/getuserbyid?id=${id}`;
  const response = await fetch(url);
  const goods = await response.json();
  return goods[0] ? goods[0] : "";
}

const new_rew_user = await get_rew_user(new_rew.user_id);
console.log(new_rew_user.name);

new_review_user_name.textContent = new_rew_user.name;

const new_review_card_text = document.querySelector(".new_review_card_text");
new_review_card_text.textContent = new_rew.review;

// // запрос на запись отзывов в json файл
// const write_rewiews = async function(obj) {
//     const res = await fetch('/writejson', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//           'file': '/reviews/reviews.json'
//         },
//         body: JSON.stringify(obj)
//     });
//     return res;
// };

// // запролняем отзывы из json файла
// const get_reviews_res =  await get_reviews();

// // для админа
// // await write_rewiews(get_reviews_res);

const get_reviews_json = fetch("./reviews/reviews.json");
const get_reviews_json_res = await get_reviews_json;
const get_reviews_json_json = await get_reviews_json_res.text();

const get_goods_json = fetch("./hits/hits.json");
const get_goods_json_res = await get_goods_json;
const get_goods_json_json = await get_goods_json_res.text();
const dataGoods = JSON.parse(get_goods_json_json);

//addReviewsFromJson(get_reviews_json_json);

function addReviewsFromJson(json) {
  const dataJson = JSON.parse(json);
  const parentText = document.querySelectorAll(".review_card_text");
  const parentAvatar = document.querySelectorAll(".review_user_avatar");
  const parentName = document.querySelectorAll(".review_user_name");
  const parentGoods = document.querySelectorAll(".review_user_goods");

  for (let i = 0; i < parentText.length; i++) {
    parentText[i].innerHTML = dataJson[i].review;
    parentName[i].innerHTML = `user ${i + 1}`;
    parentAvatar[
      i
    ].style.backgroundImage = `url(/images/users/avatars/id_${dataJson[i].id}/id_${dataJson[i].id}.jpeg)`;

    //parentAvatar[i].innerHTML =
    // `
    //<img src="/images/avatars/id_${dataJson[i].id}.jpeg">`
    // for (let j = 0; j < Object.keys(dataGoods).length; j++) {

    //     if(dataGoods[j].id === dataJson[i].id_goods) {
    //         parentGoods[i].innerHTML = dataGoods[j].goodsName;
    //     }

    // }
  }
}

//location.hash = 'home'
//appModule.start();
