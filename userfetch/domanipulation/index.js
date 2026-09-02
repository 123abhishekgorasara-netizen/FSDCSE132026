const root = document.getElementById('root');
const button = document.getElementById('btn');
//console.log(button);
//console.log(root);
const h2 = document.createElement('h2');
const h1 = document.createElement('h1');
const img = document.createElement('img');
const dic=document.createElement('div');


function getData() {

    try {

    img.src = 'https://tse1.mm.bing.net/th/id/OIP.b8DLDRjTVfGAhVi_FiTZvgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
    img.setAttribute('width', '500px');
    img.setAttribute('height', '500px');
    h2.innerText = 'ABES engineering college';
    h2.style.color = 'red';
    h2.style.backgroundColor = 'yellow';

    h1.innerHTML = '<h2 style = color: green> Welcome to DOM Manipulation</h2>';
    dic.style.border = '2px solid black';
    
    dic.appendChild(img);
    dic.appendChild(h2);
    dic.appendChild(h1);
    root.appendChild(dic);

}catch (e) {
    console.log(e);
}
finally {
    root.removeChild(button);
}}

button.addEventListener('click', getData);