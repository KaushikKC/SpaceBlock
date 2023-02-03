import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

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
    background: '#181818',
    boxShadow: '0px 2px 2px 4px rgba(46, 220, 105, 0.3)',
    borderRadius: '18px',
    border: 0,
    padding: '30px',
  },
};

Modal.setAppElement('#connectWallet')

function Navbar() {
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(params) {
    setIsOpen(false);
  }

  return (
    <div id="connectWallet">
        <nav className='px-[222px] flex justify-between py-4 shadow-lg '>
          <div className='flex items-center'>
            <h1 onClick={() => navigate('/')} className='cursor-pointer font-bold text-lg mt-2'>SpaceBlock</h1>
            <p className='px-2 h-[20px] text-[8px] py-[4px] rounded-lg ml-2 mt-2 bg-black text-white'>Consumer</p>
          </div>
          
          <button onClick={openModal} className='px-[40px] py-[10px] text-white font-semibold bg-blue-500 rounded-md'>Connect</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Connect Modal"
          >
            <p>Content Here</p>
          </Modal>
        </nav>
    </div>
  )
}

export default Navbar