//const { AuthenticationError } = require('apollo-server-express');
const { Project } = require('../models');
//const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    project: async () => {
      return Project.find();
    },

    getOneProect: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
  },

  Mutation: {
    addProject: async (parent, { projectName, description }) => {
            const project = await Project.create({ projectName, description });
      return project;
    },
      //const token = signToken(project);

      // addProject: async (parent, { name, email, password }) => {
      //   const project = await Project.create({ name, email, password });
      //   //const token = signToken(project);

      //   return {token,  project }; //
      // },
      // login: async (parent, { email, password }) => {
      //   const project = await Project.findOne({ email });

      //   if (!project) {
      //     throw new AuthenticationError('No project with this email found!');
      //   }

      //   const correctPw = await project.isCorrectPassword(password);

      //   if (!correctPw) {
      //     throw new AuthenticationError('Incorrect password!');
      //   }

      //   const token = signToken(project);
      //   return { token, project };
      // },

    //Update Project Name and Description
      updateProject: async (parent, { projectId,projectName, descriptionText }) => {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            name: projectName,
            description: descriptionText,
          }, // target field original with new updated description
          {
            new: true,
            runValidators: true,
          }
        );
      },
        removeProject: async (parent, { projectId }) => {
          return Project.findOneAndDelete({ _id: projectId });
        },
    // removeDescription: async (parent, { projectId, descriptionText }) => {
    //         return Project.findOneAndUpdate(
    //           { _id: projectId },
    //          // { $pull: { description: descriptionText } },
    //           { new: true }
    //         );
    //       },
  },
  };

  module.exports = resolvers;
