import PropTypes from 'prop-types';

import { Box, Typography } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        className={props.className}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && (
            children
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;