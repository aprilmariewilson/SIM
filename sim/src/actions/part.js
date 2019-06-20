import API from '../utils/API';


//SAVE_PART
export const savePart = (partData) => {
    return {
        type: 'SAVE_PART',
        partData
    };
};
export const initSavePart = (partData) => {
    return dispatch => {
        return API.savePart(partData)
            .then(res => {
                dispatch(savePart(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//DELETE_PART
export const deletePart = (id) => {
    return {
        type: 'DELETE_PART',
        id
    };
};
export const initDeletePart = (id) => {
    return dispatch => {
        return API.deletePart(id)
            .then(res => {
                dispatch(deletePart(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//UPDATE_PART
export const editPart = (sku, updates) => ({
    type: 'EDIT_PART',
    sku,
    updates
});
export const initUpdatePart = (sku, updates) => {
    return dispatch => {
        return API.updatePart(sku, updates)
            .then(res => {
                dispatch(editPart(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//GET_PART
export const getPart = () => ({
    type: 'GET_PART',

});
export const initGetPart = (sku) => {
    return dispatch => {
        return API.getPart(sku)
            .then(res => {
                dispatch(getPart(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//GET_PARTS
export const getParts = () => ({
    type: 'GET_PARTS',

});
export const initGetParts = () => {
    return dispatch => {
        return API.getParts
            .then(res => {
                dispatch(getParts(res.data));
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