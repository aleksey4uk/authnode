import React, { useState, useEffect,useCallback } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import  NewsList from '../news-list';
import { StarOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Modal, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import AddNews from '../add-news';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const HomePage = () => {
    const [login, setLogin] = useState(false);
    const [onModal, setOnModal] = useState(false);
    const history = useHistory();    

    const logOut = () => {
        localStorage.removeItem('loginStorage');
        setLogin(false);
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

export { HomePage };
