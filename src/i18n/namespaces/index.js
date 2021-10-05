import { app } from './app';
import { cinema } from './cinema';

const namespaces = {
    app,
    cinema
};

export default namespaces;

export const names = Object.keys(namespaces).reduce((a, v) => ({ ...a, [v]: v}), {});



