import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  function removeItemHandle(e) {
    const filteredList = list.filter(v => v.name !== e.target.name);
    setList(filteredList);
  }
  function makeEditableHandle() {
    setEditable(true);
  }
  function keyPressHandle(e, i) {
    if (e.key === "Enter") {
      setEditable(!editable);
      const copyList = [...list];
      copyList[i].name = e.target.value;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calorie}`}
              item={v}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={k}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;