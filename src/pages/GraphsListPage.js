import React from 'react';

import PropTypes from 'prop-types';

import GraphsListElement from '../components/GraphsListElement';

import styles from './GraphsListPage.module.css';

function GraphsListPage() {
    return (
        <>
            <GraphsListElement del share edit/>
        </>
    );
}

export default GraphsListPage;