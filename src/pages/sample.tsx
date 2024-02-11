import { UIProvider,VStack,Text,Flex,Button,Spacer,Center,Divider} from "@yamada-ui/react"
import Link from 'next/link'

function Sample(){
    return (
        <div>
        <Center>
            <Text className="chatroom-title-text">
                最近あった怖い話
            </Text>
        <Link href="/">
            <p>
            ホームページへ
            </p>
        </Link>
        <Link href={{
            pathname:'/ssg',
            query:{message:'hello'}
        }}>
            <p>
                ssgへ
            </p>
        </Link>
        </Center>
        </div>
    )
}

export default Sample