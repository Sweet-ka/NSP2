import { create } from "./shared.js";

async function addSliderContent() {
    const url = `/getarticleforslider`;
    const response = await fetch(url);
    const el = await response.json();
    return createContentSliderArr(el);
}

function createContentSliderArr(elem) {
    let content_slider = [];

    elem.forEach(element => {
        let obj = {};
        obj.image = element.image;
        obj.title = element.article_name;
        obj.group = element.article_spoiler;
        obj.button = "Подробнее";
        if (element.link_for_slider == 'a') {
            obj.href = `articles/article?id=${element.id}`
        } else {
            obj.href = `goods/${element.link_for_slider.toLowerCase()}`
        }
        content_slider.push(obj);
    });

    return content_slider;
}

function createMainSlider(arr) {
    const itcss__items = document.querySelector('.itcss__items');
    arr.forEach(item => {
        const itcss__item = create('div', 'itcss__item');
        const itcss__item_inner = create('div', 'itcss__item_inner');
        const itcss__item_inner_text = create('div', 'itcss__item_inner_text');
        const itcss__item_inner_title = create('div', 'itcss__item_inner_title');
        const itcss__item_inner_group = create('div', 'itcss__item_inner_group');
        const itcss__item_inner_btn = create('button', 'itcss__item_inner_btn');
        const itcss__item_inner_link = create('a');
        const itcss__item_inner_image = create('div', 'itcss__item_inner_image');

        itcss__item_inner_title.innerText = item.title;
        itcss__item_inner_group.innerText = item.group;
        itcss__item_inner_link.innerText = "Подробнее";
        itcss__item_inner_image.style.background = `url(${item.image})`;
        itcss__item_inner_link.setAttribute('href', item.href);

        itcss__items.appendChild(itcss__item);
        itcss__item.appendChild(itcss__item_inner);
        itcss__item_inner.appendChild(itcss__item_inner_text);
        itcss__item_inner.appendChild(itcss__item_inner_image);
        itcss__item_inner_text.appendChild(itcss__item_inner_title);
        itcss__item_inner_text.appendChild(itcss__item_inner_group);
        itcss__item_inner_text.appendChild(itcss__item_inner_btn);
        itcss__item_inner_btn.appendChild(itcss__item_inner_link);
    })
}

const content_slider = await addSliderContent();
createMainSlider(content_slider);
    var slider = new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: true,
      swipe: true
    });
