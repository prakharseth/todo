import React from "react";
import check from "../public/images/icon-check.svg";
import cross from "../public/images/icon-cross.svg";
import Image from "next/image";

function TodoList() {
  return (
    <div className='todo-list mt-4 w-[320px] sm:w-[580px] text-[#777a92] rounded-md text-sm divide-y mx-auto divide-[#777a92] bg-[#25273c] shadow-xl'>
      {/* Tasks */}

      <div className='list flex p-4 items-center'>
        <div className='w-5 h-5 rounded-full flex items-center p-1 bg-gradient-to-r from-[#57ddff] to-[#c058f3]'>
          <Image src={check} />
        </div>

        <div className='line-through pl-4 w-[240px]'>
          Complete online JavaScript Course
        </div>

        <div className='ml-3 sm:ml-72 w-4 h-4'>
          <Image src={cross} />
        </div>
      </div>
      {/*  */}
      <div className='list flex p-4 items-center'>
        <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

        <div className='pl-4 w-[240px]'>Jog Around the park 3x</div>

        <div className='ml-3 sm:ml-72 w-4 h-4'>
          <Image src={cross} />
        </div>
      </div>
      {/*  */}
      <div className='list flex p-4 items-center'>
        <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

        <div className='pl-4 w-[240px]'>
          Complete Todo App on Frontend Mentor
        </div>

        <div className='ml-3 sm:ml-72 w-4 h-4 '>
          <Image src={cross} />
        </div>
      </div>
      {/*  */}
      <div className='list flex p-4 items-center'>
        <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

        <div className='pl-4 w-[240px]'>10 minutes meditation</div>

        <div className='ml-3 sm:ml-72 w-4 h-4'>
          <Image src={cross} />
        </div>
      </div>
      {/*  */}
      <div className='list flex p-4 items-center'>
        <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

        <div className='pl-4 w-[240px]'>Read for 1 hour</div>

        <div className='ml-3 sm:ml-72 w-4 h-4'>
          <Image src={cross} />
        </div>
      </div>
      {/*  */}
      <div className='list flex p-4 items-center'>
        <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

        <div className='pl-4 w-[240px]   '>
          Pick up groceries and get back to home as soon as possible
        </div>

        <div className='ml-3 sm:ml-72 w-4 h-4'>
          <Image src={cross} />
        </div>
      </div>
      <div className='items flex justify-between p-4 text-xs'>
        <div>5 items left</div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
}

export default TodoList;
