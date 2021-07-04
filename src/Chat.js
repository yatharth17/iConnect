import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Chat.css";
import { MicNone } from "@material-ui/icons";
function Chat() {
	const [input, setInput] = useState("");
	const sendMessage = (e) => {
		e.preventDefault();

		//FireBase Magic
		setInput("");
	};
	return (
		<div className='chat'>
			{/* {Chat Header} */}
			<div className='chat__header'>
				<h4>
					To :<span className='chat__name'>Channel Name</span>
				</h4>
				<strong>Details</strong>
			</div>
			{/* Chat Message */}
            <div className="chat__messages">
                <h2>I am a Message</h2>
                <h2>I am a Message</h2>
                <h2>I am a Message</h2>
                <h2>I am a Message</h2>
            </div>
			{/* Chat input */}
			<div className='chat__input'>
				<form>
					<input
						placeholder='iMessage'
						onChange={(e) => setInput(e.target.value)}
						type='text'
					/>
					<button onClick={sendMessage}>Send Message</button>
				</form>

                <IconButton>
                    <MicNone className="chat__mic"></MicNone>
                </IconButton>
			</div>
		</div>
	);
}

export default Chat;
