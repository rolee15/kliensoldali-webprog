class VisiblePassword extends HTMLElement {

    constructor() {
        super();
        const template = document.querySelector('template');
        const content = template.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(content);
    }

    connectedCallback() {
        this.input = this.querySelector('input');
        this.button = this.shadowRoot.querySelector('button');
        this.button.addEventListener('click', e => this.toggleVisibility(e));
    }

    toggleVisibility(e) {
        if (this.input.type === 'password') {
            this.input.type = 'text';
        } else {
            this.input.type = 'password';
        }
    }
}


window.customElements.define(
    'visible-password',
    VisiblePassword
);
