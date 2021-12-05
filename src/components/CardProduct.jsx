import { StarIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Badge, Box } from '@chakra-ui/layout'
import React from 'react'

const CardProduct = ({id,category,image,title,price,rating,handleClick}) => {
    
      return (
        <Box maxW="xs" className="shadow-lg cursor-pointer text-gray-600" onClick={()=>handleClick(id)} overflow="hidden">
          <Image src={image} alt="product" w="100%" className="object-contain h-20 md:h-40 bg-white bg-opacity-40" />
    
          <Box p="3" className="space-y-2">
            <Box display="flex" alignItems="baseline">
              <Badge  px="2" colorScheme="yellow" textColor="black">
                {category}
              </Badge>
            </Box>
    
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
    
            <div className="flex flex-row justify-between items-center">
            <Box>
              $ {price}
            </Box>
    
            <Box display="flex" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating.rate ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {rating.count} reviews
              </Box>
            </Box>
            </div>
          </Box>
        </Box>
      )
}

export default CardProduct
