import React from "react";

function CreateTodo() {
  return (
    <div className='create-todo mt-9 w-[320px] sm:w-[580px] p-4 mx-auto gap-3  text-[#777a92] text-sm rounded-md flex bg-[#25273c] shadow-xl'>
      <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>
      <div>Create a new todo...</div>
    </div>
  );
}

export default CreateTodo;
