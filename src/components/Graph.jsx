import React from 'react';

import { v4 as uuid } from 'uuid';
import VisGraph from 'graph-app-vis';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Socket } from 'socket.io-client';

import API from '../lib/API';

import styles from './Graph.module.css';

const propTypes = {
    id: PropTypes.string.isRequired,
    onLoad: PropTypes.func
};

const defaultProps = {
    onLoad: f => f
};

// Types
/**
 * 
 * @typedef {{id: string, name: string, description: string, date: Date}} GraphData
 * @typedef {{name: string, value: { type: string, data: any }} VariableData
 * @typedef {{name: string, variables: Array<VariableData>}} TemplateData
 * @typedef {{id: string, template: TemplateData}} NodeData
 * @typedef {{from: NodeData, to: NodeData, name: string, id: string}} RelationData
 */

function Graph({ id, onLoad }) {
    let network = null
    let nodesDataSet = null;
    let edgesDataSet = null;
    const [ socket, setSocket ] = React.useState(null);
    const [options, setOptions] = React.useState({
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#000000"
        }
    });
    const [templates, setTemplates] = React.useState([]);
    const [completeNodesLoading, setCompleteNodesLoading] = React.useState(false);
    const [completeRelationsLoading, setCompleteRelationsLoading] = React.useState(false);

    React.useEffect(() => {
        const socket = API.socket(id);
        setSocket(socket);
        socketHandler(socket);
    }, []);
    React.useEffect(() => {
        if (completeNodesLoading && completeRelationsLoading) 
            onLoad();
    }, [completeNodesLoading, completeRelationsLoading]);
    window.addEventListener("resize", () => {
        if (network !== null) {
            // network.setOptions({
            //     width: "100%",
            //     height: "100%"
            // })
        }
    })

    /**
     * 
     * @param {GraphData} graphData 
     * @returns {void}
     */
    function loadGraph(graphData) {
        console.log(graphData);
    }

    /**
     * 
     * @param {Array<NodeData>} nodesData 
     * @returns {void}
     */
    function loadNodes(nodesData) {
        console.log("Load nodes");
        console.log(nodesData);
        if (nodesDataSet !== null) {
            nodesDataSet.clear();
            nodesDataSet.add(nodesData.map(nd => { return { id: nd.id }}));   
            setCompleteNodesLoading(true);
        }
    }

    /**
     * 
     * @param {Array<TemplateData>} templatesData 
     * @returns {void}
     */
    function loadTemplates(templatesData) {
        console.log("Load tempaltes");
        console.log(templatesData);
        setTemplates(templatesData);
    }

    /**
     * 
     * @param {Array<RelationData>} relationsData 
     * @returns {void}
     */
    function loadRelations(relationsData) {
        console.log("Load relations");    
        console.log(relationsData);
        if (edgesDataSet !== null) {
            edgesDataSet.clear();
            edgesDataSet.add(relationsData.map(rd => { return { from: rd.from.id, to: rd.to.id }}));
            setCompleteRelationsLoading(true);
        }    
    }

    /**
     * 
     * @param {Socket} socket 
     * @returns {void}
     */
    function socketHandler(socket) {
        socket.on("connect", () => {
            socket.emit("user:connect", { name: "Test", surname: "User" }, id);
        });
        socket.on("graph:load", (graphData) => loadGraph(graphData));
        socket.on("nodes:load", (nodesData) => loadNodes(nodesData));
        socket.on("relations:load", (relationsData) => loadRelations(relationsData));
        socket.on("templates:load", (templatesData) => loadTemplates(templatesData));
    }

    function click({ pointer: canvas }) {
        if (nodesDataSet !== null) {
            const node = { id: Math.random() * 100, x: canvas.x, y: canvas.y };

            nodesDataSet.add(node);
        }
    }

    const events = {
        click
    };

    return (
        <>
            <VisGraph 
                identifier={uuid()} 
                graph={{nodes: [], edges: []}} 
                getNetwork={n => { network = n }} 
                getNodes={nds => {nodesDataSet = nds}}
                getEdges={eds => {edgesDataSet = eds}}
                options={options}  
                events={events}
            />
        </>
    );
}

Graph.propTypes = propTypes;
Graph.defaultProps = defaultProps;

export default Graph;