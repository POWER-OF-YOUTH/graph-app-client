import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DraftsIcon from '@material-ui/icons/Drafts';

import PropTypes from 'prop-types';

import TabPanel from '../components/TabPanel';
import GraphsList from '../components/GraphsList';

import styles from './GraphsListPage.module.css';
import { useHistory } from 'react-router-dom';

function GraphsListPage() {
    const history = useHistory();
    if (localStorage.getItem("user") == null) { // TODO:
        history.push("/");
    }

    const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

    const handleChange = (event, newValue) => {
        setCurrentTabIndex(newValue);
    };

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

    return (
        <>
            <AppBar position="fixed" className={styles.appBar}>
                <a href="/" className={styles.barLogo}>Graph App</a>
            </AppBar>
            <main className={styles.content}>
                <Tabs className={styles.menuTabs} value={currentTabIndex} onChange={handleChange} orientation="vertical" fixed>
                    <Tab label="Мои графы" icon={<AccountBoxIcon />} />
                    <Tab label="Приглашения" icon={<DraftsIcon />} />
                </Tabs>
                <TabPanel value={currentTabIndex} index={0}>
                    <GraphsList className={styles.graphsList} elements={myGraphs} onElementDeleteClick={id => {setMyGraphs(myGraphs.filter(e => e.id != id))}} addButton />
                </TabPanel>
                <TabPanel value={currentTabIndex} index={1}>
                    <GraphsList className={styles.graphsList} elements={invitedGraphs} />
                </TabPanel>
            </main>
        </>
    );
}

export default GraphsListPage;