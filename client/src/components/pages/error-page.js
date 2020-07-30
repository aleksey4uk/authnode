import React from 'react';

import { Alert } from 'antd';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <Alert
                message="ERROR 404"
                description="This is an error message about copywriting."
                type="error"
                showIcon
                />
        </div>
    )
}

export { ErrorPage };