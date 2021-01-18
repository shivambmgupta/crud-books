import React, { Component } from 'react';
import { Table, Space, Row, Col, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import DeleteModal from '../../modals/DeleteModal';
import BookModal from '../../modals/BookModal';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
        super(props);
        //if (!props.user?.username) props.history.push("/")
        this.state = {
            books: [],
            deleteModalVisible: false,
            editModalVisible: false,
            addModalVisible: false
        };
    }

    columns = [
        {
            title: 'Book Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'MRP',
            dataIndex: 'mrp',
            key: 'mrp',
        },
        {
            title: 'Author Name',
            dataIndex: 'author_name',
            key: 'author_name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => {
                return (
                    <Space size="middle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button type="primary" onClick={() => this.updateEditModalVisibility(record)} shape="round" icon={<EditFilled />} size={16} />
                        <Button type="primary" onClick={() => this.updateDeleteModalVisibility(record)} shape="round" icon={<DeleteFilled />} size={16} />
                    </Space>);
            },
        },
    ];

    updateDeleteModalVisibility = (book) => {
        book ?
            this.setState((prevState) => ({ deleteModalVisible: !prevState.deleteModalVisible, selectedBook: book })) :
            this.setState((prevState) => ({ deleteModalVisible: !prevState.deleteModalVisible }))
    }

    updateEditModalVisibility = (book) => {
        book ?
            this.setState((prevState) => ({ editModalVisible: !prevState.editModalVisible, selectedBook: book })) :
            this.setState((prevState) => ({ editModalVisible: !prevState.editModalVisible }))
    }

    updateAddModalVisibility = () => {
        this.setState((prevState) => ({ addModalVisible: !prevState.addModalVisible }));
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.user.username) this.props.history.push("/")
        else this.setState({ books: nextProps.books, user: nextProps.user });
    }

    componentWillUpdate() {
        if (!this.props.user.username) this.props.history.push("/")
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}>
                <div style={{
                    width: '80%',
                    height: '80vh',
                    boxShadow: '0px 0px 10px #FFFFF',
                    padding: '20px',
                    fontSize: '24px'

                }}>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col span={12}>
                            <div>{`Hello, ${this.props.user?.username?.substr(0, this.props.user?.username?.indexOf('@'))}`}</div>
                        </Col>
                        <Col span={12} style={{ display: 'flex', flexDirection: 'row-reverse' }} >
                                <Button type="primary" size={24} >Logout</Button>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '40px' }}>
                        <Col>
                            <Button type="primary" onClick={this.updateAddModalVisibility}>Add</Button>
                        </Col>
                    </Row>
                    {this.state.deleteModalVisible && <DeleteModal isVisible={true} setIsModalVisible={this.updateDeleteModalVisibility} user={this.state.selectedUser} />}
                    {this.state.editModalVisible && <BookModal isVisible={true} setIsModalVisible={this.updateEditModalVisibility} user={this.state.selectedUser} />}
                    {this.state.addModalVisible && <BookModal isVisible={true} setIsModalVisible={this.updateAddModalVisibility} newUser={true} />}
                    <Table columns={this.columns} dataSource={this.state.users} bordered />
                    <Row style={{ fontSize: '16px', margin: '20px' }}>
                        <Col span={12}>
                            <div> <footer>&copy; {`Copyright Shivam`}</footer> </div>
                        </Col>
                        <Col span={12} style={{ display: 'flex', flexDirection: 'row-reverse' }} > {`Random Company Name`}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        books: state.books
    }
}

export default connect(mapStateToProps, null)(Home);