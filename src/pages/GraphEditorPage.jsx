import React from 'react';
import { useHistory, useParams } from 'react-router';

import AppBar from '@material-ui/core/AppBar';

import PropTypes from 'prop-types';
import validator from 'validator';

import useAuthorizedAsync from '../lib/useAuthorizedAsync';

import styles from './GraphEditorPage.module.css';

function GraphEditorPage() {
    const history = useHistory();
    const params = useParams();

    const auth = useAuthorizedAsync();
    const graphId = params.graphId;
    if (!validator.isUUID(graphId))
        history.push("/error");
    if (!auth.isLoading && !auth.isAuthorized) {
        console.log(auth);
        history.push("/");
    }

    return (
        <>
            <div className={styles.root}>
                <AppBar position="fixed" className={styles.appBar}>
                    <a href="/" className={styles.barLogo}>Graph App</a>
                </AppBar>  
                <main className={styles.content}>
                    <p>Nothing here!</p>
                </main>
            </div>
        </>
    )
}

export default GraphEditorPage;