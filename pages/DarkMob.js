import React from "react";
import Image from "next/image";
import dmbg from "../public/images/bg-mobile-dark.jpg";

import TodoHead from "../components/TodoHead";
import CreateTodo from "./../components/CreateTodo";
import TodoList from "../components/TodoList";
import TodoStatus from "./../components/TodoStatus";

function DarkMob() {
  return (
    <div className='Main bg-[#161722]  h-full'>
      <TodoHead />
      <CreateTodo />
      <TodoList />
      <TodoStatus />
      <div className='text-[#4d5066] flex justify-center pt-10 h-96 text-sm '>
        Drag and drop to reorder list
      </div>
    </div>
  );
}

export default DarkMob;
