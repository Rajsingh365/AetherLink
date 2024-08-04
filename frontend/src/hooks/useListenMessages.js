import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification.mp3";
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play(); 
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage"); // cleanup bcoz we don't want to listen to the same event multiple times, warna same sound would happen occur multiple times
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
