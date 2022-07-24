const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    projectName: String
    description: String
  }
type Query {
    projects: [Project]!
    project(projectId: ID!): Project
  }

  type Mutation {
    addProject(projectName: String!, desctiption: String!)  
    removeProject(projectId: ID!): Project
  }
`;
module.exports = typeDefs;
