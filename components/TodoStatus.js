import React from "react";

function TodoStatus() {
  return (
    <div className='data rounded-md flex flex-row gap-6 justify-center sm:justify-around mt-4 w-[320px] sm:w-[580px] text-[#777a92]  text-sm  mx-auto bg-[#25273c] p-4 drop-shadow-xl font-bold'>
      <div className='text-[#3a7bfd] '>All</div>
      <div className=''>Active</div>
      <div className=''>Completed</div>
    </div>
  );
}

export default TodoStatus;
