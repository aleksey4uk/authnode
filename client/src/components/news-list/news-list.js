import React from 'react';

import { List, Avatar, Card } from 'antd';
import './news.-list.css';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const NewsList = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <Card className='list-card'>
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                </Card>
            )}
        />
    );
}

export { NewsList };