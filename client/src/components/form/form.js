import React, { useState } from 'react';
import { Spin } from 'antd';
import { authIn } from '../../services/swapi-service';
import { Form, Input, Button, Card } from 'antd';
import { Redirect } from 'react-router-dom';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 20 },
};

const AuthForm = () => {
  const [userForm, setUserForm] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);

  const onFinish = async (user)  => {
    setLoading(true);
    const results = await authIn('/api/auth/login', 'POST', user );
    setLoading(false);
    if(results.token) {
      const storageName = 'loginStorage';
      localStorage.setItem(storageName, JSON.stringify({
        token: results.token,
        userId: results.userId
      }))
      setLogin(true);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onRegister = async () => {
      setLoading(true);
      await authIn('/api/auth/register', 'POST', userForm);
      setLoading(false);
  }; 

  const editValue = (e) => {
    const { id, value }  = e.target;
    console.log(value)
    setUserForm((s) => ({...s, [id]: value}))
  }

  return (
    <div className="container-flex">
      {
        login && <Redirect to="/home"/> 
      }
      <Spin tip="Пожалуйста, подождите..." spinning={loading}>
        <Card title="Войдите в систему" extra={<a href="/">Безопасность</a>} style={{ width: 450}}>
        <Form
          {...layout}
          onFinish={()=>onFinish(userForm)}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш email' }]}
          >
            <Input
              id="email"
              value={userForm.email}
              onChange={editValue}/>
          </Form.Item>

          <Form.Item
            label="Password"
          >
            <Input.Password 
              id="password"
              value={userForm.password}
              onChange={editValue}/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button style={{width: "40%"}} type="primary" htmlType="submit"
            >
              Войти
            </Button>
            <Button style={{width: "40%", marginLeft: "45px"}} type="primary" onClick={onRegister}>
              Регистрация
            </Button>
          </Form.Item>
          
        </Form>
      </Card>
      </Spin>
    </div>
  );
};

export default AuthForm;