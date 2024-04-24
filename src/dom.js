export class ElementChain {
  constructor() {
    this.nodes = [];
  }

  render() {
    return this.nodes;
  }

  Component(chain) {
    this.nodes.push(chain().render());
    return this;
  }

  Many(...components) {
    components.forEach((component) => this.nodes.push(component().render()));
    return this;
  }

  H1(attrChain) {
    this.nodes.push(attrChain.apply(document.createElement("h1")));
    return this;
  }

  H3(attrChain) {
    this.nodes.push(attrChain.apply(document.createElement("h3")));
    return this;
  }

  Button(attrChain, children) {
    const element = attrChain.apply(document.createElement("button"));
    if (children != undefined) {
      element.append(...children.render());
    }
    this.nodes.push(element);
    return this;
  }

  P(attrChain) {
    this.nodes.push(attrChain.apply(document.createElement("p")));
    return this;
  }

  Span(attrChain) {
    this.nodes.push(attrChain.apply(document.createElement("span")));
    return this;
  }
}

export class AttrChain {
  constructor() {
    this.nodes = [];
  }
  apply(elem) {
    for (const attrNode of this.nodes) {
      switch (attrNode.type) {
        case "immediate":
          attrNode.value(elem);
          break;
        case "classlist":
          elem.classList.add(...attrNode.value);
        default:
          elem[attrNode.type] = attrNode.value;
          break;
      }
    }
    return elem;
  }

  Immediate(fn) {
    this.nodes.push({ type: "immediate", value: fn });
    return this;
  }

  Class(...classes) {
    this.nodes.push({ type: "classlist", value: classes });
    return this;
  }

  Text(value) {
    this.nodes.push({ type: "textContent", value });
    return this;
  }

  OnClick(value) {
    this.nodes.push({ type: "onclick", value });
    return this;
  }

  OnLoad(value) {
    this.nodes.push({ type: "onload", value });
    return this;
  }
}

export class Page extends ElementChain {
  render() {
    for (const element of this.nodes) {
      document.body.appendChild(element);
    }
  }
}

export class Solo {
  constructor(attr, chain) {
    this.attr = attr;
    this.chain = chain;
  }

  render() {
    const element = this.attr.apply(document.createElement("div"));
    element.append(...this.chain.render());
    return element;
  }
}
