import { Signal } from "./signals.js";
import { Page, ElementChain, AttrChain, Solo } from "./dom.js";

function Post(data) {
  return new Solo(
    new AttrChain().Class("post"),
    new ElementChain()
      .H3(new AttrChain().Text(data.author))
      .Span(new AttrChain().Text(data.text))
  );
}

const posts = [
  {
    author: "Anthony",
    text: "Hello World!",
  },
  {
    author: "Dave",
    text: "Hello World!",
  },
  {
    author: "World",
    text: "Hello Anthony and Dave!",
  },
  {
    author: "Fish",
    text: "🐟",
  },
  {
    author: "Goose",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt nobis ex architecto quam vitae quas autem. Nihil mollitia fugit et, distinctio iure placeat non saepe alias laboriosam autem illo velit ea quos tempore nam. Tempora vel eligendi, ab ut nobis exercitationem vero nam praesentium debitis aliquid. Repellendus, vel sunt.",
  },
];

function PostGroup() {
  return new Solo(
    new AttrChain().Class("post-group"),
    new ElementChain().Many(
      ...posts.map((postData) => Post.bind(null, postData))
    )
  );
}

new Page().Component(PostGroup).render();
