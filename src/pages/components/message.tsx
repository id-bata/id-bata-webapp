import { UIProvider, VStack, Text, Flex, Button, Spacer, Center, Divider } from "@yamada-ui/react"
import Image from "next/image"
import icon from '../../public/icon.svg'

type message={
    user:string,
    message:string
}
function Message(props:message){
    const {user,message}=props
    return(
        <Center>
        <div className="left-side">
            <Flex>
                <Image src={icon} width='80' height='80' alt='icon'/>
            <VStack>
                <Text className="user-name-text">
                    {user}      
                </Text>
                <Text className="chatroom-text">
                    {message}
                </Text>
            </VStack>
            </Flex>
        </div>
        </Center>
    )
    }
export default Message