import { UIProvider, VStack, Text, Flex, Button, Spacer } from "@yamada-ui/react"
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from "next/link"

export default function Home() {
  return (
    <div >
      <UIProvider >
        <Flex>
          <VStack className="main">
            <Text className="title-text text">
              Ido-Bata
            </Text>
            <VStack className="subtitle">
              <Text className="subtitle-text">
                『時間が立つと消える掲示板』
              </Text>
              <Text className="subtitle-text">
                限られた時間の中で､
              </Text>
              <Text className="subtitle-text">
                何気ない会話をしませんか｡
              </Text>
              <Text className="subtitle-text">
                『井戸端会議』 のように｡
              </Text>
            </VStack>
          </VStack>
          <VStack>
            <Image src={logo} alt='logo' />
            <Flex>
              <Spacer />
              <Link href="sample">
                <Button colorScheme="primary" variant="solid" size='lg' style={{ marginRight: '250px', scale: "1.5" }}>
                  はじめる
                </Button>
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </UIProvider>
    </div>
  )
}
