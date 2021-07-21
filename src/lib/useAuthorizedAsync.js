import React from 'react';

import API from './API';

function useAuthorizedAsync() {
    const [isAuthorized, setIsAuthorized] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        API.check()
        .then(result => { 
            setIsAuthorized(result);
            setIsLoading(false);
        })
        .catch(err => {
            setIsAuthorized(false);
            setIsLoading(false);
            setError(err);
        });
    }, []);

    return { isAuthorized, isLoading, error };
}

export default useAuthorizedAsync;