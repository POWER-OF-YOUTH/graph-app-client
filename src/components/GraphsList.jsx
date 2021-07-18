import React from 'react';

import GraphsListElement from './GraphsListElement';
import GraphsListAddButton from './GraphsListAddButton';

function GraphsList({ 
        className, 
        elements, 
        addButton, 
        onAddButtonClick, 
        onElementDeleteClick, 
        onElementEditClick, 
        onElementShareClick }) 
    {
    return (
        <div className={className}>
            { 
            elements.map(e => <GraphsListElement 
                name={e.name} 
                id={e.id} 
                del={e.del} 
                edit={e.edit} 
                share={e.share} 
                onDeleteClick={onElementDeleteClick}
                onEditClick={onElementEditClick}
                onShareClick={onElementShareClick}
                />) }
            { addButton ? <GraphsListAddButton onClick={onAddButtonClick} /> : <></>}
        </div>
    )
}

export default GraphsList;