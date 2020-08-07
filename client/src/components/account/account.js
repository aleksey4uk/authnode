import React, { useState, useEffect } from 'react';
import { getToken } from '../../utils/utils';
import { getAccountDetails, editAccountDetails } from '../../services/swapi-service';
import { Card, Row, Col, List, Typography, Button, Spin } from 'antd';
import './account.css';


const { Paragraph } = Typography; 

const installStyle = () => ({
    marginLeft: 22,
    background: '#f0f2f5',
    border: '1px solid rgba(0, 0, 0, 0.1)'
})

const data = [
    'Email, password',
    'ФИО',
    'Фото',
    'Заметки',
  ];

const EditEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('Введите новый пароль...');
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getAccountDetails('/api/home/getaccount', getToken())
            .then( res=> { setLoad(true); return res })
            .then( res => setEmail(res.email))
            .then( () => setLoad(false))
            .catch(() => setLoad(false))
    },[ ])

    const sendToServer = async () => {
    
        let accountData = { email,password };

        for(let key in accountData) {
            if(accountData[key] === 'Введите новый пароль...') delete accountData[key];
        };

        const res = await editAccountDetails('/api/home/editemail', accountData, getToken())
        console.log(res);
    } 
    
    return (
        <>
            <Spin tip="Loading..." spinning={load}> 
                <div style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
                    <Paragraph style={{display: 'inline-block', width: 100}}>Email: </Paragraph>
                    <Paragraph style={{display: 'inline-block'}} onBlur={() => console.log('Отпрвили на сервер')} editable={{ onChange: setEmail }}>{email}</Paragraph>
                </div>
                <div style={{marginTop: 10}}>
                    <Paragraph style={{display: 'inline-block', width: 100}}>Пароль: </Paragraph>
                    <Paragraph style={{display: 'inline-block'}} type="secondary" editable={{ onChange: setPassword }}>{password}</Paragraph>
                </div>
                <br/>
                <Button onClick={sendToServer} type="primary">Сохранить</Button>
            </Spin>
        </>
    )
}

const EditName = () => {
    return (
        <>
            <div style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
                <Paragraph style={{display: 'inline-block', width: 100}}>Имя: </Paragraph>
                <Paragraph style={{display: 'inline-block'}} editable={{ onChange: ()=>{} }}>{'jiellia.94@mail.ru'}</Paragraph>
            </div>
            <div style={{marginTop: 10}}>
                <Paragraph style={{display: 'inline-block', width: 100}}>Фамилия: </Paragraph>
                <Paragraph style={{display: 'inline-block'}} editable={{ onChange: ()=>{} }}>{'jiellia.94@mail.ru'}</Paragraph>
            </div>
        </>
    )
}

const EditPhoto = () => {
    return (
        <div>
            <h3>Изображение профиля: </h3>
            <img alt="photo.jpg"/>
            <br/>
            <Button>Изменить фото</Button> 
        </div>
    )
}

const Account = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    let SelectedComponent = () => <EditEmail />
    if (selectedItem === 0) SelectedComponent = EditEmail;
    if (selectedItem === 1) SelectedComponent = EditName;
    if (selectedItem === 2) SelectedComponent = EditPhoto;

    return (
        <Row style={{width: 800}}>
            <Col span={18} push={6}>
                    <Card  style={installStyle()}>
                        <SelectedComponent/>
                    </Card>
            </Col>
            <Col span={6} pull={18}>
            <List
                className="account"
                style={{ borderRadius: '4px'}}
                size="large"
                bordered
                dataSource={data}
                renderItem={(item, idx) => {
                    let classes = '';
                    selectedItem === idx ? classes += 'selected' : classes = '';
                    return (
                        <List.Item className={classes} onClick={() => setSelectedItem(idx)}>{item}</List.Item>
                    )
                }}
            />
            </Col>
      </Row>
    );
}

export default Account 