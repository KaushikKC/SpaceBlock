import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'

function Files() {
    const [select, setSelect] = useState(false)
    const [seleted, setSelected] = useState()
    const data = [
      { Name: 'shindata', CID: 'QmewkcP4zdNU4XQcKFPu3xyZ7otxJj6qmvqck8U4GLbBFR', Uploaded: "1/31/2023", Size: '425 B', Actions: ':',  },
      { Name: 'shindata', CID: 'QmewkcP4zdNU4XQcKFPu3xyZ7otxJj6qmvqck8U4GLbBFR', Uploaded: "1/31/2023", Size: '425 B', Actions: ':',  },
      { Name: 'shindata', CID: 'QmewkcP4zdNU4XQcKFPu3xyZ7otxJj6qmvqck8U4GLbBFR', Uploaded: "1/31/2023", Size: '425 B', Actions: ':', },
      {Name: 'shindata', CID: 'QmewkcP4zdNU4XQcKFPu3xyZ7otxJj6qmvqck8U4GLbBFR', Uploaded: "1/31/2023", Size: '425 B', Actions: ':', },
      // {DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A',},
      // {DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A',},
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
            <div className='py-[40px] flex justify-between'>
              <h1 className=' font-semibold text-2xl'>Files & Folder</h1>
              {select && 
              <button onClick={() => navigate('/')} className='px-[38px] py-[12px] text-white font-semibold bg-black rounded-xl'>Upload</button>
              }
              </div>
              <div className='flex justify-center'>
              <table className='w-[1400px] table-auto space-y-3 '>
                <tr className='mb-6'>
                  <th>Name</th>
                  <th>CID</th>
                  <th>Uploaded</th>
                  <th>Size</th>
                  <th>Actions</th>
                  
                </tr>
                {data.map((val, key) => {
                return (
                  <tr key={key} onClick={() => ClickDeal(key)}  className={` ${seleted == key && 'bg-blue-500 text-white'} h-[100px] rounded-lg cursor-pointer text-center  shadow-lg mb-3`}>
                    <td>{val.Name}</td>
                    <td>{val.CID}</td>
                    <td>{val.Uploaded}</td>
                    <td>{val.Size}</td>
                    <td>{val.Actions}</td>
              
                  </tr>
                )
              })}
              </table>
              </div>
          </div>
      </div>
    )
}

export default Files