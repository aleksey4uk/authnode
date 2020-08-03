import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNews } from '../../services/swapi-service';
import { Modal, Form, Input,Card } from 'antd';
import { getToken } from '../../utils/utils';


const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
};

  
const AddNews = ({onModal, setOnModal, addItemNews}) => {
    const [valueForm, setValueForm] = useState({title: '', text:''});

    const editValueForm = (e) => {
        const {id, value} = e.target;
        switch(id) {
            case `${id}`: 
                setValueForm(s => ({...s, [id]: value}));
                break;
            default: return console.log("default")
        }
    } 

    const onFinish = async (e) => {
        const result = await addNews('/api/add', valueForm, getToken());
        
        if (result.status === 200) {
            const {_id} = await result.json();
            addItemNews({...valueForm, _id});
        }
        setValueForm({title: '', text:''});
        setOnModal(false);
    }

    const onCancel = () => {
        setValueForm({title: '', text:''});
        setOnModal(false);
    }
   
    const {title, text} = valueForm;
    return (
        <Modal
            width='600px'
            title="Введите Новость"
            visible={onModal}
            onOk={onFinish}
            onCancel={onCancel}
        >
            <Card style={{width: "550px"}}>
                <Form {...layout}>
                    <Form.Item 
                        label="Заголовок"
                        rules={[{required: true}]}>
                        <Input id="title" onChange={editValueForm} value={title}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addItemNews: (payload) => dispatch({type: 'ADD-ITEM-NEWS', payload})
    }
} 

export default connect(null, mapDispatchToProps)(AddNews);