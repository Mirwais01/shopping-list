import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

// Function to load items from localStorage or return a list
const loadItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem("shoppingList");
  return storedItems ? JSON.parse(storedItems) : []; // Parse and return if exists, else return empty array
};

// Function to save items to localStorage
const saveItemsToLocalStorage = (items) => {
  localStorage.setItem("shoppingList", JSON.stringify(items)); // Convert items to JSON string and save
};

export default function CreateList() {
  const [items, setItems] = useState(loadItemsFromLocalStorage);

  // Add new item
  const addNewItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      name: "",
      quantity: 0,
      unit: "",
      price: 0,
      checked: false,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems); // Save to localStorage
  };

  // Delete item
  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems); // Save to localStorage
  };

  // Update item
  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems); // Save to localStorage
  };

  // Clear the list
  const clearList = () => {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
      saveItemsToLocalStorage([]); // Clear localStorage
    }
  };

  return (
    <div className="relative h-auto">
      <Navigation />
      <div className="md:w-1/2 md:mx-auto mx-2 py-7 text-center">
        <h1 className="font-black text-2xl sm:text-3xl">
          <span className="font-normal">Create</span> Shopping list
        </h1>
        <div className="w-52 mt-4 h-0.5 mx-auto bg-darkViolet"></div>

        <TitleCom />

        <div>
          <ul className="space-y-4">
            {items.map((item) => (
              <GiveItem
                key={item.id}
                item={item}
                onDelete={handleDeleteItem}
                updateList={handleUpdateItem}
              />
            ))}
          </ul>
          <div className="flex justify-between mx-3 my-6">
            <div className="space-x-2">
              <Button bgColor={"#8644A2"}>Save List</Button>
              <Button bgColor={"#CC2B52"} clickOn={clearList}>
                Clear List
              </Button>
            </div>
            <PlusBtn clickOn={addNewItem} bgColor={"#8644A2"}>
              &#43;
            </PlusBtn>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <Footer />
      </div>
    </div>
  );
}

function GiveItem({ item, onDelete, updateList }) {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unit, setUnit] = useState(item.unit);
  const [price, setPrice] = useState(item.price);

  // Handle the save (tick mark) action
  const handleSave = () => {
    const updatedItem = { ...item, name, quantity, unit, price };
    updateList(updatedItem); // Save the updated item to the parent state
    setIsEditing(false); // Exit editing mode
  };

  // Toggle to edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Delete item
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li
      className={`${
        !isEditing ? "grid grid-cols-1 px-0" : "grid grid-cols-6"
      } my-5 mt-9 items-center mx-2 md:mx-3 space-x-2 md:divide-x-2 md:divide-dashed md:divide-gray-400 border border-gray-300`}
    >
      {isEditing ? (
        // When in edit mode, show input fields
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="text-md outline-0 col-span-6 border-b border-b-gray-200 md:border-b-0 md:col-span-2 sm:text-base md:px-2 px-1 py-2"
            placeholder="Item-name"
          />
          <input
            value={quantity || ""}
            onChange={(e) => setQuantity(Number(e.target.value))}
            type="number"
            className="py-2 outline-0 col-span-1 md:col-span-1 border-r border-gray-200 md:px-2"
            placeholder="Count"
          />
          <input
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            type="text"
            className="py-2 outline-0 col-span-1 border-r border-r-gray-200 md:px-2"
            placeholder="Unit"
          />
          <input
            value={price || ""}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            className="py-2 outline-0 col-span-2 md:col-span-1 border-r border-r-gray-200 md:px-2"
            placeholder="Price"
          />
          <span className="col-span-2 md:col-span-1">
            <EditItemBtn bgColor={"#CC2B52"} clickOn={handleDelete}>
              &#215;
            </EditItemBtn>
            <EditItemBtn bgColor={"#8644A2"} clickOn={handleSave}>
              &#10003;
            </EditItemBtn>
          </span>
        </>
      ) : (
        // When not in edit mode, display the item details
        <ListItem item={item} onDelete={handleDelete} onEdit={handleEdit} />
      )}
    </li>
  );
}

function ListItem({ item, onDelete, onEdit }) {
  return (
    <li className="flex justify-between px-3 bg-gray-100 py-3">
      <p>
        {item.name} ({item.quantity} {item.unit}, price: {item.price})
      </p>
      <div className="space-x-1">
        <EditListItemBtn color={"green"} clickOn={onEdit}>
          &#9998; Edit
        </EditListItemBtn>
        <EditListItemBtn color={"#CC2B52"} clickOn={onDelete}>
          &#10006; Delete
        </EditListItemBtn>
      </div>
    </li>
  );
}

function TitleCom() {
  const [title, setTitle] = useState("");
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const storedTitle = localStorage.getItem("shoppingListTitle");
    if (storedTitle) {
      setTitle(storedTitle);
    }
  }, []);

  // Save title to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("shoppingListTitle", title);
  }, [title]);

  function handleTitle(e) {
    e.preventDefault();
    if (!title) return;
    setShowTitle((showTitle) => !showTitle);
  }

  return (
    <form>
      <div
        className={`flex justify-between ${
          title.length > 20 && "flex-col md:flex-row space-y-3 md:space-y-0"
        } me-3 mt-9 items-center space-x-4`}
      >
        {showTitle && (
          <h1
            title="Title"
            className="text-2xl md:text-3xl ms-3 font-semibold capitalize "
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
