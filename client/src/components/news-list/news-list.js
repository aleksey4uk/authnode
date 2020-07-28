import React from 'react';
import { connect } from 'react-redux'

import { List, Avatar, Card } from 'antd';
import './news.-list.css';

const NewsList = (props) => {
    if(!props.news) return <h1>loading...</h1>
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.news}
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

const mapStateToProps = (state) => {
  return {
      ...state,
  }
};

export default connect(mapStateToProps)(NewsList);