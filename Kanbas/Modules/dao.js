import ModuleModel from './model.js';

export const createModule = (module) => {
    delete module._id; // remove _id field just in case client sends it
    return ModuleModel.create(module);
};

export const updateModule = (moduleId, module) => ModuleModel.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => ModuleModel.deleteOne({ _id: moduleId });

export const findModulesByCourseId = ({courseId: courseId}) => ModuleModel.find({ courseId });
