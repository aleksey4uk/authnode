import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

import { List, Avatar, Card } from 'antd';

import img from '../../img/hotpng.com (1).png';
import './news.-list.css';

const NewsList = (props) => {
    const history = useHistory();
    if(!props.news) return <h1>loading...</h1>
    return (
        <>
        <h2>Все статьи</h2>
        <List
            itemLayout="horizontal"
            dataSource={props.news}
            renderItem={item => (
                <Card className='list-card' onClick={() => history.push(`/home/${item._id}`)}>
                    <List.Item extra={<a href="/">Подробнее</a>}>
                        <List.Item.Meta
                            avatar={<Avatar src={img} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.text}
                        />
                    </List.Item>
                </Card>
            )}
        />
        </>
    );
}

const mapStateToProps = (state) => {
  return {
      ...state,
  }
};

export default connect(mapStateToProps)(NewsList);