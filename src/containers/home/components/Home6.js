

import React, { useState } from 'react';
import Product1 from './Product1';
import Product2 from './Product2';

const Home6 = () => {
  const [monthlyButtonStyle, setMonthlyButtonStyle] = useState('text-white text-xl bg-yellow p-3 rounded-full w-20');
  const [yearlyButtonStyle, setYearlyButtonStyle] = useState('text-black text-xl p-3 rounded-full w-20');
  const [selectedProduct, setSelectedProduct] = useState('product1');

  const handleMonthlyButtonClick = () => {
    setMonthlyButtonStyle('text-white text-xl bg-yellow p-3 rounded-full w-20');
    setYearlyButtonStyle('text-black text-xl p-3 rounded-full w-20');
    setSelectedProduct('product1');
  };

  const handleYearlyButtonClick = () => {
    setYearlyButtonStyle('text-white text-xl bg-yellow p-3 rounded-full w-20');
    setMonthlyButtonStyle('text-black text-xl p-3 rounded-full w-20');
    setSelectedProduct('product2');
  };

  let product = null;
  if (selectedProduct === 'product1') {
    product = <Product1 />;
  } else if (selectedProduct === 'product2') {
    product = <Product2 />;
  }

  return (
    <div className='w-screen pt-20'>
      <div className='flex flex-col justify-center items-center pb-20'>
        <h4 className='text-black text-4xl py-2'>جدول تعرفه</h4>
        <img className='py-3' src='/image/coffee_underline.png' />
        <p className='text-black text-center'>
          در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
          <br />
          در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ
        </p>
      </div>
      <div className='flex justify-center'>
        <button className={monthlyButtonStyle} onClick={handleMonthlyButtonClick}>
          ماهانه
        </button>
        <button className={yearlyButtonStyle} onClick={handleYearlyButtonClick}>
          سالانه
        </button>
      </div>
      {product}
    </div>
  );
};

export default Home6;


















{/*
import React, { useState } from 'react';
import Product1 from './Product1'
import Product2 from './Product2'
const Home6 = () =>{
  const [monthlyButtonStyle, setMonthlyButtonStyle] = useState('text-black text-xl p-3 rounded-full w-20');
  const [yearlyButtonStyle, setYearlyButtonStyle] = useState('text-black text-xl p-3 rounded-full w-20');
  
  const handleMonthlyButtonClick = () => {
    setMonthlyButtonStyle('text-white text-xl bg-yellow p-3 rounded-full w-20');
    setYearlyButtonStyle('text-black text-xl p-3 rounded-full w-20');
  };

  const handleYearlyButtonClick = () => {
    setYearlyButtonStyle('text-white text-xl bg-yellow p-3 rounded-full w-20');
    setMonthlyButtonStyle('text-black text-xl p-3 rounded-full w-20');
  };
    return(
        
      <div className=' w-screen pt-20 '>
      <div className='flex flex-col justify-center items-center pb-20 '>
        <h4 className='text-black text-4xl py-2'> جدول تعرفه    </h4>
        <img className='py-3' src='/image/coffee_underline.png' />
        <p className='text-black text-center'>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
          <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
      </div>
      <div className='flex justify-center '>
        <button className={monthlyButtonStyle} onClick={handleMonthlyButtonClick}> ماهانه</button>
        <button className={yearlyButtonStyle} onClick={handleYearlyButtonClick}> سالانه</button>
      </div>
      <Product1 />
      <Product2/>


    
    </div>
    )
}

export default  Home6 */}