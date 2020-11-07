import { Spin } from 'antd';
import React from 'react';
import './style.less';

interface LoadingProps {
    loading?: boolean;
    size?: 'small' | 'default' | 'large';
}
const Loading = (props: LoadingProps) => {
    const { loading = true, size = "default" } = props;
    return (
        <div className="loading">
            <Spin size={size} spinning={loading} />
        </div>
    );
};

export default Loading;