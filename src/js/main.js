import '../scss/main.scss';
function component () {
    let element = document.createElement('div');
    element.innerHTML = 'Hello World!';
    element.classList.add('hello');
    return element;
}
document.body.appendChild(component());