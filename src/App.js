import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home'
import NavigationBar from './routes/navigationbar/NavigationBar';
import Shop from './routes/shop/Shop';
import Authentication from './routes/Authentication/Authentication';
import Checkout from './routes/checkout/Checkout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
