import React from 'react';
import { useHistory, useParams } from 'react-router';

import AppBar from '@material-ui/core/AppBar';

import PropTypes from 'prop-types';
import validator from 'validator';

import Graph from '../components/Graph';
import useAuthorizedAsync from '../lib/useAuthorizedAsync';

import styles from './GraphEditorPage.module.css';

function LoadingBanner({ text = "Loading" }) {
    return (
        <div className={styles.loadingBanner}>
            <div className={styles.loadingBannerContent}>
                <div className={styles.loader}>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
}

function GraphEditorPage() {
    const history = useHistory();
    const params = useParams();

    const auth = useAuthorizedAsync();
    const graphId = params.graphId;
    if (!validator.isUUID(graphId))
        history.push("/error");
    if (!auth.isLoading) {
        if (!auth.isAuthorized)
            history.push("/");
        else if (auth.error !== null)
            history.push("/error")
    }
    const [graphLoaded, setGraphLoaded] = React.useState(false);

    return (
        <>
            <div className={styles.root}>
                <AppBar position="fixed" className={styles.appBar}>
                    <a href="/" className={styles.barLogo}>Graph App</a>
                </AppBar>  
                { !graphLoaded ? <LoadingBanner /> : <></> }
                <main className={styles.content}>
                    { !auth.isLoading ? <Graph id={graphId} onLoad={() => setGraphLoaded(true)}/> : <></> }
                </main>
            </div>
        </>
    )
}

export default GraphEditorPage;