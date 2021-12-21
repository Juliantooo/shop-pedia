import CardProduct from '../components/CardProduct';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CATEGORY = `women's clothing`

const WomensCloth = () => {
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
            <h1 className="text-xl font-semibold text-gray-600">Womens's Cloth Products</h1>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                {products.map((product) =>
                    <CardProduct key={product.id}
                        category={product.category}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        stock={product.stock}
                        id={product.id}
                        handleClick={handleClick}
                    />)
                }
            </div>
        </div>
    )
}

export default WomensCloth
