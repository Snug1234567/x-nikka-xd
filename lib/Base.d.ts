export default Message;
declare class Message {
    constructor(client: any, data: any);
    _events(data: any): void;
    data: any;
    key: any;
    id: any;
    jid: any;
    isGroup: any;
    fromMe: any;
    pushName: any;
    message: any;
    prefix: string | undefined;
    sender: string | undefined;
    user: any;
    timestamp: any;
    text: any;
    bot: boolean | undefined;
    mention: any;
    reply_message: boolean | {
        id: any;
        fromMe: any;
        sender: string;
        key: any;
        pushName: any;
        bot: boolean;
        text: any;
        image: boolean;
        video: boolean;
        audio: boolean;
        sticker: boolean;
        document: boolean;
        viewonce: any;
        ephemeral: boolean;
    } | undefined;
    edit(content: any): Promise<Message>;
    sendReply(content: any, options?: {}): Promise<Message>;
    react(emoji: any, opts?: {}): Promise<Message>;
    delete(): Promise<Message>;
    clearChat(): Promise<void>;
    archiveChat(opts?: boolean): Promise<void>;
    forward(jid: any, content: any, options?: {}): Promise<any>;
    downloadAndSaveMedia(): Promise<Buffer<ArrayBufferLike>>;
    send(content: any, options?: {}): Promise<any>;
}
import { Buffer } from 'buffer';
