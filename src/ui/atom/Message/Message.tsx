import { message } from 'antd';
import React, { useEffect } from 'react';

const Message: React.FC = (props) => {
    const { type, msg } = props
    const [messageApi, contextHolder] = message.useMessage();

    const myMessage = () => {
        messageApi.open({
            type: type,
            content: msg,
        });
    };

    useEffect(() => {
        myMessage();
    }, [])

    return (
        <>
            {contextHolder}
        </>
    );
};

export default Message;