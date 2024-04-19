import React, { useState, useRef } from "react";
import { ScrollView } from "react-native";


import { Color } from "../../Constant";
import Message from "../Message";

const MessagesList = ({ onSwipeToReply }:any) => {
	const [messages, setMessages] = useState([
		{
			user: 0,
			time: "Today | 12:42PM",
			content: "Hey",
		},
		{
			user: 1,
			time: "Today | 12:43PM",
			content: "What's up",
		},
		{
			user: 1,
			time: "Today | 12:44PM",
			content: "How is it going?",
		},
		{
			user: 0,
			time: "Today | 12:42PM",
			content: "things are going great",
		},
		{
			user: 0,
			time: "Today | 12:42PM",
			content: "Good :)",
		},
		{
			user: 1,
			time: "Today | 12:42PM",
			content: "Should we hang out tomorrow? I was thinking of going somewhere which has drinks",
		},
		{
			user: 0,
			time: "Today | 12:42PM",
			content: "Sure",
		},
		{
			user: 1,
			time: "Today | 12:42PM",
			content: "Great",
		},
		{
			user: 0,
			time: "Today | 12:42PM",
			content: "7 o'clock?",
		},
		{
			user: 1,
			time: "Today | 12:42PM",
			content: "Sounds good",
		},
	]);

	const user = useRef(0);
	const scrollView :any= useRef();

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor:Color.GhostWhite, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentSizeChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<Message
					key={index}
					time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
					onSwipe={onSwipeToReply}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;