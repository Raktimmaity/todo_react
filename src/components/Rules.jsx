import React from 'react'

const Rules = () => {
  return (
    <>
     <div className="grid place-content-center items-center h-[100vh] ">
        <div className="text-center p-5 bg-[#ffffffe6] rounded-xl w-[350px] mt-0 mb-16 md:mb-0 md:w-[800px] md:mt-8">
          <h1 className="text-[#3949ab] text-3xl font-bold">How to use</h1>
            <div className="flex flex-wrap flex-col gap-4 justify-between mt-5 mb-3 p-3 bg-white rounded-md">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-0 md:gap-5">
                    <span className='bg-[#3949ab] text-white p-1 rounded-full w-[30px]'>1</span>
                    <span>Type any task and then click on add Task to add your upcomming task</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-0 md:gap-5">
                    <span className='bg-[#3949ab] text-white p-1 rounded-full w-[30px]'>2</span>
                    <input className='ml-3' type="checkbox" name="" id="" />
                    <span>By default the check box is unchecked it means you have to complete your task</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-0 md:gap-5">
                    <span className='bg-[#3949ab] text-white p-1 rounded-full w-[30px]'>3</span>
                    <input className='ml-3' type="checkbox" name="" id="" checked />
                    <span>If you finish your task your task looked liked this</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-0 md:gap-5">
                    <span className='bg-[#3949ab] text-white p-1 rounded-full w-[30px]'>4</span>
                    <span className="p-1 ml-3 bg-blue-500 text-white rounded-md"><i class="fa-solid fa-pen"></i> </span>
                    <span>You can edit your task by clicking on this icon</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-0 md:gap-5">
                    <span className='bg-[#3949ab] text-white p-1 rounded-full w-[30px]'>5</span>
                    <span className="p-1 ml-3 bg-red-500 text-white rounded-md"><i class="fa-solid fa-trash"></i> </span>
                    <span>You can delete your task by clicking on this icon</span>
                </div>
            </div>
          </div>
          </div> 
    </>
  )
}

export default Rules
