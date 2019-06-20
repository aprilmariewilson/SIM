import API from '../utils/API';


//SAVE_MATERIAL
export const saveMaterial = (materialData) => {
    return {
        type: 'SAVE_MATERIAL',
        materialData
    };
};
export const initSaveMaterial = (materialData) => {
    return dispatch => {
        return API.saveMaterial(materialData)
            .then(res => {
                dispatch(saveMaterial(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//DELETE_MATERIAL
export const deleteMaterial = (id) => {
    return {
        type: 'DELETE_MATERIAL',
        id
    };
};
export const initDeleteMaterial = (id) => {
    return dispatch => {
        return API.deleteMaterial(id)
            .then(res => {
                dispatch(deleteMaterial(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//UPDATE_MATERIAL
export const editMaterial = (sku, updates) => ({
    type: 'EDIT_MATERIAL',
    sku,
    updates
});
export const initUpdateMaterial = (sku, updates) => {
    return dispatch => {
        return API.updateMaterial(sku, updates)
            .then(res => {
                dispatch(editMaterial(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//GET_MATERIAL
export const getMaterial = (sku) => ({
    type: 'GET_MATERIAL',
    sku

});
export const initGetMaterial = (sku) => {
    return dispatch => {
        return API.getMaterial(sku)
            .then(res => {
                dispatch(getMaterial(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//GET_MATERIALS
export const getMaterials = () => ({
    type: 'GET_MATERIALS',

});
export const initGetMaterials = () => {
    return dispatch => {
        return API.getMaterials
            .then(res => {
                dispatch(getMaterials(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

export const fetchFailed = () => {
    return {
        type: 'FETCH_FAILED'
    };
};