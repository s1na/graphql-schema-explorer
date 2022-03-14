import React from 'react';
import { DocExplorer } from 'graphiql';
import { buildClientSchema, validateSchema } from 'graphql';
import jsonSchema from './full-schema.json';
import './App.css';
import 'graphiql/graphiql.min.css';

const schema = buildClientSchema(jsonSchema);
if (!validateSchema(schema)) {
    throw new Error("Invalid schema");
}

const App = () => <div className="graphiql-container"><div className="docExplorerWrap" style={{display: "block", width: "100%"}}><DocExplorer schema={schema} /></div></div>;

export default App;
