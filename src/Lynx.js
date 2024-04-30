/*

   DOM STUFF!

*/

/**
 * A chain of elements. Use this any time you're creating new elements as children of another.
 * @class
 */
export class ElementChain {
  constructor() {
    this.nodes = [];
  }

  /**
   * Internal function. Don't mess with this unless you're bored or have a good reason.
   */
  _elem(
    attributes = new AttributeChain(),
    children = new ElementChain(),
    name = "div"
  ) {
    const element = document.createElement(name);
    this.nodes.push(attributes.apply(element));
    element.append(...children.render());
    return this;
  }

  /**
   * This function is implemented by all ElementChain subclasses. Always returns an array of nodes, except for on Page where it actually renders.
   */
  render() {
    return this.nodes;
  }

  /**
   * Append a custom component to the chain. Note that while the `render()` method returns an array, only the first value is used. For this reason, components generally should only use `Lynx.Solo` as their root
   * @param {()=>{render:()=>Node[]}} comp : The component to render. This should be a function which returns some Renderable.
   */
  Component(comp) {
    this.nodes.push(comp().render()[0]);
    return this;
  }

  /**
   * Appends many components to the chain. Useful for mapping data to components, etc.
   * @param  {()=>{render:()=>Node[]}[]} components
   */
  Many(components) {
    components.forEach((component) => this.nodes.push(component().render()[0]));
    return this;
  }

  /**
   * Appends a text node to the chain.
   * @param {string} txt
   */
  Text(txt) {
    this.nodes.push(new Text(txt));
    return this;
  }

  /**
   * Appends a \<header\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Header({ attributes, children } = {}) {
    return this._elem(attributes, children, "header");
  }

  /**
   * Appends a \<nav\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Nav({ attributes, children } = {}) {
    return this._elem(attributes, children, "nav");
  }

  /**
   * Appends an \<a\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  A({ attributes, children } = {}) {
    return this._elem(attributes, children, "a");
  }

  /**
   * Appends an \<h1\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  H1({ attributes, children } = {}) {
    return this._elem(attributes, children, "h1");
  }

  /**
   * Appends an \<h2\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  H2({ attributes, children } = {}) {
    return this._elem(attributes, children, "h2");
  }

  /**
   * Appends an \<h3\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  H3({ attributes, children } = {}) {
    return this._elem(attributes, children, "h3");
  }

  /**
   * Appends an \<h4\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  H4({ attributes, children } = {}) {
    return this._elem(attributes, children, "h4");
  }

  /**
   * Appends an \<h5\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  H5({ attributes, children } = {}) {
    return this._elem(attributes, children, "h5");
  }

  /**
   * Appends an \<h6\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  H6({ attributes, children } = {}) {
    return this._elem(attributes, children, "h6");
  }

  /**
   * Appends a \<ul\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Ul({ attributes, children } = {}) {
    return this._elem(attributes, children, "ul");
  }

  /**
   * Appends an \<ol\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Ol({ attributes, children } = {}) {
    return this._elem(attributes, children, "ol");
  }

  /**
   * Appends an \<li\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Li({ attributes, children } = {}) {
    return this._elem(attributes, children, "li");
  }

  /**
   * Appends a \<button\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Button({ attributes, children } = {}) {
    return this._elem(attributes, children, "button");
  }

  /**
   * Appends a \<p\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  P({ attributes, children } = {}) {
    return this._elem(attributes, children, "p");
  }

  /**
   * Appends a \<span\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Span({ attributes, children } = {}) {
    return this._elem(attributes, children, "span");
  }

  /**
   * Appends a \<main\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Main({ attributes, children } = {}) {
    return this._elem(attributes, children, "main");
  }

  /**
   * Appends a \<section\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data : The attributes and children of this element.
   */
  Section({ attributes, children } = {}) {
    return this._elem(attributes, children, "section");
  }
}

/**
 * A chain of attributes. This represents a list of every regular attribute, as well as a few additional methods for convenience.
 * @class
 */
export class AttributeChain {
  constructor() {
    this.nodes = [];
  }

