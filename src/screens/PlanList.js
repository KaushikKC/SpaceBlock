import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'

function PlanList() {
    const [select, setSelect] = useState(false)
  const [seleted, setSelected] = useState()
  const data = [
    { BlockId: 23573469, Price: '$5 ($20/yr)', BlockType: "Active", Provider: 'f01859603', Size: '200 GB', Reneval: 'true', Period: '3 month', Copies: '1', },
    { BlockId: 23573469, Price: '$5 ($20/yr)', BlockType: "Active", Provider: 'f01859603', Size: '200 GB', Reneval: 'true', Period: '3 month', Copies: '1', },
    { BlockId: 23573469, Price: '$5 ($20/yr)', BlockType: "Active", Provider: 'f01859603', Size: '200 GB', Reneval: 'true', Period: '3 month', Copies: '1', },
    { BlockId: 23573469, Price: '$5 ($20/yr)', BlockType: "Active", Provider: 'f01859603', Size: '200 GB', Reneval: 'true', Period: '3 month', Copies: '1', },
    // { BlockId: 23573469, Price: '$5 ($20/yr)', BlockType: "Active", Provider: 'f01859603', Size: '200 GB', Reneval: 'true', Period: '3 month', Copies: '1', },
    // { BlockId: 23573469, Price: '$5 ($20/yr)', BlockType: "Active", Provider: 'f01859603', Size: '200 GB', Reneval: 'true', Period: '3 month', Copies: '1', },
  ]

  const navigate = useNavigate();

  const ClickDeal = (key) => {
    setSelect(true)
    setSelected(key)
  }
  return (
    <div>
        <Navbar />
        <div className=' px-[222px]'>
            <h1 className='py-[40px] font-semibold text-2xl'>Block Plan List</h1>
            <div className='flex flex-col justify-center'>
            <table className='w-[1400px] table-fixed space-y-3 '>
              <tr className='mb-6'>
                <th>Blocck ID</th>
                <th>Price</th>
                <th>BlockType</th>
                <th>Provider</th>
                <th>Size</th>
                <th>Reneval</th>
                <th>Period</th>
                <th>Copies</th>
              </tr>
              {data.map((val, key) => {
              return (
                <tr key={key} onClick={() => ClickDeal(key)}  className={` ${seleted == key && 'bg-blue-500 text-white'} h-[100px] cursor-pointer text-center  shadow-lg mb-3`}>
                  <td>{val.BlockId}</td>
                  <td>{val.Price}</td>
                  <td>{val.BlockType}</td>
                  <td>{val.Provider}</td>
                  <td>{val.Size}</td>
                  <td>{val.Reneval}</td>
                  <td>{val.Period}</td>
                  <td>{val.Copies}</td>
                </tr>
              )
            })}
            </table>
            {select && 
              <button onClick={() => navigate('/files')} className='px-[40px] w-[160px] mt-[40px] py-[10px] text-white font-semibold bg-black rounded-md'>Buy Plan</button>
            }
            </div>
            
        </div>
    </div>
  )
}

export default PlanList