import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser, clearMessages, messages } = useChatStore(); // Assuming messages is part of the store
  const { onlineUsers } = useAuthStore();

  const isClearButtonDisabled = messages.length === 0; // Disable button if there are no messages

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser.profile|| "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {/* Clear Chat Button */}
          <button
            onClick={() => clearMessages(selectedUser._id)}
            className="relative group px-4 py-2 text-sm font-semibold text-white bg-base-300 rounded-lg shadow-lg transition-all duration-300 hover:from-pink-500 hover:to-red-500 hover:scale-105"
            disabled={isClearButtonDisabled} // Disable if no messages
          >
            <span className="absolute inset-0 flex items-center justify-center text-lg opacity-0 text-white transition-opacity duration-300 group-hover:opacity-100">
              🗑️
            </span>
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              Clear Chat
            </span>
          </button>

          {/* Close Button */}
          <button onClick={() => setSelectedUser(null)}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
