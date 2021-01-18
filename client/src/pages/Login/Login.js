import React, { useEffect, useState } from 'react';
import LoginForm from '../../components/LoginForm';
import './Style.css';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/LoginActions';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ user, setUser ] = useState(null);

    const handleOnSubmit = (values) => {
        if(values) {
            setUser(values);
        }
        else alert('Please provide valid details')
    }

    useEffect(() => {
        if(user) {
            dispatch(userLogin(user));
            history.push('/home');
        }
    }, [ user, dispatch]);

    return (
        <div className="OuterContainer" >
            <div className="InnerContainer" >
                <LoginForm onSuccess={handleOnSubmit} />
            </div>
        </div>
    );
}

export default Login;