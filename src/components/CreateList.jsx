import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const myList = [
  {
    id: 1,
    name: "",
    quantity: 0,
    unit: "",
    price: 0,
    checked: false,
  },
];

export default function CreateList() {
  const [items, setItems] = useState(myList);
  const [openedItemId, setOpenedItemId] = useState(null);

  function addItem(newItem) {
    console.log(newItem);
    setItems([...items, newItem]);
  }

  function clearList() {
    window.confirm("Are you sure to clear the list?") && setItems([]);
  }

  //////////////////////////////
  function handleItemsCount() {
    const newId = crypto.randomUUID();
    const newItem = {
      id: newId,
      name: "",
      quantity: 0,
      unit: "",
      price: 0,
      checked: false,
    };
    addItem(newItem);
  }

  function handleDeleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  }

  function handleUpdateItem(newItem) {
    const updatedItems = items.map((item) =>
      item.id === newItem.id ? newItem : item
    );
    setItems(updatedItems);
  }

  return (
    <div className="relative h-auto">
      <Navigation />
      {/* create list section  */}
      <div className="md:w-1/2 md:mx-auto mx-2 py-7 text-center">
        <h1 className="font-black text-2xl sm:text-3xl">
          <span className="font-normal">Create</span> Shopping list
        </h1>
        <div className="w-52 mt-4 h-0.5 mx-auto bg-darkViolet"></div>

        <TitleCom />

        <div>
          <div className="mt-7 space-y-4">
            <div>
              {/* input of add item */}
              <ul className="space-y-4">
                {items.map((item) =>
                  item.id !== openedItemId ? (
                    <GiveItem
                      item={item}
                      key={item.id}
                      addItem={addItem}
                      onDelete={handleDeleteItem}
                      updateList={handleUpdateItem}
                      setOpenedItemId={setOpenedItemId}
                    />
                  ) : (
                    <ListItem item={item} handleDeleteItem={handleDeleteItem} />
                  )
                )}
              </ul>
            </div>

            {/* bottom buttons */}
            <div className="flex justify-between mx-3">
              <div className="space-x-2">
                <Button bgColor={"#8644A2"}>Add to List</Button>
                <Button clickOn={clearList} bgColor={"#CC2B52"}>
                  Clear List
                </Button>
              </div>
              <PlusBtn clickOn={handleItemsCount} bgColor={"#8644A2"}>
                &#43;
              </PlusBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <Footer />
      </div>
    </div>
  );
}

function GiveItem({ onDelete, item, updateList, setOpenedItemId }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleDeleteItem() {
    onDelete(item.id);
  }

  function handleEditItem() {
    const editedItem = {
      id: item.id,
      name,
      quantity,
      unit,
      price,
      checked: false,
    };
    // Call the function to update the list with the edited item
    // (You need to define this function in the parent component)
    updateList(editedItem);
    setOpenedItemId(item.id);
  }

  return (
    <li>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid grid-cols-6 items-center mx-3 space-x-2 divide-x-2 divide-dashed divide-gray-400 border border-gray-300"
      >
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
        <span>
          <EditItemBtn clickOn={handleDeleteItem} bgColor={"#CC2B52"}>
            &#215;
          </EditItemBtn>

          <EditItemBtn clickOn={handleEditItem} bgColor={"#8644A2"}>
            &#10003;
          </EditItemBtn>
        </span>
      </form>
    </li>
  );
}

function ListItem({ item, handleDeleteItem }) {
  return (
    <li className="flex justify-between px-4 mx-3 bg-gray-100 py-3">
      <p>
        {item.name}({item.quantity} {item.unit} , price : {item.price})
      </p>
      <div className="space-x-4">
        <EditListItemBtn color={"green"}>&#9998; Edit</EditListItemBtn>
        <EditListItemBtn clickOn={handleDeleteItem} color={"#CC2B52"}>
          &#10006; Delete
        </EditListItemBtn>
      </div>
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
      <div className="flex justify-between me-3 mt-9 items-center space-x-4">
        {showTitle && (
          <h1
            title="Title"
            className="md:text-2xl ms-3 font-semibold capitalize "
          >
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
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className="rounded-full text-white w-10 h-10 text-xl"
    >
      {children}
    </button>
  );
}

function EditItemBtn({ children, clickOn, bgColor }) {
  return (
    <button
      onClick={() => clickOn()}
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className="rounded-full text-white w-8 h-8 mx-1 text-xl"
    >
      {children}
    </button>
  );
}

function EditListItemBtn({ children, clickOn, color }) {
  return (
    <button
      onClick={(e) => clickOn(e)}
      style={{ color: `${color}` }}
      className="mx-1 px-2 text-sm border border-gray-300"
    >
      {children}
    </button>
  );
}
