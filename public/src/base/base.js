export class Base {
    constructor(tag = 'div', className = '') {
        this.node = document.createElement(tag);
        if (className !== "") {
            this.node.className = className;
        }
    }
    render(parentNode) {
        parentNode.appendChild(this.node);
    }
}