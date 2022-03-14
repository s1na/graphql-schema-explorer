import React from 'react';
import { DocExplorer } from 'graphiql';
import { buildClientSchema, validateSchema } from 'graphql';
import './App.css';
import 'graphiql/graphiql.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            schema: null
        }
    }

    componentDidMount() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
              get: (searchParams, prop) => searchParams.get(prop),
        });
        const schemaUrl = params.url;
        if (schemaUrl === null) {
            return
        }
        fetch(schemaUrl)
            .then(response => response.json())
            .then(data => {
                const schema = buildClientSchema(data);
                if (!validateSchema(schema)) {
                    console.log('invalid schema')
                }
                this.setState({ schema: schema })
            })
    }

    render() {
        return (
            <div className="graphiql-container">
                <div className="docExplorerWrap" style={{display: "block", width: "100%"}}>
                    <DocExplorer schema={this.state.schema} />
                </div>
            </div>
        );
    }
}
