/*
    Hi this is Lynx!
    Author: rats159 (https://rats159.dev)

    Leave this credit if you're cool.
*/

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
   * @param {()=>{render:()=>Node[]}} comp The component to render. This should be a function which returns some Renderable.
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
   * Appends a \<address\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Address({ attributes, children } = {}) {
    return this._elem(attributes, children, "address");
  }

  /**
   * Appends a \<aside\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Aside({ attributes, children } = {}) {
    return this._elem(attributes, children, "aside");
  }

  /**
   * Appends a \<footer\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Footer({ attributes, children } = {}) {
    return this._elem(attributes, children, "footer");
  }

  /**
   * Appends a \<hgroup\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Hgroup({ attributes, children } = {}) {
    return this._elem(attributes, children, "hgroup");
  }

  /**
   * Appends a \<search\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Search({ attributes, children } = {}) {
    return this._elem(attributes, children, "search");
  }

  /**
   * Appends a \<blockquote\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  BlockQuote({ attributes, children } = {}) {
    return this._elem(attributes, children, "blockquote");
  }

  /**
   * Appends a \<dd\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Dd({ attributes, children } = {}) {
    return this._elem(attributes, children, "dd");
  }

  /**
   * Appends a \<div\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Div({ attributes, children } = {}) {
    return this._elem(attributes, children, "div");
  }

  /**
   * Appends a \<dl\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Dl({ attributes, children } = {}) {
    return this._elem(attributes, children, "dl");
  }

  /**
   * Appends a \<dt\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Dt({ attributes, children } = {}) {
    return this._elem(attributes, children, "dt");
  }

  /**
   * Appends a \<figcaption\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  FigCaption({ attributes, children } = {}) {
    return this._elem(attributes, children, "figcaption");
  }

  /**
   * Appends a \<figure\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Figure({ attributes, children } = {}) {
    return this._elem(attributes, children, "figure");
  }

  /**
   * Appends a \<hr\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Hr({ attributes, children } = {}) {
    return this._elem(attributes, children, "hr");
  }

  /**
   * Appends a \<menu\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Menu({ attributes, children } = {}) {
    return this._elem(attributes, children, "menu");
  }

  /**
   * Appends a \<pre\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Pre({ attributes, children } = {}) {
    return this._elem(attributes, children, "pre");
  }

  /**
   * Appends a \<abbr\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Abbr({ attributes, children } = {}) {
    return this._elem(attributes, children, "abbr");
  }

  /**
   * Appends a \<b\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  B({ attributes, children } = {}) {
    return this._elem(attributes, children, "b");
  }

  /**
   * Appends a \<bdi\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Bdi({ attributes, children } = {}) {
    return this._elem(attributes, children, "bdi");
  }

  /**
   * Appends a \<bdo\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Bdo({ attributes, children } = {}) {
    return this._elem(attributes, children, "bdo");
  }

  /**
   * Appends a \<br\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Br({ attributes, children } = {}) {
    return this._elem(attributes, children, "br");
  }

  /**
   * Appends a \<cite\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Cite({ attributes, children } = {}) {
    return this._elem(attributes, children, "cite");
  }

  /**
   * Appends a \<code\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Code({ attributes, children } = {}) {
    return this._elem(attributes, children, "code");
  }

  /**
   * Appends a \<data\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Data({ attributes, children } = {}) {
    return this._elem(attributes, children, "data");
  }

  /**
   * Appends a \<dfn\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Dfn({ attributes, children } = {}) {
    return this._elem(attributes, children, "dfn");
  }

  /**
   * Appends a \<em\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Em({ attributes, children } = {}) {
    return this._elem(attributes, children, "em");
  }

  /**
   * Appends a \<i\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  I({ attributes, children } = {}) {
    return this._elem(attributes, children, "i");
  }

  /**
   * Appends a \<kbd\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Kbd({ attributes, children } = {}) {
    return this._elem(attributes, children, "kbd");
  }

  /**
   * Appends a \<mark\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Mark({ attributes, children } = {}) {
    return this._elem(attributes, children, "mark");
  }

  /**
   * Appends a \<q\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Q({ attributes, children } = {}) {
    return this._elem(attributes, children, "q");
  }
  /**
   * Appends a \<rp\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Rp({ attributes, children } = {}) {
    return this._elem(attributes, children, "rp");
  }

  /**
   * Appends a \<rt\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Rt({ attributes, children } = {}) {
    return this._elem(attributes, children, "rt");
  }
  /**
   * Appends a \<ruby\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Ruby({ attributes, children } = {}) {
    return this._elem(attributes, children, "ruby");
  }

  /**
   * Appends a \<s\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  S({ attributes, children } = {}) {
    return this._elem(attributes, children, "s");
  }

  /**
   * Appends a \<samp\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Samp({ attributes, children } = {}) {
    return this._elem(attributes, children, "samp");
  }

  /**
   * Appends a \<small\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Small({ attributes, children } = {}) {
    return this._elem(attributes, children, "small");
  }

  /**
   * Appends a \<strong\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Strong({ attributes, children } = {}) {
    return this._elem(attributes, children, "strong");
  }

  /**
   * Appends a \<sub\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Sub({ attributes, children } = {}) {
    return this._elem(attributes, children, "sub");
  }

  /**
   * Appends a \<sup\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Sup({ attributes, children } = {}) {
    return this._elem(attributes, children, "sup");
  }

  /**
   * Appends a \<time\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Time({ attributes, children } = {}) {
    return this._elem(attributes, children, "time");
  }

  /**
   * Appends a \<u\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  U({ attributes, children } = {}) {
    return this._elem(attributes, children, "u");
  }

  /**
   * Appends a \<var\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Var({ attributes, children } = {}) {
    return this._elem(attributes, children, "var");
  }

  /**
   * Appends a \<wbr\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Wbr({ attributes, children } = {}) {
    return this._elem(attributes, children, "wbr");
  }
  /**
   * Appends a \<area\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Area({ attributes, children } = {}) {
    return this._elem(attributes, children, "area");
  }

  /**
   * Appends a \<audio\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Audio({ attributes, children } = {}) {
    return this._elem(attributes, children, "audio");
  }

  /**
   * Appends a \<img\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Img({ attributes, children } = {}) {
    return this._elem(attributes, children, "img");
  }

  /**
   * Appends a \<map\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Map({ attributes, children } = {}) {
    return this._elem(attributes, children, "map");
  }

  /**
   * Appends a \<track\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Track({ attributes, children } = {}) {
    return this._elem(attributes, children, "track");
  }

  /**
   * Appends a \<embed\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Embed({ attributes, children } = {}) {
    return this._elem(attributes, children, "embed");
  }

  /**
   * Appends a \<iframe\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  IFrame({ attributes, children } = {}) {
    return this._elem(attributes, children, "iframe");
  }

  /**
   * Appends a \<object\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Object({ attributes, children } = {}) {
    return this._elem(attributes, children, "object");
  }

  /**
   * Appends a \<picture\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Picture({ attributes, children } = {}) {
    return this._elem(attributes, children, "picture");
  }

  /**
   * Appends a \<portal\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Portal({ attributes, children } = {}) {
    return this._elem(attributes, children, "portal");
  }
  /**
   * Appends a \<source\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Source({ attributes, children } = {}) {
    return this._elem(attributes, children, "source");
  }
  /**
   * Appends a \<svg\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  SVG({ attributes, children } = {}) {
    console.error("SVG Elements are unsupported. This might get fixed later.");
    return this._elem(attributes, children, "svg");
  }
  /**
   * Appends a \<math\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Math({ attributes, children } = {}) {
    return this._elem(attributes, children, "math");
  }
  /**
   * Appends a \<canvas\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Canvas({ attributes, children } = {}) {
    return this._elem(attributes, children, "canvas");
  }
  /**
   * Appends a \<script\> to the chain. Why?
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Script({ attributes, children } = {}) {
    return this._elem(attributes, children, "script");
  }
  /**
   * Appends a \<del\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Del({ attributes, children } = {}) {
    return this._elem(attributes, children, "del");
  }
  /**
   * Appends a \<ins\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Ins({ attributes, children } = {}) {
    return this._elem(attributes, children, "ins");
  }
  /**
   * Appends a \<caption\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Caption({ attributes, children } = {}) {
    return this._elem(attributes, children, "caption");
  }
  /**
   * Appends a \<col\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Col({ attributes, children } = {}) {
    return this._elem(attributes, children, "col");
  }
  /**
   * Appends a \<colgroup\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  ColGroup({ attributes, children } = {}) {
    return this._elem(attributes, children, "colgroup");
  }

  /**
   * Appends a \<table\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Table({ attributes, children } = {}) {
    return this._elem(attributes, children, "table");
  }

  /**
   * Appends a \<tbody\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  TBody({ attributes, children } = {}) {
    return this._elem(attributes, children, "tbody");
  }

  /**
   * Appends a \<td\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Td({ attributes, children } = {}) {
    return this._elem(attributes, children, "td");
  }

  /**
   * Appends a \<tfoot\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Tfoot({ attributes, children } = {}) {
    return this._elem(attributes, children, "tfoot");
  }

  /**
   * Appends a \<th\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Th({ attributes, children } = {}) {
    return this._elem(attributes, children, "th");
  }

  /**
   * Appends a \<thead\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Thead({ attributes, children } = {}) {
    return this._elem(attributes, children, "thead");
  }

  /**
   * Appends a \<tr\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Tr({ attributes, children } = {}) {
    return this._elem(attributes, children, "tr");
  }
  /**
   * Appends a \<datalist\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Datalist({ attributes, children } = {}) {
    return this._elem(attributes, children, "datalist");
  }
  /**
   * Appends a \<fieldset\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Fieldset({ attributes, children } = {}) {
    return this._elem(attributes, children, "fieldset");
  }

  /**
   * Appends a \<form\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Form({ attributes, children } = {}) {
    return this._elem(attributes, children, "form");
  }

  /**
   * Appends a \<input\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Input({ attributes, children } = {}) {
    return this._elem(attributes, children, "input");
  }

  /**
   * Appends a \<label\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Label({ attributes, children } = {}) {
    return this._elem(attributes, children, "label");
  }

  /**
   * Appends a \<legend\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Legend({ attributes, children } = {}) {
    return this._elem(attributes, children, "legend");
  }

  /**
   * Appends a \<meter\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Meter({ attributes, children } = {}) {
    return this._elem(attributes, children, "meter");
  }

  /**
   * Appends a \<optgroup\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  OptGroup({ attributes, children } = {}) {
    return this._elem(attributes, children, "optgroup");
  }

  /**
   * Appends a \<option\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Option({ attributes, children } = {}) {
    return this._elem(attributes, children, "option");
  }

  /**
   * Appends a \<output\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Output({ attributes, children } = {}) {
    return this._elem(attributes, children, "output");
  }

  /**
   * Appends a \<progress\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Progress({ attributes, children } = {}) {
    return this._elem(attributes, children, "progress");
  }

  /**
   * Appends a \<select\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Select({ attributes, children } = {}) {
    return this._elem(attributes, children, "select");
  }

  /**
   * Appends a \<textarea\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  TextArea({ attributes, children } = {}) {
    return this._elem(attributes, children, "textarea");
  }

  /**
   * Appends a \<details\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Details({ attributes, children } = {}) {
    return this._elem(attributes, children, "details");
  }

  /**
   * Appends a \<dialog\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Dialog({ attributes, children } = {}) {
    return this._elem(attributes, children, "dialog");
  }

  /**
   * Appends a \<summary\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Summary({ attributes, children } = {}) {
    return this._elem(attributes, children, "summary");
  }

  /**
   * Appends a \<slot\> to the chain. why?
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Slot({ attributes, children } = {}) {
    return this._elem(attributes, children, "slot");
  }
  /**
   * Appends a \<template\> to the chain. why?
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Template({ attributes, children } = {}) {
    return this._elem(attributes, children, "template");
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
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Header({ attributes, children } = {}) {
    return this._elem(attributes, children, "header");
  }

  /**
   * Appends a \<nav\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Nav({ attributes, children } = {}) {
    return this._elem(attributes, children, "nav");
  }

  /**
   * Appends an \<a\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  A({ attributes, children } = {}) {
    return this._elem(attributes, children, "a");
  }

  /**
   * Appends an \<h1\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  H1({ attributes, children } = {}) {
    return this._elem(attributes, children, "h1");
  }

  /**
   * Appends an \<h2\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  H2({ attributes, children } = {}) {
    return this._elem(attributes, children, "h2");
  }

  /**
   * Appends an \<h3\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  H3({ attributes, children } = {}) {
    return this._elem(attributes, children, "h3");
  }

  /**
   * Appends an \<h4\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  H4({ attributes, children } = {}) {
    return this._elem(attributes, children, "h4");
  }

  /**
   * Appends an \<h5\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  H5({ attributes, children } = {}) {
    return this._elem(attributes, children, "h5");
  }

  /**
   * Appends an \<h6\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  H6({ attributes, children } = {}) {
    return this._elem(attributes, children, "h6");
  }

  /**
   * Appends a \<ul\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Ul({ attributes, children } = {}) {
    return this._elem(attributes, children, "ul");
  }

  /**
   * Appends an \<ol\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Ol({ attributes, children } = {}) {
    return this._elem(attributes, children, "ol");
  }

  /**
   * Appends an \<li\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Li({ attributes, children } = {}) {
    return this._elem(attributes, children, "li");
  }

  /**
   * Appends a \<button\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Button({ attributes, children } = {}) {
    return this._elem(attributes, children, "button");
  }

  /**
   * Appends a \<p\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  P({ attributes, children } = {}) {
    return this._elem(attributes, children, "p");
  }

  /**
   * Appends a \<span\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Span({ attributes, children } = {}) {
    return this._elem(attributes, children, "span");
  }

  /**
   * Appends a \<main\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Main({ attributes, children } = {}) {
    return this._elem(attributes, children, "main");
  }

  /**
   * Appends a \<section\> to the chain.
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Section({ attributes, children } = {}) {
    return this._elem(attributes, children, "section");
  }

  /**
   * Appends an element to the chain. For use when an element isn't suppored directly.
   * @param {string} name The name of this element
   * @param {{attributes:AttributeChain,children:{render:()=>Node[]}}} data The attributes and children of this element.
   */
  Element(name, { attributes, children }) {
    return this._elem(attributes, children, name);
  }
}

