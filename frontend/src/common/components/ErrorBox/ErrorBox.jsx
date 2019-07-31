import React from 'react';
import { Alert } from 'antd';

export const ErrorBox = ({ message }) => (
    <div>
        <Alert banner showIcon type="error" message={message} closable />
    </div>
);
