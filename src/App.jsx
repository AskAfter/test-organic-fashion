import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Collection from './components/Collection/Collection';
import FollowUs from './components/FollowUs/FollowUs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShopByCategories from './components/ShopByCategories/ShopByCategories';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <Header openModal={openModal} />
      <Hero />
      <ShopByCategories />
      <Collection />
      <AboutUs />
      <FollowUs />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

export default App;
