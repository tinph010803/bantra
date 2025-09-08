import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IntroduceHome from "./pages/IntroduceHome";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import ShippingInfoPage from "./pages/ShippingInfoPage";
import Layout from "./layouts/Layout";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/introduce" element={<IntroduceHome />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment-method" element={<PaymentMethodPage />} />
        <Route path="/shipping-info" element={<ShippingInfoPage />} />



      </Route>
    </Routes>
  );
}

export default App;
