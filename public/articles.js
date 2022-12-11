import { create } from "./shared.js";

const art = document.querySelector('.article');
const classess = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'];
    
async function addArticle() {
    const url = `/getarticlebyid${location.search}`;
    console.log(location.search)
    const response = await fetch(url);
    const article = await response.json();
    const el = article[0];
    console.log('el', el)
    createArticlePage(el);
    let active = getActive()

    function getActive() {
        let loc = location.search.match(/\w*$/)[0];
        return loc;
    }

}

function createArticlePage(elem) {
    let articleID = elem.id;
    let articleImage = elem.image;
    let articleName = elem.article_name;
    let articleSpoiler = elem.article_spoiler;
    let articleText = elem.article_text;

    let article_card = create('div', 'article_card');

    let article_img = create('div', 'article_img');
    article_img.style.backgroundImage = `url(${articleImage})`;

    let article_photo = create('article', 'article_photo');
    let article_label = create('article', 'article_label');
    let article_text = create('article', 'article_text');
    let h1 = create('h1');
    h1.innerText = articleName;
    let span = create('span');
    span.innerText = articleSpoiler;
    let text = create('p');
    text.innerText = articleText;

    art.appendChild(article_photo);
    art.appendChild(article_label);
    art.appendChild(article_text);
    createP(articleText, article_text)

    article_photo.appendChild(article_img);
    article_label.appendChild(h1);
    article_label.appendChild(span);
   // article_text.appendChild(text);


    function createP(elem, par, print) {
        if(!elem) { return };
        console.log(elem)
        const arr = elem.replace(/\r/g, '').split('\n');
                console.log(arr)

        arr.forEach(element => {
            console.log('element', element)
            if (element !== "") {
                const classP = classess[(Math.trunc(Math.random()*10))];
                const p = create('p', classP);
                par.appendChild(p);
                p.innerText = "🌿 " + element;
            }
        });
    }

}


addArticle()
