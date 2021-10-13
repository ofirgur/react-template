import { app } from './app';


const namespaces = {
    app
};

export default namespaces;

export const names = Object.keys(namespaces).reduce((a, v) => ({ ...a, [v]: v}), {});



