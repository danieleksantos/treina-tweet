import { useState } from "react";
export function useIndex(){
const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 125;

    const tweet = {
        date: new Date(),
        text: text,
        user: {
            name: 'Daniele K Santos',
            username: '@danieleksantos',
            picture: 'https://github.com/danieleksantos.png'
        }
    }

    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxLength) {
            setText(text);
        }
    }

    function sendTweet() {
    setTweetList([...tweetList, tweet]);
    }

    return {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList
    }
}