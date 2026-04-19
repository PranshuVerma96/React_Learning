import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      
      <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
        
        <h1 className='text-xl font-bold'>1</h1>

        <div>
          <p className='text-lg leading-normal mb-10 text-white'>
            An image management system is designed to facilitate efficient organization, storage.
          </p>

          <div className='flex justify-between'>
            <button className='px-3 py-1 bg-black text-white rounded'>
              {props.tag}
            </button>

            <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full'>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default RightCardContent
