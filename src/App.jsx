import { useSelector } from 'react-redux';

import AboutUs from './components/AboutUs';
import Collection from './components/Collection';
import FollowUs from './components/FollowUs';
import Header from './components/Header';
import Hero from './components/Hero';
import ShopByCategories from './components/ShopByCategories';
import Modal from './components/Modal';

function App() {
  const isModalOpen = useSelector(state => state.modal.isOpen);

  if (isModalOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return (
    <>
      <Header />
      <Hero />
      <ShopByCategories />
      <Collection />
      <AboutUs />
      <FollowUs />
      {isModalOpen && <Modal />}
    </>
  );
}

export default App;
