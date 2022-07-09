import React from "react";
import Image from "next/image";
import sun from "../public/images/icon-sun.svg";

function TodoHead() {
  return (
    <div className='flex pt-16 justify-between items-center w-[320px] sm:w-[580px] mx-auto'>
      {/* TODO Tag */}
      <div className='TODO text-white text-2xl font-bold '>T O D O</div>

      {/* Sun Logo */}
      <div className='sun-logo  w-5'>
        <Image src={sun} />
      </div>
    </div>
  );
}

export default TodoHead;
