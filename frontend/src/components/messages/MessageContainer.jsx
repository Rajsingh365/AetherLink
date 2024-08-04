import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col h-full">
          <div className="bg-slate-500 px-4 py-2 fixed top-0 w-full z-50 flex items-center">
            <IoMdArrowBack
              className="inline text-green-600 text-2xl cursor-pointer hover:text-white hover:bg-green-500 rounded-full"
              onClick={() => setSelectedConversation(null)}
            />
            <span className="label-text text-white ml-2">To:</span>
            <span className="text-gray-900 font-bold ml-2">{selectedConversation.fullName}</span>
          </div>

          <div className="flex-1 mt-14 overflow-y-auto">
            <Messages />
          </div>

          <div className="fixed bottom-0 w-full bg-slate-700 z-50">
            <MessageInput />
          </div>
        </div>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="hidden md:flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
