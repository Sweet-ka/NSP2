import { addGoods, setLocation } from "../shared.js";

const field_menu = document.querySelector(".field_menu");
const category_label = document.querySelector(".category_label");
const field_display = document.querySelector(".field_card_wrapper");
const all_goods = document.querySelector(".all_goods");

const categories_burger = document.querySelector(".categories_burger");
const field_menu_wrapper = document.querySelector(".field_menu_wrapper");

let groupID;
let groupName;
let activeGroup;
let activeCatID;
let arrGroup;

async function addCategories() {
  const url = "/getgoodsgroup";
  const response = await fetch(url);
  arrGroup = await response.json();

  activeGroup = location.pathname
    .match(/\/\w*$/)
    .toString()
    .substring(1);
  activeCatID = getActiveCatID();

  function getActiveCatID() {
    let loc = location.search.match(/goodsCategoriesID=\w*$/);
    if (loc !== null) {
      loc = loc.toString().substring(18);
    }
    return loc;
  }

  for (let item of arrGroup) {
    if (item.groupCode.toLowerCase() === activeGroup) {
      groupID = item.id;
      groupName = item.groupName;
    }
  }

  const urlCat = `/getgoodscat?goodsGroupID=${groupID}`;
  const responseCat = await fetch(urlCat);
  const arrCat = await responseCat.json();

  const categories = [all_goods];

  for (let item of arrCat) {
    let category = document.createElement("a");
    let category_name = document.createElement("p");
    category.classList.add("category_btn");
    category.setAttribute("data-id", item.id);
    category.setAttribute("href", `?goodsCategoriesID=${item.id}`);
    category.setAttribute("data-category", item.category);
    category.setAttribute("data-group", item.groupCode);

    field_menu.appendChild(category);
    category.appendChild(category_name);
    categories.push(category);
    category_name.innerText = item.category;
  }

  const urlGoods = `/getgoodsbygroupid?goodsGroupID=${groupID}`;
  const responseGoods = await fetch(urlGoods);
  const arrGoods = await responseGoods.json();

  function setActive(el) {
    if (el.getAttribute("data-id") === activeCatID) {
      el.classList.add("category_btn_active");
      category_label.innerText =
        groupName + " / " + el.getAttribute("data-category");
      field_display.innerHTML = "";
      for (let elem of arrGoods) {
        if (
          elem.goodsCategoriesID === Number(activeCatID) ||
          activeCatID === null
        ) {
          addGoods(elem, arrCat, field_display);
        }
      }
    }
  }

  categories.forEach((item) => {
    item.classList.remove("category_btn_active");
    setActive(item);

    item.addEventListener("click", (e) => {
      e.preventDefault();
      setLocation(item.getAttribute("href"));
      activeCatID = getActiveCatID();
      categories.forEach((item) => {
        item.classList.remove("category_btn_active");
      });
      setActive(item);
      open_burger();
    });
  });

  window.addEventListener("popstate", () => {
    activeCatID = getActiveCatID();
    categories.forEach((item) => {
      item.classList.remove("category_btn_active");
      setActive(item);
    });
  });
}

addCategories();

categories_burger.addEventListener("click", open_burger);

function open_burger() {
  if (field_menu_wrapper.classList.contains("field_menu_close")) {
    field_menu_wrapper.classList.remove("field_menu_close");
    field_menu_wrapper.classList.add("field_menu_open");
  } else if (field_menu_wrapper.classList.contains("field_menu_open")) {
    field_menu_wrapper.classList.remove("field_menu_open");
    field_menu_wrapper.classList.add("field_menu_close");
  } else {
    field_menu_wrapper.classList.add("field_menu_open");
  }
}
