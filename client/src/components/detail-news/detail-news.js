import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getToken} from '../../utils/utils';
import {getNews, deleteNews} from '../../services/swapi-service';
import { Typography, Button } from 'antd';
import './detail-news.css';

const {Text, Title } = Typography;


const DetailNews = ({news}) => {
    const {id} = useParams();
    const [itemNews, setItemNews] = useState({title: null, text: null});
    const history = useHistory();

    useEffect(() => {
        //Устанавливаем данные в state; 
        setDataNews()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const setDataNews = () => {
        if (news) {
            const elem = news.find(item=>item._id === id);
            setItemNews(elem)        
         } else { 
             getNews(`/api/home/${id}`, getToken())
                 .then((res) => setItemNews({title: res.title, text: res.text}))
                 .catch(console.log) 
         }
    }
    
    const deleteItem = (id) => {
        deleteNews(id, getToken())
            .then(res=> res.ok && res)
            .then(() => history.push('/'))
    }

    if(itemNews.text === undefined) return <h1>Loading...</h1>    
    return (
        <div className="wrap-text">
            <Title level={2}>{itemNews.title}</Title>
            <div className="details-news-img">
                <div className="news-img"></div>
                <Text style={{paddingBottom: 100}}>22.02.10</Text>
            </div>        
            <br/>
            <Text>{itemNews.text}</Text>
            <br/>
            <Button
                type="primary"
                style={{marginTop: 10}}
                danger 
                onClick={()=>deleteItem(id)}>Удалить</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(DetailNews);