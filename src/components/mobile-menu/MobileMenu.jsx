import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = () => {
  const closeRef = useRef(null);
  const navigate = useNavigate();

  const linkToPath = (path = '') => {
    navigate(`/${path}`);
    closeRef.current.click();
  };

  return (
    <div
      id='drawer-right-example'
      className='fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800'
      tabIndex='-1'
      aria-labelledby='drawer-right-label'>
      <button
        ref={closeRef}
        type='button'
        data-drawer-hide='drawer-right-example'
        aria-controls='drawer-right-example'
        className='text-black bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
      </button>
      <div className='mt-8'>
        <div id='accordion-collapse' data-accordion='collapse'>
          <h2 id='accordion-collapse-heading-1'>
            <button
              type='button'
              className='flex items-center justify-between w-full font-medium text-left text-black border-0 focus:text-red-700'
              data-accordion-target='#accordion-collapse-body-1'
              aria-expanded='true'
              aria-controls='accordion-collapse-body-1'>
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-collapse-body-1'
            className='hidden'
            aria-labelledby='accordion-collapse-heading-1'>
            <div className=' font-light border-0'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>Flowbite</p>
            </div>
          </div>
        </div>

        {/* <button
          type='button'
          //   onClick={linkToPath}
          className='flex items-center justify-end w-full border-0 font-medium text-left text-black focus:bg-transparent'
          data-accordion-target='#accordion-arrow-icon-body-3'
          aria-expanded='false'
          aria-controls='accordion-arrow-icon-body-3'>
          <span>item2</span>
        </button>
        <button
          type='button'
          //   onClick={linkToPath}
          className='flex items-center justify-end w-full border-0 font-medium text-left text-black focus:bg-transparent'
          data-accordion-target='#accordion-arrow-icon-body-3'
          aria-expanded='false'
          aria-controls='accordion-arrow-icon-body-3'>
          <span>item3</span>
        </button> */}
      </div>
    </div>
  );
};

export default MobileMenu;
