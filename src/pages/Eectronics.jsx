import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CardProduct from '../components/CardProduct';

const CATEGORY = `electronics`

const MensCloth = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const allProducts = useSelector(state => state.products.products.length > 0
        ? state.products.products
        : JSON.parse(localStorage.getItem('allProducts')));

    const handleClick = (id) => {
        history.push(`/${id}`);
    }

    const filterProductsByCategory = () => {
        const filteredProducts = allProducts.filter((product) => product.category === CATEGORY);
        setProducts(filteredProducts)
    }

    useEffect(() => {
        filterProductsByCategory()
    }, [])


    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
            <h1 className="text-xl font-semibold text-gray-600">Electronics Products</h1>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                {products.map((product) =>
                    <CardProduct key={product.id}
                        category={product.category}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        id={product.id}
                        stock={product.stock}
                        handleClick={handleClick}
                    />)
                }
            </div>
        </div>
    )
}

export default MensCloth
