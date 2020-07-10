const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//고객 목록을 불러주는 custorms api
app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`listening on port  ${port}`));
