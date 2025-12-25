import React, {useState} from 'react'

function Navbar() {
      const [dropdown, setDropdown] = useState(false);
  function dropdownTrigger() {
    setDropdown(!dropdown)
  }
  return (
        <div class="flex flex-row space-x-2 mx-4 mt-4 ">
          <div className='flex-col flex relative' ><a className='hover:cursor-pointer bg-orange-300 p-2 rounded-lg ' onClick={dropdownTrigger} ><div className='flex flex-row' >Products{!dropdown ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          }</div>
          </a>  {dropdown ? <div className="flex absolute bg-white rounded-xl p-2 top-12 flex-col">
            <a href="#item1">Solar Panels</a>
            <a href="#item2">Inverters</a>
            <a href="#item3">Batteries</a>
            <a href="#item3">Stablizers</a>
            <a href="#item3">Cables</a>
            <a href="#item3">Others</a>
          </div> :
            <div />}</div>
          <a className='bg-orange-300 p-2 rounded-lg' href="#">Services</a>
          <a className='bg-orange-300 p-2 rounded-lg' href="#">Eligibility Criteria</a>
          <a className='bg-orange-300 p-2 rounded-lg' href="#">Subsidy by Government</a>
          <a className='bg-orange-300 p-2 rounded-lg' href="#">Application Process</a>
          <a className='bg-orange-300 p-2 rounded-lg' href="#">Contact Us</a>
          <a className='bg-orange-300 p-2 rounded-lg' href="#">Application Form</a>

        </div>
  )
}

export default Navbar