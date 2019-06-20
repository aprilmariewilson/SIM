//parts reducer

const partsReducerDefaultState = [];
export default (state = partsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SAVE_PART':
            return [
                ...state,
                action.partData
            ];
        case 'DELETE_PART':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PART':
            return state.map((part) => {
                if (part.sku === action.sku) {
                    return {
                        ...part,
                        ...action.updates
                    };
                } else {
                    return part;
                };
            });
            case 'GET_PART':
                return state.map((part) => {
                    if (part.sku === action.sku){
                        return action.part
                    };
                });
            case 'GET_PARTS':
            return action.parts;
        default:
            return state;
    };
};
