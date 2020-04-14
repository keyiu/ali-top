declare namespace aliTop {
  const ApiClient: any;
  const TmcClient: any;
  const DingTalkClient: any;
  interface Message {
    ToUserName: string;
    FromUserName: string;
    MsgType: 'image' | 'voice' | 'shortvideo' | 'location' | 'link' | 'event';
    CreateTime: number;
    Event: 'subscribe' | 'subscribe'
  }
  interface TextMessage {
    content: string;
    type: 'text';
  }
  interface MusicMessage {
    content: {
      title: string,
      description: string,
      musicUrl: string,
      hqMusicUrl: string,
    };
    type: 'music';
  }
  interface CustomerService {
    kfAccount?: string;
    type: 'customerService';
  }
  interface ImageTextMessage {
    title: string;
    description: string;
    picurl: string;
    url: string
  }
  const SendMessage: TextMessage | MusicMessage | CustomerService | ImageTextMessage
}
export = aliTop
 