import React from "react";
import Image from "next/image";
import dmbg from "../public/images/bg-mobile-dark.jpg";
import sun from "../public/images/icon-sun.svg";
import check from "../public/images/icon-check.svg";
import cross from "../public/images/icon-cross.svg";

function DarkMob() {
  return (
    <div className='Main bg-[#161722] bg-no-repeat bg-dmbg h-screen'>
      {/* Sun Logo */}
      <div className='sun-logo absolute w-5 top-10 right-6'>
        <Image src={sun} />
      </div>

      {/* TODO Tag */}
      <div className='TODO pt-10 text-white text-2xl pl-6 font-bold '>
        T O D O
      </div>

      {/* Create Todo */}
      <div className='create-todo mt-9 w-[320px] p-4 mx-auto gap-3  text-[#777a92] text-sm rounded-md flex bg-[#25273c] shadow-xl'>
        <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>
        <div>Create a new todo...</div>
      </div>

      {/* TODO Lists */}
      <div className='todo-list mt-4 w-[320px] text-[#777a92] rounded-md text-sm divide-y mx-auto divide-[#777a92] bg-[#25273c] shadow-xl'>
        {/* Tasks */}

        <div className='list flex p-4 items-center'>
          <div className='w-5 h-5 rounded-full flex items-center p-1 bg-gradient-to-r from-[#57ddff] to-[#c058f3]'>
            <Image src={check} />
          </div>

          <div className='line-through pl-4 w-[240px]'>
            Complete online JavaScript Course
          </div>

          <div className='ml-3 right-8 w-4 h-4'>
            <Image src={cross} />
          </div>
        </div>
        {/*  */}
        <div className='list flex p-4 items-center'>
          <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

          <div className='pl-4 w-[240px]'>Jog Around the park 3x</div>

          <div className='ml-3 right-8 w-4 h-4'>
            <Image src={cross} />
          </div>
        </div>
        {/*  */}
        <div className='list flex p-4 items-center'>
          <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

          <div className='pl-4 w-[240px]'>
            Complete Todo App on Frontend Mentor
          </div>

          <div className='ml-3 right-8 w-4 h-4'>
            <Image src={cross} />
          </div>
        </div>
        {/*  */}
        <div className='list flex p-4 items-center'>
          <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

          <div className='pl-4 w-[240px]'>10 minutes meditation</div>

          <div className='ml-3 right-8 w-4 h-4'>
            <Image src={cross} />
          </div>
        </div>
        {/*  */}
        <div className='list flex p-4 items-center'>
          <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

          <div className='pl-4 w-[240px]'>Read for 1 hour</div>

          <div className='ml-3 right-8 w-4 h-4'>
            <Image src={cross} />
          </div>
        </div>
        {/*  */}
        <div className='list flex p-4 items-center'>
          <div className='border border-[#777a92] w-5 h-5 rounded-full self-center'></div>

          <div className='pl-4 w-[240px]'>Pick up groceries</div>

          <div className='ml-3 right-8 w-4 h-4'>
            <Image src={cross} />
          </div>
        </div>
        <div className='items flex justify-between p-4 text-xs'>
          <div>5 items left</div>
          <div>Clear Completed</div>
        </div>
      </div>

      <div className='data rounded-md flex flex-row gap-6 justify-center mt-4 w-[320px] text-[#777a92]  text-sm  mx-auto bg-[#25273c] p-4 drop-shadow-xl font-bold'>
        <div className='text-[#3a7bfd] '>All</div>
        <div className=''>Active</div>
        <div className=''>Completed</div>
      </div>
      <div className='text-[#4d5066] flex justify-center pt-10  text-sm '>
        Drag and drop to reorder list
      </div>
    </div>
  );
}

export default DarkMob;
