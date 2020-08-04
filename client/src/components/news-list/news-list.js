import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteNews } from '../../services/swapi-service';

import { List, Avatar, Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import img from '../../img/hotpng.com (1).png';
import './news.-list.css';


const NewsList = (props) => {
    const history = useHistory();

    const deletedNews = async (id) => {
        try {
            const result = await deleteNews(id);
            if(result.deletedCount >= 1) props.removeItemNews(id);

        } catch(e) {}
    }
    

    if(!props.news) return <h1>loading...</h1>
    return (
        <>
        <h2>Все статьи</h2>
        <List
            itemLayout="horizontal"
            dataSource={props.news}
            renderItem={item => (
                <Card 
                    className='list-card' 
                    hoverable
                    >
                    <List.Item 
                        extra={<Button onClick={()=>{deletedNews(item._id)}}>
                                 <DeleteOutlined />
                               </Button>}
                    >
                        <List.Item.Meta
                            onClick={() => history.push(`/home/${item._id}`)}   
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemNews: (payload) => dispatch({type: 'REMOVE-ITEM-NEWS', payload}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);