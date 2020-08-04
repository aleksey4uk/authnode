import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect, useParams, Link } from 'react-router-dom';
import  NewsList from '../news-list';
import DetailNews from '../detail-news';
import AddNews from '../add-news';
import { getNews } from '../../services/swapi-service';
import { getToken } from '../../utils/utils';
import { StarOutlined, UserOutlined, LaptopOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

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

    //Отображение деталей Новости
    useEffect( () => {
        id && setShowDetailNews(true);
    }, [ id ])

    //Получение новостей пользователя
    const getDate = async (url='/api/home') => {
        const res = await getNews(url, getToken());
        return res;   
    }

    //Выход с сайта, удаление токена.
    const logOut = () => {
        localStorage.removeItem('loginStorage');
        history.push('/')
    }

    //Получение новостей всех пользователей
    const getNewsAllUsers = (url) => {
        getDate(url)
            .then(writeNews)
            .catch(()=>console.log('Извините, произошла ошибка'))
    }

    //Получение новостей одного пользователя
 /*   const getNewsOneUsers = (url) => {
        getDate(url)
            .then(writeNews)
            .catch(()=>console.log('Извините, произошла ошибка'))
    }
*/
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
                <Menu.Item 
                    key="2" 
                    style={{float: 'right'}}
                    onClick={logOut}
                >
                    <LogoutOutlined/><Link to="/">Выйти</Link></Menu.Item> 
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
                    <Menu.Item key="1" onClick={()=>console.log('статьи пользователя')}>Статьи пользователя</Menu.Item>
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
                    <Menu.Item 
                        onClick={()=>{getNewsAllUsers('/api/home/all')}} 
                        key="5"
                    >
                        Все статьи</Menu.Item>
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
            <Footer style={{ textAlign: 'center' }}>AuthNode 2020</Footer>
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
