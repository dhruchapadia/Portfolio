const mongoCollections = require('../config/mongoCollections');
const WorkEx = mongoCollections.WorkEx;
const Project = mongoCollections.Project;
const {ObjectId} = require('mongodb');


const getWorkEx = async () => {
    const workCollection = await WorkEx();
    let workList  = await workCollection.find({}).toArray();
    if (!workList) throw 'Could not get all movies';
    if(workList.length==0){
      throw 'no data in database';
    }
    return workList;
  };

const getProject = async () => {
      const projectCollection = await Project();
      let projectList  = await projectCollection.find({}).toArray();
      if (!projectList) throw 'Could not get all movies';
      if(projectList.length==0){
        throw 'no data in database';
      }
      return projectList;
    };

  
module.exports = {
    getWorkEx,
    getProject
  };