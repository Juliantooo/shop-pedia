import { StarIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Badge, Box } from '@chakra-ui/layout'
import React from 'react'

const CardProduct = (category,image,title,price,rating) => {
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "Rp 200.900",
        reviewCount: 34,
        rating: 4,
    }
    
      return (
        <Box maxW="xs" className="shadow-lg cursor-pointer text-gray-600 " overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} w="100%" className="object-cover h-20 md:h-40" />
    
          <Box p="3">
            <Box display="flex" alignItems="baseline">
              <Badge  px="2" colorScheme="yellow" textColor="black">
                Terlaris
              </Badge>
            </Box>
    
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>
    
            <div className="flex flex-row justify-between items-center">
            <Box>
              {property.formattedPrice}
            </Box>
    
            <Box display="flex" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
            </div>
          </Box>
        </Box>
      )
}

export default CardProduct
