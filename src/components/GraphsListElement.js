import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import ShareIcon from '@material-ui/icons/Share';

import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';

import styles from './GraphsListElement.module.css';

function DeleteButton({ onClick }) {
    return (
        <Button className={styles.deleteButton} onClick={onClick}>
            <DeleteIcon className={styles.deleteIcon} />
        </Button>
    );
}

function EditButton({ onClick }) {
    return (
        <Button className={styles.editButton} onClick={onClick}>
            <SettingsIcon className={styles.editIcon}/>
        </Button>
    );
}

function ShareButton({ onClick }) {
    return (
        <Button className={styles.shareButton} onClick={onClick}>
            <ShareIcon className={styles.shareIcon}/>
        </Button>
    );
}

function GraphsListElement({ name, id, del, edit, share, onDeleteClick, onEditClick, onShareClick }) {
    return (
        <>
            <div className={styles.element}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Square_1.svg/1200px-Square_1.svg.png" className={styles.screenshot} />
                <p className={styles.graphName}>Hello</p>
                { del ? <DeleteButton onClick={() => onDeleteClick(id)} /> : <></> }
                { edit ? <EditButton onClick={() => onEditClick(id)} />  : <></> }
                { share ? <ShareButton onClick={() => onShareClick(id)} /> : <></> }
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