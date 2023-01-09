import * as React from "react";
import { useState } from "react";
// クラス構文
// テンプレート文字列
// Promise
// async/await
//arrow

export const Test = () => {
  const [name, setName] = useState<string>("Tomo");
  console.log(`Hello ${name}`);
  const x: number = 0;
  console.log(x);
  const Hello = () => {
    setTimeout(() => {
      console.log("Hello"); // Execution 0.5sec
    }, 3000);
  };
  Hello();
  return (
    <>
      <h1>Hello</h1>
      <p>
        Hi <span>{name}</span>
      </p>
      <br />
      <p>なまえ</p>
      <input type="text" onChange={(event) => setName(event.target.value)} />
    </>
  );
};

export default Test;
