import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const {selectedConversation} = useConversation();
	return (
		<div className={`border-r border-slate-500 p-4 flex flex-col`}>
			<SearchInput />
			{/* <div className='divider bg-green-600 px-3'></div> */}
      <div className="divider divider-accent px-3"></div>
			<Conversations />
      <div className="divider divider-accent px-3"></div>
			<LogoutButton />
		</div>
	);
};
export default Sidebar;

