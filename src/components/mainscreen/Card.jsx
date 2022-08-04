import React, { useState } from 'react';
import  Modal  from './Modal';



const Card = (props) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  const handleDetails = () => {
    setShow(!show);
    setBookItem(props.item);
  }

  return (


    <>
      <div className='Container flex items-center  w-auto p-5 gap-6 border'>
        <div className="Left">
          <img className='max-w-[100px]' src={props.image} alt="" />
        </div>
        <div className="Right">

          <h4 className='text-xl font-semibold'>
            {props.judul}
          </h4>
          <p className='text-[13px]'>{props.publisher}</p>
          <button
            onClick={handleDetails}
            className='border rounded-xl text-orange-400 px-5 py-1 mt-4'>Details</button>
        </div>

        <Modal
          show={show} onClose={() => setShow(!show)} item={bookItem}
        />

      </div>
    </>








  )
}

export default Card