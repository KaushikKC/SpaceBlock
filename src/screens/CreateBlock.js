import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import inactive from '../img/inactive.png'
import active from '../img/Active.png'
import bucket from '../img/Bucket.png'

function CreateBlock() {
    const [storageperoid, setStorageperoid] = useState('3 month')
    const [blocksize, setBlocksize] = useState()
    const [billed, setBilled] = useState()
    const [type, setType] = useState('Active')
    const [form, setForm] = useState([])

    const StoragePeroid = (val) => {
        setStorageperoid(val)
        setForm({...form, 'StoragePeroid': val})
    }
    const BlockSize = (val) => {
        setBlocksize(val)
        setForm({...form, 'BlockSize': val})
    }
    const Billed = (val) => {
        setBilled(val)
        setForm({...form, 'Billed': val})
    }

    const BlockType = (val) => {
        setType(val)
        setForm({...form, 'BlockType': val})
    }

    const handlechange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handlecheckchange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.checked });
    }

    const handlesubmit = () => {
      console.log(form)
    }

    const data = [
        { DealId: 23573469, CreateTime: '2023-02-01 18:57', Client: "f1vm....el5i", Provider: 'f01859603', PieceSize: '32.00 GiB', VerfiedDeal: 'true', StorageFee: 'N/A', Status: 'N/A', },
      ]
  return (
    <div>
        <Navbar />
        <div>
        <div className='px-[222px] '>
          <div className='py-[40px] flex justify-between'>
            <h1 className='font-semibold text-2xl'>Storage Deal List</h1>
            <p className='text-2xl font-semibold'>1GB ~ $0</p>
          </div>
          <div className=''>
            <h3 className='font-semibold'>Selected Storage Deal</h3>
            <div className='flex justify-center'>
            <table className='w-[1500px] mt-3 '>
            {data.map((val, key) => {
              return (
                <tr key={key} onClick={() => ClickDeal(key)}  className={` bg-blue-500 rounded-lg text-white h-[100px] cursor-pointer text-center  shadow-lg mb-3`}>
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
          <div>
            <h3 className='font-semibold my-2'>Block Type</h3>
            <div className='flex '>
            <div onClick={() => BlockType('Inactive')} className={`${type == 'Inactive' && 'bg-blue-500 text-white'} cursor-pointer rounded-xl h-[200px] w-[300px] shadow-lg mr-8`}>
                <div className=' flex mt-[16px] ml-[20px] mb-[16px]'>
                    <img className='w-[20px] h-[20px] mr-2' src={inactive} alt="" />
                    <h4>Inactive Block</h4>
                </div>
                <hr className='mb-[16px] opacity-50' />
                <p className='ml-[16px] text-[16px] leading-6'>Let’s consumer to store data, but can’t be accessed regularly. Have to turn the blocks to active blocks to access the data.</p>
            </div>
            <div onClick={() => BlockType('Active')} className={`${type == 'Active' && 'bg-blue-500 text-white'} cursor-pointer rounded-xl h-[200px] w-[300px] shadow-lg mr-8`}>
                <div className=' flex mt-[16px] ml-[20px] mb-[16px]'>
                    <img className='w-[20px] h-[20px] mr-2' src={active} alt="" />
                    <h4>Active Block</h4>
                </div>
                <hr className='mb-[16px] opacity-50' />
                <p className='ml-[16px] text-[16px] leading-6'>Makes consumer to store data anytime and be accessed anytime. Typically works as your other cloud storage services.</p>
            </div>
            <div onClick={() => BlockType('Bucket')} className={`${type == 'Bucket' && 'bg-blue-500 text-white'} cursor-pointer rounded-xl h-[200px] w-[300px] shadow-lg`}>
                <div className=' flex mt-[16px] ml-[20px] mb-[16px]'>
                    <img className='w-[20px] h-[20px] mr-2' src={bucket} alt="" />
                    <h4>Bucket Block</h4>
                </div>
                <hr className='mb-[16px] opacity-50' />
                <p className='ml-[16px] text-[16px] leading-6'>Blocks can be used more than a drive. Use with API, CLI, SDK.</p>
            </div>
            </div>
          </div>
          <div>
            <h3 className='font-semibold my-3'>Copies of data</h3>
            <input className='py-[20px] pl-[16px] border rounded-xl border-black' name='copies' value={form.copies} type="text" onChange={(e) => handlechange(e)} placeholder='Number of copies of data' />
            <div className='mt-3'>
            <input className='border-none w-6 h-6 rounded-4xl ml-2 mt-2' name='replicationwork' value={form.replicationwork} onChange={(e) => handlecheckchange(e)} type="checkbox"  /> Enable replication work
            </div>
            
          </div>
          <div>
            <h3 className='font-semibold my-3'>Peroid of Storage</h3>
            <div className='flex h-[64px]   cursor-pointer rounded-lg shadow-lg w-[460px] justify-evenly'>
                <p className={`${storageperoid == '1 month' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => StoragePeroid('1 month')}>1 month</p>
                <p className={`${storageperoid == '3 month' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => StoragePeroid('3 month')}>3 month</p>
                <p className={`${storageperoid == '9 month' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => StoragePeroid('9 month')}>9 month</p>
                <p className={`${storageperoid == '1 year' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => StoragePeroid('1 year')}>1 year</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold my-3'>Auto renewal</h3>
            <input className='border-none w-6 h-6 rounded-4xl ml-2 mt-2' name='automaticrenewal' value={form.automaticrenewal} onChange={(e) => handlecheckchange(e)} type="checkbox"  /> Enable automatic renewal

          </div>
          <div >
            <h3 className='font-semibold my-3'>Price</h3>
            <input className='py-[20px] pl-[16px] border rounded-xl border-black' type="text" name='price' value={form.price} onChange={(e) => handlechange(e)} placeholder='Base price per GB / FIL' />
            <div className='mt-3'>
            <input className='border-none w-6 h-6 rounded-4xl ml-2 mt-2' name='generateprice' value={form.generateprice} onChange={(e) => handlecheckchange(e)}  type="checkbox"  /> Auto generate the price
            </div>
            
          </div>
          <div>
            <h3 className='font-semibold my-3'>Block Size</h3>
            <div className='flex h-[64px]  cursor-pointer rounded-lg shadow-lg w-[468px] justify-evenly'>
                <p className={`${blocksize == '100 GB' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => BlockSize('100 GB')}>100 GB</p>
                <p className={`${blocksize == '200 GB' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => BlockSize('200 GB')}>200 GB</p>
                <p className={`${blocksize == '2 TB' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => BlockSize('2 TB')}>2 TB</p>
                <p className={`${blocksize == '10 TB' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => BlockSize('10 TB')}>10 TB</p>
                <p className={`${blocksize == '20 TB' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => BlockSize('20 TB')}>20 TB</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold my-3'>Vault</h3>
            <input className='border-none w-6 h-6 rounded-4xl ml-2 mt-2' name='vault' value={form.vault} onChange={(e) => handlecheckchange(e)} type="checkbox"  /> Enable vault
          </div>
          <div>
            <h3 className='font-semibold my-3'>Billed</h3>
            <div className='flex h-[64px]  cursor-pointer rounded-lg shadow-lg w-[185px] justify-evenly'>
                <p className={`${billed == 'Monthly' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => Billed('Monthly')}>Monthly</p>
                <p className={`${billed == 'Annual' && 'bg-blue-500 text-white'} py-[16px] px-[20px]`} onClick={() => Billed('Annual')}>Annual</p>
            </div>
          </div>
          <div>
            <h1 className='font-semibold my-3'>Block provider reputation</h1>
            <input className='border-none w-6 h-6 rounded-4xl ml-2 mt-2' name='ratingandreview' value={form.ratingandreview} onChange={(e) => handlecheckchange(e)} type="checkbox"  /> Enable rating & review
          </div>

          <button onClick={() => handlesubmit()} className='bg-black text-white px-[35px] py-[15px] rounded-lg my-4'>Create Plan</button>
        </div>
        </div>
    </div>
  )
}

export default CreateBlock