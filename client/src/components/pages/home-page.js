import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect, useParams, Link } from 'react-router-dom';
import  NewsList from '../news-list';
import { StarOutlined, UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import AddNews from '../add-news';
import { getNews } from '../../services/swapi-service';
import DetailNews from '../detail-news';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const HomePage = (props) => {
    const {writeNews, loadNews, loadComplete} = props;
    const [showDetailNews, setShowDetailNews] = useState(false);
    const [onModal, setOnModal] = useState(false);
    const history = useHistory();
    const { id } = useParams();

    useEffect( () => {
        getDate()
            .then((res) => {
                loadNews();
                return res;
            })
            .then(res => writeNews(res))
            .catch((e) => {
                loadComplete()
                console.log('ошибка с сервера', e.message);
            });
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    useEffect( () => {
        id && setShowDetailNews(true);
    }, [ id ])

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

    const content = showDetailNews ? <DetailNews id={id} setShowDetailNews={setShowDetailNews}/> : <NewsList />

    return (
        <Layout className="home">
            <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1"><StarOutlined/><Link to="/">Главная</Link></Menu.Item>
                
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
                        height: 1000
                    }}
                >
                {content}
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
        writeNews: (payload) => dispatch({type: 'WRITE-NEWS', payload}),
        loadNews: () => dispatch({type: 'LOAD-NEWS'}),
        loadComplete: () => dispatch({type: 'LOAD-COMPLETE'})
    }
}

export default connect(null, mapDispatchToProps)(HomePage);
