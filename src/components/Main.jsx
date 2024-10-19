function Main() {
  return (
    <div className="container mx-auto py-12 md:px-12 px-7">
      <div className="flex flex-col md:flex-row md:items-center justify-around">
        <div className="md:w-1/2 md:order-2">
          <img src="SEO-Checklist.png" alt="" />
        </div>

        <div className="md:order-1 md:flex-1 text-center md:text-left md:mb-32">
          <h1 className="md:text-6xl text-3xl mt-8 mb-6 font-black md:max-w-lg">
            Welcome to Shopping List app
          </h1>
          <p className="opacity-75">
            You can save your notes and items savely and clearly.
          </p>

          <button className="bg-lightAntique rounded-full px-12 py-3 my-6 md:my-8 hover:bg-[#fcdd83]">
            Create List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
