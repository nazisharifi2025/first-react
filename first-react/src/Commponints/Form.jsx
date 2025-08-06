export default function(){
    return(
        <div className="w-[40%] mx-auto">
            <label htmlFor="Search">
  <span className="text-xl font-medium text-gray-700"> Search </span>

  <div className="relative">
    <input
      type="text"
      id="Search"
      className="mt-0.5 w-full rounded border-gray-300 pe-10 py-3.5 shadow-md sm:text-sm"
    />

    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
      <button
        type="button"
        aria-label="Submit"
        className="rounded-full py-4 px-4 text-gray-700 transition-colors hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </span>
  </div>
</label>
        </div>
    );
}