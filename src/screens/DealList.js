import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

function DealList() {
  const [select, setSelect] = useState(false)
  const [seleted, setSelected] = useState()
  const data = [
    { DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A', },
    { DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A', },
    { DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A',},
    {DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A',},
    {DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A',},
    {DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A',},
  ]

  const navigate = useNavigate();

  const ClickDeal = (key) => {
    setSelect(true)
    setSelected(key)
  }
  return (
    <div>
        <Navbar />
        <div className='px-[222px] '>
          <div className='py-[40px] flex justify-between'>
            <h1 className='font-semibold text-2xl'>Storage Deal List</h1>
            {select && 
              <button onClick={() => navigate('/createblock')} className='px-[42px] py-[8px] text-white font-semibold bg-black rounded-md'>Create Block</button>
            }
          </div>
          <div className='flex justify-center'>
            <table className='w-[1400px] table-fixed space-y-3 '>
              <tr className='mb-6'>
                <th>Deal ID</th>
                <th>Create Time</th>
                <th>Client</th>
                <th>Provider</th>
                <th>Piece Size</th>
                <th>Verified Deal</th>
                <th>Storage Fee</th>
                <th>Status</th>
              </tr>
              {data.map((val, key) => {
              return (
                <tr key={key} onClick={() => ClickDeal(key)}  className={` ${seleted == key && 'bg-blue-500 text-white'} h-[100px] cursor-pointer text-center  shadow-lg mb-3`}>
                  <td>{val.DealId}</td>
                  <td>{val.CreateTime}</td>
                  <td>{val.Client}</td>
                  <td>{val.Provider}</td>
                  <td>{val.PieceSize}</td>
                  <td>{val.VerfiedDeal}</td>
                  <td>{val.StorageFee}</td>
                  <td>{val.Status}</td>
                </tr>
              )
            })}
            </table>
          </div>
        </div>
    </div>
  )
}

export default DealList