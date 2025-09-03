import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IntroduceHome from "./pages/IntroduceHome";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
// import IntroducePage from "./pages/IntroducePage";
import Layout from "./layouts/Layout";
import Login from "./components/Login";
// import Contact from "./pages/Contact";
// import ServicesPage from "./pages/ServicesPage";
// import BeautyKnowledge from "./pages/BeautyKnowledge";
// import ServiceNews from "./pages/ServiceNews";
// import ProductNatural from "./pages/ProductNatural"
// import FacialTreatment from "./pages/FacialTreatment";
// import ProductFullBody from "./pages/ProductFullBody";
// import LosingWeight from "./pages/LosingWeight";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import ProductDetail from "./pages/ProductDetail";
// import ShoppingCart from "./pages/ShoppingCart";
// import CheckoutPage from "./pages/CheckoutPage";
// import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/introduce" element={<IntroduceHome />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Uncomment the following lines when the respective components are available */}
        {/* <Route path="/introduce" element={<IntroducePage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<ServicesPage />} />
         <Route path="/news/beauty-knowledge" element={<BeautyKnowledge />} />
         <Route path="/news/service-news" element={<ServiceNews />} />
         <Route path="/products/natural-cosmetics" element={<ProductNatural />} />
         <Route path="/products/facial-treatment" element={<FacialTreatment />} />
         <Route path="/products/body-whitening" element={<ProductFullBody />} />
         <Route path="/products/weight-loss" element={<LosingWeight />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/cart" element={<ShoppingCart />} />
         <Route path="/checkout" element={<CheckoutPage />} />
         <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/introduce" element={<IntroducePage />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news/beauty-knowledge" element={<BeautyKnowledge />} />
        <Route path="/news/service-news" element={<ServiceNews />} />
        <Route path="/products/natural-cosmetics" element={<ProductNatural />} />
        <Route path="/products/facial-treatment" element={<FacialTreatment />} />
        <Route path="/products/body-whitening" element={<ProductFullBody />} />
        <Route path="/products/weight-loss" element={<LosingWeight />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        

      </Route>
    </Routes>
  );
}

export default App;
