import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AddNews from '../add-news';
import DetailNews from '../detail-news';
import {useLogOut} from '../../utils/utils';
import {getToken} from '../../utils/utils';

import { StarOutlined, UserOutlined, LaptopOutlined, LogoutOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router-dom';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const DetailPage = () => {
  const [onModal, setOnModal] = useState(false);
  const logOut = useLogOut();

  const token = getToken()
  if(token.error) return <Redirect to="/"/> 
  return (
    <Layout className="home">
        <Header>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[``]}>
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
                  <Menu.Item key="1">Статьи пользователя</Menu.Item>
                  <Menu.Item 
                      key="2"
                      onClick={()=>{setOnModal(true)}}>
                          Добавить статью
                  </Menu.Item>
                  <Menu.Item key="3">Личный Кабинет</Menu.Item>
                  <Menu.Item key="4" onClick={logOut}>Выйти из уч. записи</Menu.Item>
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
                <DetailNews />
              </Content>
          </Layout>
        </Layout>
        <AddNews setOnModal={setOnModal} onModal={onModal} />
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    )
}

export default DetailPage;