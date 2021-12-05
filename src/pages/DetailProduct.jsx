import useProducts from '../hooks/products';
import {Image,Box,Button,Icon} from '@chakra-ui/react'
import {Stack} from '@chakra-ui/layout'
import { StarIcon } from '@chakra-ui/icons'
import { HiOutlineMinus,HiPlus } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import OtherProducts from '../components/OtherPorducts';

const GET = 'get';

const DetailProduct = ({match}) => {
    const {products} = useProducts(GET,match.params.id)

    return (
        <div className="w-full p-2 md:p-8 space-y-8 md:space-y-16 max-w-full">
            <h1 className="text-xl font-semibold text-gray-600">Men's Cloth Products</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-10 justify-center">
                <Box maxW='xs'>
                    <Image src={products.image} alt="product" className="object-containw-full bg-white bg-opacity-40" />
                </Box>
                <Box maxW='sm'>
                    <h1 className="text-xl font-semibold">{products.title}</h1>
                    <Box display="flex" alignItems="center">
                        { products.rating && Array(5)
                        .fill("")
                        .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i <products.rating.rate ? "teal.500" : "gray.300"}
                        />
                        ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            from {products.rating&&products.rating.count} reviews
                        </Box>
                    </Box>
                        <h1 className="font-bold text-3xl my-5">$ {products.price}</h1>
                        <div className="w-full border-b border-gray-400"/>
                        <p className="my-3">{products.description}</p>
                        <div className="w-full border-b border-gray-400"/>
                        <Stack direction='row' mt='5' spacing={4} align='center' className="justify-between" w='full'>
                            <Button colorScheme='blue' variant='outline'>
                                <HiOutlineMinus/>
                            </Button>
                            <p className="text-xl font-bold">2</p>
                            <Button colorScheme='blue' variant='outline'>
                                <HiPlus/>
                            </Button>
                        </Stack>
                        <Button colorScheme='blue' variant='solid' mt="5" w='full' >
                            <Icon as={AiOutlineShoppingCart} w="20px" h="20px" mx='5' />
                            Add to Cart
                        </Button>
                </Box>
            </div>
            <OtherProducts/>
        </div>
    )
}

export default DetailProduct
