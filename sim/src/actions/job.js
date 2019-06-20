import API from '../utils/API';


//SAVE_JOB
export const saveJob = (jobData) => {
    return {
        type: 'SAVE_JOB',
        jobData
    };
};
export const initSaveJob = (jobData) => {
    return dispatch => {
        return API.saveJob(jobData)
            .then(res => {
                dispatch(saveJob(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//DELETE_JOB
export const deleteJob = (id) => {
    return {
        type: 'DELETE_JOB',
        id
    };
};
export const initDeleteJob = (id) => {
    return dispatch => {
        return API.deleteJob(id)
            .then(res => {
                dispatch(deleteJob(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//UPDATE_JOB
export const editJob = (sku, updates) => ({
    type: 'EDIT_JOB',
    sku,
    updates
});
export const initUpdateJob = (sku, updates) => {
    return dispatch => {
        return API.updateJob(sku, updates)
            .then(res => {
                dispatch(editJob(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//GET_JOB
export const getJob = () => ({
    type: 'GET_JOB',

});
export const initGetJob = (sku) => {
    return dispatch => {
        return API.getJob(sku)
            .then(res => {
                dispatch(getJob(res.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    };
};

//GET_JOBS
export const getJobs = () => ({
    type: 'GET_JOBS',

});
export const initGetJobs = () => {
    return dispatch => {
        return API.getJobs
            .then(res => {
                dispatch(getJobs(res.data));
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