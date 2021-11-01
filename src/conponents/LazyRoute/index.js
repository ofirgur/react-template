import React, { Suspense } from "react";
import { Route } from 'react-router-dom';
import { injectReducer } from "../../redux/store";


const LazyRoute = ({ path, component, reducer }) => {
    const inject = async () => {
        const [componentRes, reducerRes] = await Promise.all([
            component.promise(),
            reducer.promise()
        ]);

        injectReducer(reducer.name, reducerRes.default);

        return componentRes;
    };

    return (
        <Suspense fallback={() => <div>Splitting...</div>}>
            <Route path={path} component={React.lazy(inject)} />
        </Suspense>
    );
};

export default LazyRoute;

