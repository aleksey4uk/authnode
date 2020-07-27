import React from 'react';
import { Modal, Form, Input, InputNumber, Button, Card } from 'antd';

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
  };
  
  const AddNews = () => {
    const onFinish = values => {
      console.log(values);
    };
  
    return (
        <Card style={{width: "550px"}}>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={['user', 'Title']}
          label="Заголовок"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={['user', 'Источник']} label="Источник">
          <Input />
        </Form.Item>
        <Form.Item 
            name={['user', 'Текст новости']}
            label="Тест новости"
            rules={[
                {
                  required: true,
                },
            ]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
          <Button type="primary" htmlType="submit">
            Опубликовать
          </Button>
        </Form.Item>
      </Form>
      </Card>
    );
  };

export { AddNews };