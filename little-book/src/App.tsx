import React from "react";
import "./App.css";
import { SideBar } from "./containers/sidebar/SideBar";
import BlogsContainer from "./containers/BlogsContainer/BlogsContainer";
import BlogDescription from "./components/BlogDescription/BlogDescription";

function App() {

  const mock = {
        "title": "Summer Time - A Long Tale",
        "details": "Most of us have, at some point, considered what we would do if we could travel back in time. Maybe we would give ourselves some hot investment advice and become millionaires, or change history for the better, or witness our favorite historical event. If I could travel back in time and do one thing, I wouldn’t cheat on the stock market, or kill Hitler. I would simply give myself a few words of advice. What follows are some of the most important lessons I’ve learned in life- from books, from hard-fought experience, from friends, teachers and mentors much wiser than myself. Some of these lessons took me a very long time to learn- and while I wish I could have learned them faster, it would have taken me even longer if I didn’t have help. Sadly, we can’t time travel, but what we can do is learn from others, which is a hell of a lot faster than trying to figure things out for ourselves. Here are 40 little knowledge bombs that, in my opinion, took me way too long to learn.",
        "photo": "https://cdn.mos.cms.futurecdn.net/E3JYf6eJHQawCL2AR5cBv4.jpg",
        "type": "International"
    }
  return <div className="App">
    <div className="container">
      <SideBar />
      <BlogsContainer />
      <BlogDescription  {...mock} />
    </div>
  </div>;
}

export default App;
