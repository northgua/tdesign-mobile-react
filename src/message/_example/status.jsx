import React from 'react';
import { Message, Button } from 'tdesign-mobile-react';
import { MessageThemeListEnum } from '../constant';

export default function () {
  const contents = ['普通通知', '警示提示通知', '成功提示通知', '错误提示通知'];

  const messages = [
    {
      duration: 3000,
      content: '这是一条普通消息通知',
      icon: true,
    },
    {
      theme: MessageThemeListEnum.warning,
      content: '这是一条需要用户关注到的警示通知',
      icon: true,
    },
    {
      theme: MessageThemeListEnum.success,
      content: '这是一条需要成功的提示消息',
      icon: true,
    },
    {
      theme: MessageThemeListEnum.error,
      content: '这是一条错误提示通知',
      icon: true,
    },
  ];
  const onClick = (index) => {
    const message = messages[index];
    switch (message.theme) {
      case 'warning':
        Message.warning({
          ...message,
        });
        break;
      case 'success':
        Message.success({
          ...message,
        });
        break;
      case 'error':
        Message.error({
          ...message,
        });
        break;
      default:
        Message.info({
          ...message,
        });
    }
  };

  return (
    <div className="container">
      {contents.map((v, index) => (
        <Button key={index} variant="outline" className="button" onClick={() => onClick(index)}>
          {v}
        </Button>
      ))}
    </div>
  );
}
