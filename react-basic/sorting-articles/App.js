import "./styles.css";
import ShowList from "./components/showList";
import React from "react";

export default function App() {
  const list = [
    {
      title: "Task 1",
      upvotes: 21,
      date: "2020-12-29"
    },
    {
      title: "Task 2",
      upvotes: 3,
      date: "2021-12-15"
    },
    {
      title: "Task 3",
      upvotes: 101,
      date: "2021-11-16"
    },
    {
      title: "Task 4",
      upvotes: 1,
      date: "2022-02-16"
    }
  ];

  const [flag, setFlag] = React.useState(true);

  function filterByUpvotes() {
    list.sort(function (a, b) {
      return b.upvotes - a.upvotes;
    });
    return list;
  }
  function filterByDate() {
    list.sort(function (a, b) {
      if (b.date.split("-")[0] !== a.date.split("-")[0])
        return b.date.split("-")[0] - a.date.split("-")[0];
      else if (b.date.split("-")[1] !== a.date.split("-")[1])
        return b.date.split("-")[1] - a.date.split("-")[1];
      else if (b.date.split("-")[2] !== a.date.split("-")[2])
        return b.date.split("-")[2] - a.date.split("-")[2];
      else return true;
    });
    return list;
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setFlag(true)}>By upvotes</button>
      <button onClick={() => setFlag(false)}>By recent</button>
      <ShowList list={flag ? filterByUpvotes() : filterByDate()} />
    </div>
  );
}
