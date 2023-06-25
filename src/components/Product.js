import React from 'react'
import {useContext} from "react"
import {Link} from "react-router-dom"
import {BsPlus, BsEyeFill} from "react-icons/bs"

const Product = ({product}) => {
  console.log(product)
  const {id, image, category, title, price} = product

  return (
    <div>
      <div className='border border-[red} h-[300px] mb-4 relative overflow-hidden group transition'>

        <div className='w-full h-full flex justify-center items-center'>

            <div className='w-[200px] mx-auto flex justify-center items-center'>
              <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image}/>
            </div>



        </div>

        <div className='absolute top-6 right-11 group-hover:right-5 bg-yellow-400 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red'>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to = {`/product/id${id}`} className='w-12 h-12 bg-white flex items-center justify-center text-primary drop-shadow-xl'><BsEyeFill/></Link>
        </div>

      </div>

      <div>
        <div className='text-sm capitalize text-gray-500'>{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <h2 className='font-semibold'>$ {price}</h2>


      </div>



    </div>
  )
}

export default Product