import React from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailNews = ({news}) => {
    const {id} = useParams();
    
    if(!news) return (<h1>Загрузка...</h1>);
    const {title, text} = news.filter(item=>item._id === id)[0];
    
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(DetailNews);