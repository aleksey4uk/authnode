import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import  NewsList from '../news-list';
import { StarOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import AddNews from '../add-news';
import { getNews } from '../../services/swapi-service';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const HomePage = (props) => {
    const {writeNews} = props;
    const [onModal, setOnModal] = useState(false);
    const history = useHistory();

    useEffect( () => {
        getDate()
            .then(res => writeNews(res))
            .catch((e) => console.log('ошибка с сервера', e.message))
    }, [ ]);

    const getDate = async () => {
        const {token} = JSON.parse(localStorage.getItem('loginStorage'));
        const res = await getNews('/api/home', JSON.stringify(token));
        return res;   
    }

    const logOut = () => {
        localStorage.removeItem('loginStorage');
        history.push('/')
    }

    const token = localStorage.getItem('loginStorage');
    if(!token) {
        return <Redirect to="/"/>
    }


    return (
        <Layout>
            <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><StarOutlined/>Главная</Menu.Item>
                <Menu.Item key="2">Погода</Menu.Item>
                
            </Menu>
            </Header>
            <Layout>
            <Sider width={300} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Пользователь">
                    <Menu.Item key="1">Статьи пользователя</Menu.Item>
                    <Menu.Item 
                        key="2"
                        onClick={()=>{setOnModal(true)}}>
                            Добавить статью
                    </Menu.Item>
                    <Menu.Item 
                        key="3"
                        onClick={logOut}>Выйти из уч. записи</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Все пользователи">
                    <Menu.Item key="5">Все статьи</Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        height: 1000
                    }}
                >
                <h2>Все статьи</h2>
                <NewsList />
                </Content>
            </Layout>
            </Layout>
                <AddNews setOnModal={setOnModal} onModal={onModal} />
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        writeNews: (payload) => dispatch({type: 'WRITE-NEWS', payload})
    }
}

export default connect(null, mapDispatchToProps)(HomePage);
