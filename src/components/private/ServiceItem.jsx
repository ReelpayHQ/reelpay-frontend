import React from 'react'

const ServiceItem = ({data}) => {
    
  return (
    <div className=''>
        <div className='flex items-center gap-5'>
            <div className='w-8 h-8 rounded-md bg-amber-600 flex items-center justify-center'>
                <data.icon size={20}/>
            </div>
            <h1>{data.title}</h1>
        </div>
        {/* <p className='text-center'>{data.description}</p> */}
        {/* <div>2</div> */}
    </div>
  )
}

export default ServiceItem