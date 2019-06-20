//materials reducer

const materialsReducerDefaultState = [];
export default (state = materialsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SAVE_MATERIAL':
            return [
                ...state,
                action.materialData
            ];
        case 'DELETE_MATERIAL':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_MATERIAL':
            return state.map((material) => {
                if (material.sku === action.sku) {
                    return {
                        ...material,
                        ...action.updates
                    };
                } else {
                    return material;
                };
            });
            case 'GET_MATERIAL':
                return state.map((material) => {
                    if (material.sku === action.sku){
                        return action.material
                    };
                });
            case 'GET_MATERIALS':
            return action.materials;
        default:
            return state;
    };
};
