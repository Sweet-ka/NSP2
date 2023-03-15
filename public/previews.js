import { create } from "./shared.js";

const links = document.querySelectorAll(".preview_card");
console.log(links);
links.forEach((item) => {
  const href = ("/previews/" + item.title).toLowerCase();

  item.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target, href);
  });
});

const band = document.querySelector(".band");

async function addArticle() {
  const url = "getarticle";
  const response = await fetch(url);
  const arr = await response.json();
  console.log(arr);
  let count = 0;

  for (let elem of arr.reverse()) {
    let articleID = Object.values(elem)[0];
    let articleImage = Object.values(elem)[1];
    let articleName = Object.values(elem)[2];
    let articleSpoiler = Object.values(elem)[3];
    let articleLink = Object.values(elem)[4];

    let itemClass = "item-" + String(++count);
    let item = create("div", itemClass);
    let link = create("a", "preview_card");
    let href;
    if (articleLink == "a") {
      href = "/articles/article" + "?id=" + String(articleID);
    } else {
      href = "goods/" + articleLink;
    }
    link.setAttribute("href", href);

    let thumb = create("div", "thumb");
    thumb.style.backgroundImage = `url(${articleImage})`;

    let article = create("article");
    let h1 = create("h1");
    h1.innerText = articleName;
    let span = create("span");
    span.innerText = articleSpoiler;
    console.log(item);

    band.appendChild(item);
    item.appendChild(link);
    link.appendChild(thumb);
    link.appendChild(article);
    article.appendChild(h1);
    article.appendChild(span);

    // const li = document.createElement('li');
    // const a = document.createElement('a');
    // const p = document.createElement('p');
    // p.classList.add('goods_group_label');
    // li.classList.add('goods_group');
    // goods_group_list.appendChild(li);
    // li.appendChild(a);
    // a.appendChild(p);
    // li.style.background = `url(/images/img_group/${img_group}) center center no-repeat`;
    // li.style.backgroundSize = '60%';

    // const href = ('/goods/' + goodsCode).toLowerCase();
    // a.setAttribute('href', href);
    // a.setAttribute('data-id', goodsID);
    // p.innerText = goodsGroup;
  }
}

addArticle();
