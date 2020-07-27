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
                    <List.Item extra={<a href="#">Подробнее</a>}>
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

/*
добовляет три точки и укорачивает текст массива
const transformData = (data) => {
  const newArr = data.map((item) => {
    const elem = {...item};
    console.log(elem);
    if(elem.text.length >= 60) elem.text = elem.text.slice(0, 60) + '...';
    return elem;
  })

  return newArr;
}

*/


export { NewsList };