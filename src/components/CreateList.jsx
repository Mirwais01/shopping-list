import { useState } from "react";
import Navigation from "./Navigation";

const myList = [
  {
    id: 1,
    name: "Apple",
    quantity: 2,
    unit: "kg",
    price: 1000,
    checked: false,
  },
  // { id: 2, name: "Banana", quantity: 1, unit: "kg", checked: true },
  // { id: 3, name: "Orange", quantity: 3, unit: "kg", checked: false },
  // { id: 4, name: "Milk", quantity: 1, unit: "L", checked: true },
  // { id: 5, name: "Eggs", quantity: 2, unit: "dozen", checked: false },
];

export default function CreateList() {
  const [items, setItems] = useState(myList);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity,
      unit,
      price,
      checked: false,
    };
    addItem(newItem);
  }

  function addItem(newItem) {
    setItems([...items, newItem]);
    setName("");
    setQuantity(0);
    setPrice(0);
  }

  function clearList() {
    window.confirm("Are you sure to clear the list?") && setItems([]);
  }

  return (
    <div>
      <Navigation />
      {/* create list section  */}
      <div className="md:w-1/2 md:mx-auto mx-2 py-7 text-center">
        <h1 className="font-black text-2xl sm:text-3xl">
          <span className="font-normal">Create</span> Shopping list
        </h1>
        <div className="w-52 mt-4 h-0.5 mx-auto bg-darkViolet"></div>

        <TitleCom />

        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col mt-7 space-y-4">
            <div>
              <List items={items} />
            </div>
            {/* input of add item */}
            <div className="grid grid-cols-5 mx-3 space-x-2 divide-x-2 divide-dashed divide-gray-400 border border-gray-300">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="text-sm col-span-2 sm:text-base px-2 py-2 input-createlist"
                placeholder="Item-name"
              />
              <input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                type="number"
                className="py-2 input-createlist px-2"
                placeholder="Count"
              />
              <input
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                type="text"
                className="py-2 input-createlist px-2"
                placeholder="Unit"
              />
              <input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                type="number"
                className="py-2 input-createlist px-2"
                placeholder="price"
              />
            </div>

            <div className="flex justify-between mx-3">
              <div className="space-x-2">
                <Button clickOn={handleSubmit} bgColor={"#8644A2"}>
                  Add to List
                </Button>
                <Button clickOn={clearList} bgColor={"#CC2B52"}>
                  Clear List
                </Button>
              </div>
              <PlusBtn bgColor={"#8644A2"}>&#43;</PlusBtn>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((el) => (
        <ListItem item={el} key={el.id} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  return (
    <li className="grid grid-cols-5 mx-3 bg-gray-200 divide-dotted divide-x-2 divide-darkViolet space-x-6 px-3 py-2">
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span>{item.unit}</span>
      <span>{item.price}</span>
      <span>+, -</span>
    </li>
  );
}

function TitleCom() {
  const [title, setTitle] = useState("");
  const [showTitle, setShowTitle] = useState(false);

  function handleTitle(e) {
    e.preventDefault();
    if (!title) return;
    setShowTitle((showTitle) => !showTitle);
  }

  return (
    <form>
      <div className="flex justify-between mx-3 mt-9 items-center space-x-4">
        {showTitle && (
          <h1 title="Title" className="md:text-2xl font-semibold capitalize ">
            {title}
          </h1>
        )}
        {!showTitle && (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter your list name..."
            className="px-2 w-4/5 text-lg py-2 mx-3 border border-gray-400 rounded-lg input-createlist"
          />
        )}
        <PlusBtn clickOn={handleTitle} bgColor={"#8644A2"}>
          {showTitle ? <span>&#9998;</span> : <span>&#10003;</span>}
        </PlusBtn>
      </div>
    </form>
  );
}

function Button({ children, bgColor, clickOn }) {
  return (
    <button
      onClick={clickOn}
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className="save-btn md:px-7 py-2 px-3 sm:px-4"
    >
      {children}
    </button>
  );
}

function PlusBtn({ children, clickOn, bgColor }) {
  return (
    <button
      onClick={(e) => clickOn(e)}
      style={{ backgroundColor: `${bgColor}` }}
      className="rounded-full text-white w-10 h-10 text-xl"
    >
      {children}
    </button>
  );
}
