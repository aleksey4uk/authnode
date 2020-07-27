import React, { useState } from 'react';
import  NewsList from '../news-list';
import { StarOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Modal, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import AddNews from '../add-news';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

document.body.style.backgroundImage = 'asdasd';
document.body.style.backgroundColor = 'rgb(240, 242, 245)';

const HomePage = () => {
    const [ onModal, setOnModal ] = useState(false);
//  const [ value, setValue ] = useState({title: '' , text: '', source: ''});
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
                        onClick={()=>{setOnModal(true)}}
                        >Добавить статью</Menu.Item>
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


/*
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
*/