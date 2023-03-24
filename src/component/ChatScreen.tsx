import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {getMesageReply} from './util';

const ChatScreen = () => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Traveller ask me anything',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chat GPT',
          avatar:
            'https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274__480.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = [] as any) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
    getMesageReply(messages[0].text).then((reply: string) => {
      setMessages((previousMessages: any) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random(),
            text: reply,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'User',
              avatar:
                'https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg',
            },
          },
        ]),
      );
    });
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen;
