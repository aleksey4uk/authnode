import React from 'react';

import { List, Avatar, Card } from 'antd';
import './news.-list.css';

const data = [
  {
    title: 'Ant Design Title 1',
    text: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
  },
  {
    title: 'Ant Design Title 1',
    text: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
  },
  {
    title: 'Ant Design Title 1',
    text: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
  },
  {
    title: 'Ant Design Title 1',
    text: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
  },
  {
    title: 'Ant Design Title 1',
    text: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
  },
];

const NewsList = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <Card className='list-card' >
                    <List.Item extra={<a href="/">Подробнее</a>}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.text}
                        />
                    </List.Item>
                </Card>
            )}
        />
    );
}

export { NewsList };