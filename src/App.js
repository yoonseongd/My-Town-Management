import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "adsf",
    birthday: "111",
    gender: "2",
    job: "asdf",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "asdfasdf",
    birthday: "352",
    gender: "asdf",
    job: "qtqwr",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "zxcv",
    birthday: "djh",
    gender: "87",
    job: "mvb",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
