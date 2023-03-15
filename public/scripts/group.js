const goods_group_list = document.querySelector(".goods_group_list");

async function addGroup() {
  const url = "getgoodsgroup";
  const response = await fetch(url);
  const arr = await response.json();
  console.log(arr);

  for (let item of arr) {
    let goodsID = Object.values(item)[0];
    let goodsGroup = Object.values(item)[1];
    let goodsCode = Object.values(item)[2];
    let img_group = Object.values(item)[3];

    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");
    p.classList.add("goods_group_label");
    li.classList.add("goods_group");
    goods_group_list.appendChild(li);
    li.appendChild(a);
    a.appendChild(p);
    li.style.backgroundImage = `url(/images/img_group/${img_group})`;
    //li.style.backgroundSize = '60%';

    const href = ("/goods/" + goodsCode).toLowerCase();
    a.setAttribute("href", href);
    a.setAttribute("data-id", goodsID);
    p.innerText = goodsGroup;
  }
}

addGroup();
