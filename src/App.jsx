import AboutUs from './components/AboutUs/AboutUs';
import Collection from './components/Collection/Collection';
import FollowUs from './components/FollowUs/FollowUs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShopByCategories from './components/ShopByCategories/ShopByCategories';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopByCategories />
      <Collection />
      <AboutUs />
      <FollowUs />
    </>
  );
}

export default App;
