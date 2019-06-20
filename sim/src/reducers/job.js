//jobs reducer

const jobsReducerDefaultState = [];
export default (state = jobsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SAVE_JOB':
            return [
                ...state,
                action.jobData
            ];
        case 'DELETE_JOB':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_JOB':
            return state.map((job) => {
                if (job.sku === action.sku) {
                    return {
                        ...job,
                        ...action.updates
                    };
                } else {
                    return job;
                };
            });
            case 'GET_JOB':
                return state.map((job) => {
                    if (job.sku === action.sku){
                        return action.job
                    };
                });
            case 'GET_JOBS':
            return action.jobs;
        default:
            return state;
    };
};
