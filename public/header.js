const menu = document.querySelectorAll('.menu');
// menu.forEach((elem) => {
//     elem.addEventListener('click')
// })

window.addEventListener('popstate', herfchange);

function herfchange(){ 
    var href = location.href;
    // menu.forEach((elem) => {
    //     elem.addEventListener('click')
    // })
    console.log(href)
}
