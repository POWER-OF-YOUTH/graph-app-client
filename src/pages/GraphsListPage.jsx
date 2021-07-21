import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DraftsIcon from '@material-ui/icons/Drafts';

import TabPanel from '../components/TabPanel';
import GraphsList from '../components/GraphsList';

import styles from './GraphsListPage.module.css';
import { useHistory } from 'react-router-dom';

import useAuthorizedAsync from '../lib/useAuthorizedAsync';

function GraphsListPage() {
    const history = useHistory();
    const auth = useAuthorizedAsync();
    
    if (!auth.isLoading && !auth.isAuthorized) {
        history.push("/");
    }
        

    const [currentTab, setCurrentTab] = React.useState(0);
    // TODO: Delete this variables when API module complete.
    // ----
    const [myGraphs, setMyGraphs] = React.useState([
        {
            id: "0",
            name: "My Graph",
            del: true,
            edit: true,
            share: true
        },
        {
            id: "1",
            name: "My Graph",
            del: true,
            edit: true,
            share: true
        },
        {
            id: "2",
            name: "My Graph",
            del: true,
            edit: true,
            share: true
        },
        {
            id: "3",
            name: "My Graph",
            del: true,
            edit: true,
            share: true
        },
    ]);

    const invitedGraphs = [
        {
            id: "0",
            name: "My Graph"
        },
        {
            id: "1",
            name: "My Graph"
        },
        {
            id: "2",
            name: "My Graph"
        },
        {
            id: "3",
            name: "My Graph"
        },
        {
            id: "4",
            name: "My Graph"
        },
        {
            id: "5",
            name: "My Graph"
        }
    ];
    // ----

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <>
            <AppBar position="fixed" className={styles.appBar}>
                <a href="/" className={styles.barLogo}>Graph App</a>
            </AppBar>
            <main className={styles.content}>
                <Tabs className={styles.menuTabs} value={currentTab} onChange={handleTabChange} orientation="vertical" fixed>
                    <Tab label="Мои графы" icon={<AccountBoxIcon />} />
                    <Tab label="Приглашения" icon={<DraftsIcon />} />
                </Tabs>
                <TabPanel value={currentTab} index={0}>
                    <GraphsList className={styles.graphsList} elements={myGraphs} onElementDeleteClick={id => {setMyGraphs(myGraphs.filter(e => e.id !== id))}} addButton />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                    <GraphsList className={styles.graphsList} elements={invitedGraphs} />
                </TabPanel>
            </main>
        </>
    );
}

export default GraphsListPage;