/**
 * A chain of attributes. This represents a list of every regular attribute, as well as a few additional methods for convenience.
 * @class
 */
export class AttributeChain {
  constructor() {
    /**
     * @type {{type:string,value:any}[]}
     */
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
        case "textcontent":
          elem.textContent = attrNode.value;
          break;
        case "immediate":
          attrNode.value(elem);
          break;
        case "classlist":
          elem.classList.add(...attrNode.value);
          break;
        case "event":
          elem.addEventListener(attrNode.value.type, attrNode.value.callback);
          break;
        default:
          elem.setAttribute(attrNode.type, attrNode.value);
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
   * Sets the element's `textContent`. While this method is useful for small things, it's generally better to use `.Text()` to add a text node to the element's children.
   * @param {string} text
   */
  TextContent(text) {
    this.nodes.push({ type: "textcontent", value: text });
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
   * Sets the element's `accept` attribute
   * @param {string} value
   */
  Accept(value) {
    this.nodes.push({ type: "accept", value });
    return this;
  }

  /**
   * Sets the element's `accept-charset` attribute
   * @param {string} value
   */
  AcceptCharset(value) {
    this.nodes.push({ type: "accept-charset", value });
    return this;
  }

  /**
   * Sets the element's `accessKey` attribute
   * @param {string} value
   */
  AccessKey(value) {
    this.nodes.push({ type: "accessKey", value });
    return this;
  }

  /**
   * Sets the element's `action` attribute
   * @param {string} value
   */
  Action(value) {
    this.nodes.push({ type: "action", value });
    return this;
  }

  /**
   * Sets the element's `allow` attribute
   * @param {string} value
   */
  Allow(value) {
    this.nodes.push({ type: "allow", value });
    return this;
  }

  /**
   * Sets the element's `alt` attribute
   * @param {string} value
   */
  Alt(value) {
    this.nodes.push({ type: "alt", value });
    return this;
  }

  /**
   * Sets the element's `as` attribute
   * @param {string} value
   */
  As(value) {
    this.nodes.push({ type: "as", value });
    return this;
  }

  /**
   * Sets the element's `async` attribute. Why?
   * @param {string} value
   */
  Async(value) {
    this.nodes.push({ type: "async", value });
    return this;
  }

  /**
   * Sets the element's `autocapitalize ` attribute
   * @param {string} value
   */
  AutoCapitalize(value) {
    this.nodes.push({ type: "autocapitalize ", value });
    return this;
  }

  /**
   * Sets the element's `autocomplete` attribute
   * @param {string} value
   */
  AutoComplete(value) {
    this.nodes.push({ type: "autocomplete", value });
    return this;
  }

  /**
   * Sets the element's `autoplay` attribute
   * @param {string} value
   */
  AutoPlay(value) {
    this.nodes.push({ type: "autoplay", value });
    return this;
  }

  /**
   * Sets the element's `capture` attribute
   * @param {string} value
   */
  Capture(value) {
    this.nodes.push({ type: "capture", value });
    return this;
  }

  /**
   * Sets the element's `charset` attribute
   * @param {string} value
   */
  Charset(value) {
    this.nodes.push({ type: "charset", value });
    return this;
  }

  /**
   * Sets the element's `checked` attribute
   * @param {string} value
   */
  Checked(value) {
    this.nodes.push({ type: "checked", value });
    return this;
  }

  /**
   * Sets the element's `cite` attribute
   * @param {string} value
   */
  Cite(value) {
    this.nodes.push({ type: "cite", value });
    return this;
  }

  /**
   * Sets the element's `cols` attribute
   * @param {string} value
   */
  Cols(value) {
    this.nodes.push({ type: "cols", value });
    return this;
  }

  /**
   * Sets the element's `colspan` attribute
   * @param {string} value
   */
  Colspan(value) {
    this.nodes.push({ type: "colspan", value });
    return this;
  }

  /**
   * Sets the element's `contenteditable` attribute
   * @param {string} value
   */
  ContentEditable(value) {
    this.nodes.push({ type: "contenteditable", value });
    return this;
  }

  /**
   * Sets the element's `controls` attribute
   * @param {string} value
   */
  Controls(value) {
    this.nodes.push({ type: "controls", value });
    return this;
  }

  /**
   * Sets the element's `coords` attribute
   * @param {string} value
   */
  Coords(value) {
    this.nodes.push({ type: "coords", value });
    return this;
  }

  /**
   * Sets the element's `crossorigin` attribute
   * @param {string} value
   */
  CrossOrigin(value) {
    this.nodes.push({ type: "crossorigin", value });
    return this;
  }

  /**
   * Sets the element's `csp` attribute
   * @param {string} value
   */
  CSP(value) {
    this.nodes.push({ type: "csp", value });
    return this;
  }

  /**
   * Sets the element's `data` attribute
   * @param {string} value
   */
  Data(value) {
    this.nodes.push({ type: "data", value });
    return this;
  }

  /**
   * Sets an element's custom data-* attribute
   * @param {string} name
   * @param {string} value
   */
  DataAttribute(name, value) {
    this.nodes.push({ type: "data-" + name, value });
    return this;
  }

  /**
   * Sets the element's `datetime` attribute
   * @param {string} value
   */
  DateTime(value) {
    this.nodes.push({ type: "datetime", value });
    return this;
  }

  /**
   * Sets the element's `decoding` attribute
   * @param {string} value
   */
  Decoding(value) {
    this.nodes.push({ type: "decoding", value });
    return this;
  }

  /**
   * Sets the element's `default` attribute
   * @param {string} value
   */
  Default(value) {
    this.nodes.push({ type: "default", value });
    return this;
  }

  /**
   * Sets the element's `defer` attribute. Why?
   * @param {string} value
   */
  Defer(value) {
    this.nodes.push({ type: "defer", value });
    return this;
  }

  /**
   * Sets the element's `dir` attribute
   * @param {string} value
   */
  Dir(value) {
    this.nodes.push({ type: "dir", value });
    return this;
  }

  /**
   * Sets the element's `dirname` attribute
   * @param {string} value
   */
  DirName(value) {
    this.nodes.push({ type: "dirname", value });
    return this;
  }

  /**
   * Sets the element's `disabled` attribute
   * @param {string} value
   */
  Disabled(value) {
    this.nodes.push({ type: "disabled", value });
    return this;
  }

  /**
   * Sets the element's `download` attribute
   * @param {string} value
   */
  Download(value) {
    this.nodes.push({ type: "download", value });
    return this;
  }

  /**
   * Sets the element's `draggable` attribute
   * @param {string} value
   */
  Draggable(value) {
    this.nodes.push({ type: "draggable", value });
    return this;
  }

  /**
   * Sets the element's `enctype` attribute
   * @param {string} value
   */
  EncType(value) {
    this.nodes.push({ type: "enctype", value });
    return this;
  }

  /**
   * Sets the element's `enterkeyhint` attribute
   * @param {string} value
   */
  EnterKeyHint(value) {
    this.nodes.push({ type: "enterkeyhint", value });
    return this;
  }

  /**
   * Sets the element's `for` attribute
   * @param {string} value
   */
  For(value) {
    this.nodes.push({ type: "for", value });
    return this;
  }

  /**
   * Sets the element's `form` attribute
   * @param {string} value
   */
  Form(value) {
    this.nodes.push({ type: "form", value });
    return this;
  }

  /**
   * Sets the element's `formaction` attribute
   * @param {string} value
   */
  FormAction(value) {
    this.nodes.push({ type: "formaction", value });
    return this;
  }

  /**
   * Sets the element's `formenctype` attribute
   * @param {string} value
   */
  FormEncType(value) {
    this.nodes.push({ type: "formenctype", value });
    return this;
  }

  /**
   * Sets the element's `formmethod` attribute
   * @param {string} value
   */
  FormMethod(value) {
    this.nodes.push({ type: "formmethod", value });
    return this;
  }

  /**
   * Sets the element's `formnovalidate` attribute
   * @param {string} value
   */
  FormNoValidate(value) {
    this.nodes.push({ type: "formnovalidate", value });
    return this;
  }

  /**
   * Sets the element's `formtarget` attribute
   * @param {string} value
   */
  FormTarget(value) {
    this.nodes.push({ type: "formtarget", value });
    return this;
  }

  /**
   * Sets the element's `headers` attribute
   * @param {string} value
   */
  Headers(value) {
    this.nodes.push({ type: "headers", value });
    return this;
  }

  /**
   * Sets the element's `height` attribute
   * @param {string} value
   */
  Height(value) {
    this.nodes.push({ type: "height", value });
    return this;
  }

  /**
   * Sets the element's `hidden` attribute
   * @param {string} value
   */
  Hidden(value) {
    this.nodes.push({ type: "hidden", value });
    return this;
  }

  /**
   * Sets the element's `high` attribute
   * @param {string} value
   */
  High(value) {
    this.nodes.push({ type: "high", value });
    return this;
  }

  /**
   * Sets the element's `hreflang` attribute
   * @param {string} value
   */
  HREFLang(value) {
    this.nodes.push({ type: "hreflang", value });
    return this;
  }

  /**
   * Sets the element's `http-equiv` attribute
   * @param {string} value
   */
  HTTPEquiv(value) {
    this.nodes.push({ type: "http-equiv", value });
    return this;
  }

  /**
   * Sets the element's `integrity` attribute
   * @param {string} value
   */
  Integrity(value) {
    this.nodes.push({ type: "integrity", value });
    return this;
  }

  /**
   * Sets the element's `inputmode` attribute
   * @param {string} value
   */
  InputMode(value) {
    this.nodes.push({ type: "inputmode", value });
    return this;
  }

  /**
   * Sets the element's `ismap` attribute
   * @param {string} value
   */
  IsMap(value) {
    this.nodes.push({ type: "ismap", value });
    return this;
  }

  /**
   * Sets the element's `itemprop` attribute
   * @param {string} value
   */
  ItemProp(value) {
    this.nodes.push({ type: "itemprop", value });
    return this;
  }

  /**
   * Sets the element's `kind` attribute
   * @param {string} value
   */
  Kind(value) {
    this.nodes.push({ type: "kind", value });
    return this;
  }

  /**
   * Sets the element's `label` attribute
   * @param {string} value
   */
  Label(value) {
    this.nodes.push({ type: "label", value });
    return this;
  }

  /**
   * Sets the element's `lang` attribute
   * @param {string} value
   */
  Lang(value) {
    this.nodes.push({ type: "lang", value });
    return this;
  }

  /**
   * Sets the element's `loading` attribute
   * @param {string} value
   */
  Loading(value) {
    this.nodes.push({ type: "loading", value });
    return this;
  }

  /**
   * Sets the element's `list` attribute
   * @param {string} value
   */
  List(value) {
    this.nodes.push({ type: "list", value });
    return this;
  }

  /**
   * Sets the element's `loop` attribute
   * @param {string} value
   */
  Loop(value) {
    this.nodes.push({ type: "loop", value });
    return this;
  }

  /**
   * Sets the element's `low` attribute
   * @param {string} value
   */
  Low(value) {
    this.nodes.push({ type: "low", value });
    return this;
  }

  /**
   * Sets the element's `max` attribute
   * @param {string} value
   */
  Max(value) {
    this.nodes.push({ type: "max", value });
    return this;
  }

  /**
   * Sets the element's `maxlength` attribute
   * @param {string} value
   */
  MaxLength(value) {
    this.nodes.push({ type: "maxlength", value });
    return this;
  }

  /**
   * Sets the element's `minlength` attribute
   * @param {string} value
   */
  MinLength(value) {
    this.nodes.push({ type: "minlength", value });
    return this;
  }

  /**
   * Sets the element's `media` attribute
   * @param {string} value
   */
  Media(value) {
    this.nodes.push({ type: "media", value });
    return this;
  }

  /**
   * Sets the element's `method` attribute
   * @param {string} value
   */
  Method(value) {
    this.nodes.push({ type: "method", value });
    return this;
  }

  /**
   * Sets the element's `min` attribute
   * @param {string} value
   */
  Min(value) {
    this.nodes.push({ type: "min", value });
    return this;
  }

  /**
   * Sets the element's `multiple` attribute
   * @param {string} value
   */
  Multiple(value) {
    this.nodes.push({ type: "multiple", value });
    return this;
  }

  /**
   * Sets the element's `muted` attribute
   * @param {string} value
   */
  Muted(value) {
    this.nodes.push({ type: "muted", value });
    return this;
  }

  /**
   * Sets the element's `name` attribute
   * @param {string} value
   */
  Name(value) {
    this.nodes.push({ type: "name", value });
    return this;
  }

  /**
   * Sets the element's `novalidate` attribute
   * @param {string} value
   */
  NoValidate(value) {
    this.nodes.push({ type: "novalidate", value });
    return this;
  }

  /**
   * Sets the element's `open` attribute
   * @param {string} value
   */
  Open(value) {
    this.nodes.push({ type: "open", value });
    return this;
  }

  /**
   * Sets the element's `optiumum` attribute
   * @param {string} value
   */
  Optiumum(value) {
    this.nodes.push({ type: "optiumum", value });
    return this;
  }

  /**
   * Sets the element's `pattern` attribute
   * @param {string} value
   */
  Pattern(value) {
    this.nodes.push({ type: "pattern", value });
    return this;
  }

  /**
   * Sets the element's `ping` attribute
   * @param {string} value
   */
  Ping(value) {
    this.nodes.push({ type: "ping", value });
    return this;
  }

  /**
   * Sets the element's `placeholder` attribute
   * @param {string} value
   */
  Placeholder(value) {
    this.nodes.push({ type: "placeholder", value });
    return this;
  }

  /**
   * Sets the element's `playinline` attribute
   * @param {string} value
   */
  PlayInline(value) {
    this.nodes.push({ type: "playinline", value });
    return this;
  }

  /**
   * Sets the element's `poster` attribute
   * @param {string} value
   */
  Poster(value) {
    this.nodes.push({ type: "poster", value });
    return this;
  }

  /**
   * Sets the element's `preload` attribute
   * @param {string} value
   */
  Preload(value) {
    this.nodes.push({ type: "preload", value });
    return this;
  }

  /**
   * Sets the element's `readonly` attribute
   * @param {string} value
   */
  Readonly(value) {
    this.nodes.push({ type: "readonly", value });
    return this;
  }

  /**
   * Sets the element's `referrerpolicy` attribute
   * @param {string} value
   */
  ReferrerPolicy(value) {
    this.nodes.push({ type: "referrerpolicy", value });
    return this;
  }

  /**
   * Sets the element's `rel` attribute
   * @param {string} value
   */
  Rel(value) {
    this.nodes.push({ type: "rel", value });
    return this;
  }

  /**
   * Sets the element's `required` attribute
   * @param {string} value
   */
  Required(value) {
    this.nodes.push({ type: "required", value });
    return this;
  }

  /**
   * Sets the element's `reversed` attribute
   * @param {string} value
   */
  Reversed(value) {
    this.nodes.push({ type: "reversed", value });
    return this;
  }

  /**
   * Sets the element's `role` attribute
   * @param {string} value
   */
  Role(value) {
    this.nodes.push({ type: "role", value });
    return this;
  }

  /**
   * Sets the element's `rows` attribute
   * @param {string} value
   */
  Rows(value) {
    this.nodes.push({ type: "rows", value });
    return this;
  }

  /**
   * Sets the element's `rowspan` attribute
   * @param {string} value
   */
  RowSpan(value) {
    this.nodes.push({ type: "rowspan", value });
    return this;
  }

  /**
   * Sets the element's `sandbox` attribute
   * @param {string} value
   */
  Sandbox(value) {
    this.nodes.push({ type: "sandbox", value });
    return this;
  }

  /**
   * Sets the element's `scope` attribute
   * @param {string} value
   */
  Scope(value) {
    this.nodes.push({ type: "scope", value });
    return this;
  }

  /**
   * Sets the element's `selected` attribute
   * @param {string} value
   */
  Selected(value) {
    this.nodes.push({ type: "selected", value });
    return this;
  }

  /**
   * Sets the element's `shape` attribute
   * @param {string} value
   */
  Shape(value) {
    this.nodes.push({ type: "shape", value });
    return this;
  }

  /**
   * Sets the element's `size` attribute
   * @param {string} value
   */
  Size(value) {
    this.nodes.push({ type: "size", value });
    return this;
  }

  /**
   * Sets the element's `sizes` attribute
   * @param {string} value
   */
  Sizes(value) {
    this.nodes.push({ type: "sizes", value });
    return this;
  }

  /**
   * Sets the element's `slot` attribute
   * @param {string} value
   */
  Slot(value) {
    this.nodes.push({ type: "slot", value });
    return this;
  }

  /**
   * Sets the element's `span` attribute
   * @param {string} value
   */
  Span(value) {
    this.nodes.push({ type: "span", value });
    return this;
  }

  /**
   * Sets the element's `spellcheck` attribute
   * @param {string} value
   */
  Spellcheck(value) {
    this.nodes.push({ type: "spellcheck", value });
    return this;
  }

  /**
   * Sets the element's `src` attribute
   * @param {string} value
   */
  Src(value) {
    this.nodes.push({ type: "src", value });
    return this;
  }

  /**
   * Sets the element's `srcdoc` attribute
   * @param {string} value
   */
  SrcDoc(value) {
    this.nodes.push({ type: "srcdoc", value });
    return this;
  }

  /**
   * Sets the element's `srclang` attribute
   * @param {string} value
   */
  SrcLang(value) {
    this.nodes.push({ type: "srclang", value });
    return this;
  }

  /**
   * Sets the element's `srcset` attribute
   * @param {string} value
   */
  SrcSet(value) {
    this.nodes.push({ type: "srcset", value });
    return this;
  }

  /**
   * Sets the element's `start` attribute
   * @param {string} value
   */
  Start(value) {
    this.nodes.push({ type: "start", value });
    return this;
  }

  /**
   * Sets the element's `step` attribute
   * @param {string} value
   */
  Step(value) {
    this.nodes.push({ type: "step", value });
    return this;
  }

  /**
   * Sets the element's `style` attribute
   * @param {string} value
   */
  Style(value) {
    this.nodes.push({ type: "style", value });
    return this;
  }

  /**
   * Sets the element's `tabindex` attribute
   * @param {string} value
   */
  TabIndex(value) {
    this.nodes.push({ type: "tabindex", value });
    return this;
  }

  /**
   * Sets the element's `target` attribute
   * @param {string} value
   */
  Target(value) {
    this.nodes.push({ type: "target", value });
    return this;
  }

  /**
   * Sets the element's `title` attribute
   * @param {string} value
   */
  Title(value) {
    this.nodes.push({ type: "title", value });
    return this;
  }

  /**
   * Sets the element's `translate` attribute
   * @param {string} value
   */
  Translate(value) {
    this.nodes.push({ type: "translate", value });
    return this;
  }
  /**
   * Sets the element's `type` attribute
   * @param {string} value
   */
  Type(value) {
    this.nodes.push({ type: "type", value });
    return this;
  }
  /**
   * Sets the element's `usemap` attribute
   * @param {string} value
   */
  UseMap(value) {
    this.nodes.push({ type: "usemap", value });
    return this;
  }

  /**
   * Sets the element's `value` attribute
   * @param {string} value
   */
  Value(value) {
    this.nodes.push({ type: "value", value });
    return this;
  }

  /**
   * Sets the element's `width` attribute
   * @param {string} value
   */
  Width(value) {
    this.nodes.push({ type: "width", value });
    return this;
  }

  /**
   * Sets the element's `wrap` attribute
   * @param {string} value
   */
  Wrap(value) {
    this.nodes.push({ type: "wrap", value });
    return this;
  }

  /**
   * Appends a load event to the element.
   * @param {(HTMLElement,Event)=>void} listener
   */
  OnLoad(listener) {
    this.nodes.push({ type: "event", value: { type: "load", listener } });
    return this;
  }

  /**
   * Appends a click event to the element.
   * @param {(HTMLElement,PointerEvent)=>void} listener
   */
  OnClick(listener) {
    this.nodes.push({ type: "event", value: { type: "onclick", listener } });
    return this;
  }

  /**
   * Appends an event to the element. For use when an event isn't supported directly.
   * @param {string} type name of the event to listen for
   * @param {(HTMLElement,Event)=>void} callback
   */
  Event(type, callback) {
    this.nodes.push({ type: "event", value: { type, callback } });
    return this;
  }

  /**
   * Appends an attribute to the element. For use when an attribute isn't suppored directly.
   * @param {string} name
   * @param {any} value
   */
  Attribute(name, value) {
    this.nodes.push({ type: "genericattr", value: { name, value } });
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
