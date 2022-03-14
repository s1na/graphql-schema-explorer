import React from 'react';
import { DocExplorer } from 'graphiql';
import { buildClientSchema, validateSchema } from 'graphql';
import jsonSchema from './full-schema.json';
import './App.css';
import 'graphiql/graphiql.min.css';

const schemaUrl = 'https://github.com/s1na/graphql-schema-explorer/blob/5829ee7dd23175e7e5758b008e6904d3b8aee305/src/full-schema.json'

const schema = buildClientSchema(jsonSchema);
if (!validateSchema(schema)) {
    throw new Error("Invalid schema");
}

export default class App extends React.Component {
    render() {
        return (
            <div className="graphiql-container">
                <div className="docExplorerWrap" style={{display: "block", width: "100%"}}>
                    <DocExplorer schema={schema} />
                </div>
            </div>
        );
    }
}
