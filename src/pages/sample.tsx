import { UIProvider, VStack, Text, Center } from "@yamada-ui/react";
import Message from './components/message';
import InputMessage from "./components/input_message";
import { useState, ChangeEvent } from "react";

function Sample() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    return (
        <div>
            <UIProvider>
                <VStack>
                    <Center>
                        <Text className="chatroom-title-text">
                            最近あった怖い話
                        </Text>
                    </Center>
                    <Message user={username} message={message} />
                </VStack>
                <InputMessage
                    onUsernameChange={handleUsernameChange}
                    onMessageChange={handleMessageChange}
                />
            </UIProvider>
        </div>
    )
}

export default Sample;
