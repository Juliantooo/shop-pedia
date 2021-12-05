import { useHistory } from 'react-router';
import CardProduct from '../components/CardProduct';
import useProducts from '../hooks/products';

const GET = 'get';
const JEWELERY = `category/jewelery`

const Jewelery = () => {
    const history = useHistory()
    const {products} = useProducts(GET,JEWELERY)
    
    const handleClick=(id)=>{
        history.push(`/product/${id}`);
    }
    
    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
        <h1 className="text-xl font-semibold text-gray-600">Jewelery Products</h1>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {products.map((product)=> 
            <CardProduct key={product.id} 
            category={product.category} 
            image={product.image} 
            title={product.title} 
            price={product.price} 
            rating={product.rating}
            id={product.id}
            handleClick={handleClick}
            />)    
            }
        </div>
    </div>
    )
}

export default Jewelery
