import React from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {Card} from 'antd';
import { Typography, Space } from 'antd';

const {Text, Title} = Typography;

const DetailNews = ({news}) => {
    const {id} = useParams();
    
    if(!news) return (<h1>Загрузка...</h1>);
    const {title, text} = news.filter(item=>item._id === id)[0];
    
    return (
        <div className="wrap-text">
            <Title level={2}>{title}</Title>
            <Text style={{paddingBottom: 100}}>22.02.10</Text>
            <br/>
            <Text>{text}</Text>
        </div>
    )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(DetailNews);