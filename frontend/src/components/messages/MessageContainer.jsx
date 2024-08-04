import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";

const MessageContainer = () => {
  const noChatSelected = true;
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? (
          <NoChatSelected className=""/>
        ) : (
          <div className="md:">
            <div className="bg-slate-500 px-4 py-2 mb-2 fixed w-[100%] z-50">
            <IoMdArrowBack className="inline text-green-600 text-2xl cursor-pointer" onClick={e=>setSelectedConversation(null)}/>
              <span className="label-text text-white">To:</span>{"  "}
              <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
            </div>

            <Messages className=""/>
            <MessageInput className=""/>
          </div>
        )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser}=useAuthContext()
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
