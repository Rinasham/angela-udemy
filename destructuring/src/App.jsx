import React from "react";
import animals from "./data";
import cars from "./practice";

function App() {
  // ============ example =============
  const [cat, dog] = animals;
  console.log(cat, dog);
  // //　オプジェクトを分割代入する時は'キー名'が同じでないとダメ！
  // const { name, sound } = cat;
  // // 別名をつけることが可能
  // const { name: catName, sound: catSound } = cat;
  // // デフォルト値を設定できる
  // const { name = "Fluffy", sound = "Purr" } = cat;

  // ==================================

  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;

  return (
    <div className="container">
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
