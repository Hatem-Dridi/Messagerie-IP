import React, { createContext, useState } from "react";
import { MessagesContextType, MessagesProp, ProviderProp } from "../types";


const MessageContext = createContext<MessagesContextType>(null!);


export const MessageContextProvider: React.FC<ProviderProp> = ({ children }) => {

    const [messages, setMessages] = useState<MessagesProp[]>([]);

    return (
        <MessageContext.Provider value={{messages, setMessages}}>
            { children }
        </MessageContext.Provider>
    )
}


export default MessageContext;