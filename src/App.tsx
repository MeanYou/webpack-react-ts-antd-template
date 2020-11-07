import React, { Suspense, lazy } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import PrivateRoute from './components/PrivateRoute';

import './App.less';
import dayjs from 'dayjs';

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './pages/login'));
const Main = lazy(() => import(/* webpackChunkName: "Main" */ './pages/main'));

dayjs.locale('zh-cn');

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <Router>
                    <Suspense fallback={<div>...loading</div>}>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <PrivateRoute path="/" component={Main} />
                            <Redirect from="/" to="/main" />
                        </Switch>
                    </Suspense>
                </Router>
            </Provider>
        </ConfigProvider>
    );
}
export default App;