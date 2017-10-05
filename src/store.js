import { createStore } from 'redux';

function reducer(state, action) {

    if (action.type === 'PARK') {
        return {
            vehicle: state.vehicle.concat(action.payload),
            }
        }
    return state;
}
export const store = createStore(reducer, {
vehicle: [],
});
