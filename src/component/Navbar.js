import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'


const customStyles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '340px',
    height: '400px',
    background: 'white',
    boxShadow: '0px 2px 2px 4px rgba(46, 220, 105, 0.3)',
    borderRadius: '18px',
    border: 0,
    padding: '30px',
  },
};



// Modal.setAppElement('#connectWallet')

function Navbar({AccountType}) {
  const navigate = useNavigate();
  const [Account, setAccount] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const { activate, active, account, deactivate } = useWeb3React();

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  
  const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });
  
  const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
    
  });

  const changeAccount = (acc) => {
    setAccount(acc)
    AccountType(acc)
  }

  function openModal() {
    setIsOpen(true);
    console.log(active)
    console.log(account)
  }

  function closeModal(params) {
    setIsOpen(false);
  }

  return (
    <div id="connectWallet">
        <nav className='px-[222px] flex justify-between py-4 shadow-lg '>
          <div className='flex items-center'>
            <h1 onClick={() => navigate('/')} className='cursor-pointer font-bold text-lg mt-2'>SpaceBlock</h1>
            <p className='px-2 h-[20px] text-[8px] py-[4px] rounded-lg ml-2 mt-2 bg-black text-white'>{Account}</p>
          </div>
          
          {active ? 
              <button onClick={deactivate} className='px-[40px] py-[10px] text-white font-semibold bg-blue-500 rounded-md'>{account}</button>
              :
              
              <button onClick={openModal} className='px-[40px] py-[10px] text-white font-semibold bg-blue-500 rounded-md'>Connect</button>
        }
          
          
          <Modal
            appElement={document.getElementById('#connectWallet')}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Connect Modal"
          >
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col items-center h-[150px] justify-evenly'>
                <h3 className='font-bold text-xl'>Connect</h3>
                <p className=''>Choose account type</p>
                <div className='flex h-[64px]  cursor-pointer rounded-lg shadow-lg w-[215px] items-center justify-evenly'>
                  <p className={`${Account == 'Consumer' && 'bg-blue-500 rounded-lg text-white'}   py-[16px] px-[20px]`} onClick={() => changeAccount('Consumer')}>Consumer</p>
                  <p className={`${Account == 'Provider' && 'bg-blue-500 rounded-lg text-white'} py-[16px] px-[20px]`} onClick={() => changeAccount('Provider')}>Provider</p>
                </div>
              </div>
              <div className='flex flex-col space-y-2 mt-4 items-center h-[150px] justify-evenly'>
                <p className=''>SignIn Wallet</p>
                <button className='bg-blue-500 px-8 py-2 rounded-lg text-white' onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
                <button className='bg-blue-500 px-10 py-2 rounded-lg text-white' onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
                <button className='bg-blue-500 px-14 py-2 rounded-lg text-white' onClick={() => { activate(Injected) }}>Metamask</button>
              </div>
            </div>
            

            {/* <button onClick={deactivate}>Disconnect</button> */}
          </Modal>
        </nav>
    </div>
  )
}

export default Navbar