import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import ShareIcon from '@material-ui/icons/Share';

import IconButton from '@material-ui/core/IconButton';

import PropTypes from 'prop-types';

import styles from './GraphsListElement.module.css';

function DeleteButton({ onClick }) {
    return (
        <IconButton size="small" className={styles.deleteButton} onClick={onClick}>
            <DeleteIcon className={styles.deleteIcon} />
        </IconButton>
    );
}

function EditButton({ onClick }) {
    return (
        <IconButton size="small" className={styles.editButton} onClick={onClick}>
            <SettingsIcon className={styles.editIcon}/>
        </IconButton>
    );
}

function ShareButton({ onClick }) {
    return (
        <IconButton size="small" className={styles.shareButton} onClick={onClick}>
            <ShareIcon className={styles.shareIcon}/>
        </IconButton>
    );
}

function GraphsListElement({ name, id, del, edit, share, onDeleteClick, onEditClick, onShareClick }) {
    return (
        <>
            <div className={styles.card}>
                <a href="/">
                    <div className={styles.screenshotContainer}></div>
                </a>
                <p className={styles.name}>{name}</p>
                <div class={styles.buttons}>
                    { del ? <DeleteButton onClick={() => onDeleteClick(id)} /> : <></> }
                    { edit ? <EditButton onClick={() => onEditClick(id)} />  : <></> }
                    { share ? <ShareButton onClick={() => onShareClick(id)} /> : <></> }
                </div>
            </div>
        </>
    );
}

GraphsListElement.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    del: PropTypes.bool,
    edit: PropTypes.bool,
    share: PropTypes.bool,
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onShareClick: PropTypes.func
};

GraphsListElement.defaultProps = {
    del: false,
    edit: false,
    share: false,
    onDeleteClick: f => f,
    onEditClick: f => f,
    onShareClick: f => f
}

export default GraphsListElement;