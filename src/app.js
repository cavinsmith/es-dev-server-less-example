import { LitElement, html, unsafeCSS } from 'lit-element';
import { render } from 'lit-html';

import data from './styles.less';

export const styles = unsafeCSS(data);

class MyElement extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`<div class="text">Hello <span class="xxx">world</span></div> `;
  }
}

customElements.define('my-element', MyElement);

const template = html`<my-element />`;

render(template, document.getElementById('app'));
