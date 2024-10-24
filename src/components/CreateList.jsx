import Navigation from "./Navigation";
export default function CreateList() {
  return (
    <div>
      <Navigation />
      {/* create list section  */}
      <div className="md:w-1/2 w-4/5 mx-auto py-7 text-center">
        <h1 className="font-black text-2xl sm:text-3xl">
          <span className="font-normal">Create</span> Shopping list
        </h1>
        <div className="w-52 mt-4 h-0.5 mx-auto bg-darkViolet"></div>

        <form action="">
          <div className="flex flex-col mt-12 space-y-4">
            <input
              type="text"
              placeholder="Enter your list name..."
              className="px-2 text-lg py-2 mx-3 input-createlist"
            />

            {/* input of add item */}
            <div className="flex mx-3 space-x-2">
              <input
                type="text"
                className="w-1/3 text-sm sm:text-base px-2 py-2 input-createlist"
                placeholder="Item-name"
              />
              <input
                type="number"
                className="py-2 w-1/3 input-createlist text-center"
                placeholder="Count"
              />
              <input
                type="number"
                className="py-2 w-1/3 input-createlist text-center"
                placeholder="price"
              />
            </div>

            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
}
