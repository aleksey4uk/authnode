import React, { useState, useEffect } from 'react';
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
  
const AddNews = ({onModal, setOnModal}) => {
    const [valueForm, setValueForm] = useState({title: '', text:'', source: ''});
    const editValueForm = (e) => {
        const {id, value} = e.target;
        switch(id) {
            case `${id}`: 
                setValueForm(s => ({...s, [id]: value}));
        }
    } 

    const onFinish = (e) => {
        setValueForm({title: '', text:'', source: ''});
        setOnModal(false);
    }
   
    const {title, text, source} = valueForm;
    return (
        <Modal
            width='600px'
            title="Введите Новость"
            visible={onModal}
            onOk={onFinish}
            onCancel={onFinish}
        >
            <Card style={{width: "550px"}}>
                <Form {...layout}>
                    <Form.Item 
                        label="Заголовок"
                        rules={[{required: true}]}>
                        <Input id="title" onChange={editValueForm} value={title}/>
                    </Form.Item>

                    <Form.Item label="Источник">
                        <Input id="source" onChange={editValueForm} value={source}/>
                    </Form.Item>

                    <Form.Item 
                        label="Тест новости"
                        rules={[
                            {
                            required: true,
                            },
                        ]}>
                        <Input.TextArea id="text" onChange={editValueForm} value={text} />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
                    </Form.Item>
                </Form>
            </Card>
        </Modal>
    );
};

export { AddNews };