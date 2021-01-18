import React from 'react';
import { Modal } from 'antd';
import * as Consts from '../Consts/Consts';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../actions/BookActions';

const DeleteModal = ({ setIsModalVisible, isVisible, book }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch(deleteBook(book));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isVisible} title={'Delete Book'} onOk={handleOk} onCancel={handleCancel}>
      <p>{`Are you sure you want to delete  details of ${book.name}?`}</p>
    </Modal>
  );
}

export default DeleteModal;