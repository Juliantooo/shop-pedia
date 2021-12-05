import CardProduct from '../components/CardProduct';
import useProducts from '../hooks/products';
import { useHistory } from 'react-router';

const GET = 'get';
const WOMENS_CLOTH = `category/women's clothing`

const WomensCloth = () => {
    const history = useHistory()
    const {products} = useProducts(GET,WOMENS_CLOTH)
    
    const handleClick=(id)=>{
        history.push(`/product/${id}`);
    }

    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
        <h1 className="text-xl font-semibold text-gray-600">Womens's Cloth Products</h1>
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

export default WomensCloth
