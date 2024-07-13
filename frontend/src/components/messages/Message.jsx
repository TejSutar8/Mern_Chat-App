const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwund CSS chat bubble component"
            src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-139/128/_profile_user_avatar_account_person-132-512.png"
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>
        HI! What is upp?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        11:11
      </div>
    </div>
  );
};

export default Message;
