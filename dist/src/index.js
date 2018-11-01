"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.TodoListApplication = application_1.TodoListApplication;
const OASGraph = require('oasgraph');
const express = require('express');
const graphqlHTTP = require('express-graphql');
async function main(options = {}) {
    const app = new application_1.TodoListApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    try {
        const { schema } = await OASGraph.createGraphQlSchema(app.restServer.getApiSpec(), {
            strict: false,
            viewer: true,
            addSubOperations: true,
            sendOAuthTokeninQuery: false,
        });
        //let's create graphql server
        const myExpress = express();
        myExpress.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));
        myExpress.listen(3001, () => {
            console.log('OASGraph ready at http://localhost:3001/graphql');
        });
    }
    catch (err) {
        console.log('Error: ', err.message);
    }
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map