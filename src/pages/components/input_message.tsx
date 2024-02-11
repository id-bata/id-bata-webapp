import {
    Button,
    Text,
    Dialog,
    DialogOverlay,
    Textarea,
    DialogCloseButton,
    DialogHeader,
    DialogBody,
    DialogFooter,
    useDisclosure
} from "@yamada-ui/react"
import { ChangeEvent } from "react";



function InputMessage(props:any) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="test">
            <Button onClick={onOpen}>投稿</Button>

            <Dialog
                isOpen={isOpen}
                onClose={onClose}
                header="メッセージ"
                cancel="キャンセル"
                onCancel={onClose}
                success="投稿"
                onSuccess={onClose}
            >
                <DialogOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
                <Textarea
                    autosize
                    placeholder="ユーザー名"
                    onChange={props.onUsernameChange}
                />
                <Textarea
                    placeholder="メッセージ"
                    onChange={props.onMessageChange}
                />
            </Dialog>
        </div>
    )
}

export default InputMessage;
