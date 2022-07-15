import { createCard } from "../shared.js";

const preview = document.querySelector('.preview');

const id = location.search.match(/id=\w*/).toString().slice(3);
async function addCard() {
    const url = `/getgoodsbyid${location.search}`;
    const response = await fetch(url);
    const goods = await response.json();
    const el = goods[0];
    console.log(goods)
    preview.appendChild(createCard(el.goodsName, el.goodsGroupID, el.photo, ''))

}
addCard()