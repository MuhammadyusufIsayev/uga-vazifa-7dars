
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/category">Category</Link>
                <Link to="/product">Product</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </div>
    );
}

export default App;
