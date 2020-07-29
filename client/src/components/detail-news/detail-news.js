import React from 'react';
import { useParams } from 'react-router-dom';

const DetailNews = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <p>Детали новости</p>
    )
}

export default DetailNews;