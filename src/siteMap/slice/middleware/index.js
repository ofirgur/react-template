import { LOCATION_CHANGE } from 'connected-react-router';
import { setCurrentRoute } from '../index';

export default store => next => action => {
    let result = next(action);
    const { type } = action;
    const { dispatch,  } = store;

    switch(type) {
        case LOCATION_CHANGE: {
            dispatch(setCurrentRoute(window.location.pathname));
        }
    };

    return result;
};
  