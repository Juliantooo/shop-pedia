import { useToast } from "@chakra-ui/react"

const Toast = ({
    title,
    status,
}) =>{
    const toast = useToast();
    return(
        <div>
            {()=>toast({
        title: title ? title : '',
        status: status? status : 'success',
        duration: 6000,
        isClosable: true,
    })}
        </div>
    )
}

export default Toast