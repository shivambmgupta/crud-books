import React from 'react';
import { Modal } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../actions/BookActions';

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
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  }
};

const BookModal = ({ setIsModalVisible, isVisible, newBook, book }) => {
  const dispatchUpdateAction = useDispatch();
  const dispatchAddAction = useDispatch();
  const handleOk = () => {
    if (newBook) {
      dispatchAddAction(addBook(book))
    } else {
      dispatchUpdateAction(updateBook(book));
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isVisible} title={newBook ? 'Add New Book' : 'Edit Book'} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} name="nest-messages" onFinish={handleOk} validateMessages={validateMessages}>

        <Form.Item
          name={['book', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={book ? book.name : null} />
        </Form.Item>


        <Form.Item
          name={['book', 'mrp']}
          label="MRP"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={book ? book.mrp : null} />
        </Form.Item>

        <Form.Item
          name={['book', 'author_name']}
          label="Author Name"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input defaultValue={book ? book.author_name : null} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default BookModal;