import React, { useCallback } from 'react';
import axios from 'axios';

const Login = () => {
    const handleLogin = useCallback(async () => {
        const res = await axios.get('/data/data.json');
        console.log(res);
    }, []);
    return (
        <div>
            <button onClick={handleLogin}>登录</button>
        </div>
    );
};
export default Login;