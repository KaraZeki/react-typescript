import React from "react";

type DateTyping = {
  name: string;
  age: number;
  isMarried: boolean;
  birthdaty:Date
};
const Home = (props: DateTyping) => {
  return (
    <div>
      {props.name}

      <p> Yaş: {props.age}</p>

      <p>{props.isMarried ? "Evli" : "Bekar"}</p>

    </div>
  );
};

export default Home;
