import AddIcon from '@material-ui/icons/Add';

import IconButton from '@material-ui/core/IconButton';

import styles from './GraphsListAddButton.module.css';

function GraphsListAddButton({ onClick }) {
    return (
        <>
            <IconButton className={styles.addButton} onClick={onClick}>
                <AddIcon />
            </IconButton>
        </>
    )
}

export default GraphsListAddButton;