  /**
   * Probably don't use this unless you're doing weird stuff.
   * Applies the entire chain to an `HTMLElement`, then returns the modified element.
   * @param {HTMLElement} elem
   */
  apply(elem) {
    for (const attrNode of this.nodes) {
      switch (attrNode.type) {
        case "immediate":
          attrNode.value(elem);
          break;
        case "classlist":
          elem.classList.add(...attrNode.value);
          break;
        case "onclick":
          console.log(attrNode.value);
          elem.addEventListener("click", attrNode.value.bind(null, elem));
          break;
        case "onload":
          console.log(attrNode.value);
          elem.addEventListener("load", attrNode.value.bind(null, elem));
          break;
        default:
          elem[attrNode.type] = attrNode.value;
          break;
      }
    }
    return elem;
  }

  /**
   * Append to the chain a function to run immediately on element creation. Useful for initializing state.
   * @param {(HTMLElement)=>void} fn The function to be immediately invoked.
   */
  Immediate(fn) {
    this.nodes.push({ type: "immediate", value: fn });
    return this;
  }

  /**
   * Append HTML classes to the element.
   * @param  {...string} classes The class names to append
   */
  Class(...classes) {
    this.nodes.push({ type: "classlist", value: classes });
    return this;
  }

  /**
   * Sets the element's HTML ID.
   * @param {string} id
   */
  ID(id) {
    this.nodes.push({ type: "id", value: id });
    return this;
  }

  /**
   * Sets the element's `textContent`. While this method is useful for small things, it's generally better to use `.Text()` on the element's children.
   * @param {string} text
   */
  Text(text) {
    this.nodes.push({ type: "textContent", value: text });
    return this;
  }

  /**
   * Appends a click event to the element.
   * @param {(HTMLElement,PointerEvent)=>void} listener
   */
  OnClick(listener) {
    this.nodes.push({ type: "onclick", value: listener });
    return this;
  }

  /**
   * Sets the element's HREF
   * @param {string} value
   */
  HREF(value) {
    this.nodes.push({ type: "href", value });
    return this;
  }

  /**
   *
   * @param {(HTMLElement,Event)=>void} listener
   * @returns
   */
  OnLoad(listener) {
    this.nodes.push({ type: "onload", value: listener });
    return this;
  }
}

/**
 * Represents a <body> element. You should make __one__ of these, exclusively at the very start of your chain.
 * @class
 */
export class Page extends ElementChain {
  /**
   * Appends the entire chain to the document. This should be called __once__ at the __very end__ of your chain.
   */
  render() {
    for (const element of this.nodes) {
      document.body.appendChild(element);
    }
  }
}

/**
 * Represents one singular element. Mainly used in component creation.
 * @class
 */
export class Solo {
  /**
   * @param {{
   *   attributes:AttributeChain,
   *   children:ElementChain,
   *   element:string
   * }} data The data for the element to use.
   */
  constructor({
    attributes = new AttributeChain(),
    children = new ElementChain(),
    element = "div",
  }) {
    this.attributes = attributes;
    this.children = children;
    this.element = element;
  }

  /**
   * Renders out the element.
   */
  render() {
    const element = this.attributes.apply(document.createElement(this.element));
    element.append(...this.children.render());
    return [element];
  }
}

/*

   STATE STUFF!

*/

/**
 * A signal.
 */
export class Signal {
  /**
   *
   * @param {any} initialValue
   */
  constructor(initialValue) {
    this.value = initialValue;
    this.effects = [];
    this.alwaysEffects = [];
  }

  /**
   * Get the value of a signal.
   */
  get() {
    return this.value;
  }

  /**
   * Sets the value of a signal. Note that this fires listeners aswell.
   * @param {any} value
   */
  set(value) {
    let dirty = true;
    if (this.value == value) {
      dirty = false;
    }
    this.value = value;
    if (dirty) {
      for (const effect of this.effects) {
        effect(this);
      }
    }

    for (const effect of this.alwaysEffects) {
      effect(this);
    }
  }

  /**
   * Add a side effect to the listener. Consider this a listener for change.
   * @param {(Signal)=>void} fn The function to run.
   * @param {boolean} always Should this listener fire always, or only when the old value is not the same as the new value (is dirty)?
   */
  addEffect(fn, always) {
    if (always) {
      this.alwaysEffects.push(fn);
    } else {
      this.effects.push(fn);
    }
  }
}
