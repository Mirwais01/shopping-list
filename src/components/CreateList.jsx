import { useState } from "react";
import Navigation from "./Navigation";

const myList = [
  { id: 1, name: "Apple", quantity: 2, price: 1000, checked: false },
  // { id: 2, name: "Banana", quantity: 1, unit: "kg", checked: true },
  // { id: 3, name: "Orange", quantity: 3, unit: "kg", checked: false },
  // { id: 4, name: "Milk", quantity: 1, unit: "L", checked: true },
  // { id: 5, name: "Eggs", quantity: 2, unit: "dozen", checked: false },
];

export default function CreateList() {
  const [items, setItems] = useState(myList);
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity,
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

  return (
    <div>
      <Navigation />
      {/* create list section  */}
      <div className="md:w-1/2 w-4/5 mx-auto py-7 text-center">
        <h1 className="font-black text-2xl sm:text-3xl">
          <span className="font-normal">Create</span> Shopping list
        </h1>
        <div className="w-52 mt-4 h-0.5 mx-auto bg-darkViolet"></div>

        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col mt-12 space-y-4">
            <input
              type="text"
              placeholder="Enter your list name..."
              className="px-2 text-lg py-2 mx-3 input-createlist"
            />

            <div>
              <List items={items} />
            </div>

            {/* input of add item */}
            {isShow && (
              <div className="flex mx-3 space-x-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-1/3 text-sm sm:text-base px-2 py-2 input-createlist"
                  placeholder="Item-name"
                />
                <input
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  type="number"
                  className="py-2 w-1/3 input-createlist text-center px-2"
                  placeholder="Count"
                />
                <input
                  onChange={(e) => setPrice(Number(e.target.value))}
                  type="number"
                  className="py-2 w-1/3 input-createlist text-center px-2"
                  placeholder="price"
                />
              </div>
            )}

            <div className="flex justify-between mx-3">
              <div className="space-x-2">
                <button className="save-btn md:px-7 py-2 px-3 sm:px-4 bg-green-600">
                  Save List
                </button>
                <button className="save-btn md:px-7 py-2 px-3 sm:px-4 bg-red-500">
                  Clear List
                </button>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsShow(!isShow);
                }}
                className="rounded-full text-white bg-green-600 w-10 h-10 text-xl"
              >
                +
              </button>
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
    <li className="grid grid-cols-3 mx-3 rounded-lg bg-gray-300 divide-dotted divide-x-2 divide-darkViolet space-x-6 px-3 py-2">
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span>{item.price}</span>
    </li>
  );
}

function Button({ children }) {
  return (
    <button className="save-btn md:px-7 py-2 px-3 sm:px-4 bg-green-600">
      {children}
    </button>
  );
}
