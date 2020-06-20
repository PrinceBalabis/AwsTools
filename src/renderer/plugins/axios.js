import axios from "axios";

export const setupAxios = function () {
    // Global timeout and number of retries for requests
    axios.defaults.timeout = 10000;
    axios.defaults.retry = 2;

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(error) {
        var config = error.config;

        // If config does not exist or the retry option is not set, reject
        if (!config || !config.retry) {
            return Promise.reject(error);
        }

        // Don't retry if unauthorized
        if (error.response && (
            error.response.status === 400 ||
            error.response.status === 401 ||
            error.response.status === 404)) {

            return Promise.reject(error);
        }

        // Set variable for keeping track of the retry count
        config.retryCount = config.retryCount || 0;

        // Check if number of retries are reached
        if (config.retryCount >= config.retry) {
            return Promise.reject(error);
        }

        config.retryCount += 1;

        return new Promise(resolve => setTimeout(() => resolve(axios(config)), 1000));
    });


    axios.interceptors.response.use(undefined, function axiosUnauthorizedInterceptor(error) {
        if (error.response && error.response.status === 401) {
            alert("Session has timed out, please log in again.");
            cancelRequests(CancelTokenTypes.ALL, "Session has timed out.");
            store.dispatch("resetSessionId");
            store.dispatch("signOut");
        }

        return Promise.reject(error);
    });
}


/**
 * Function to cancel pending axios requests
 *
 * @param {string} type Type of request to cancel, or ALL for all.
 * @param {string} reason Message containing reason for cancelling requests.
 */
export const cancelRequests = function (type, reason = "Request cancelled.") {
    let cancelledRequests = 0;
    if (type === CancelTokenTypes.ALL) {
        // Handle cancelling all requests through recursion
        for (let innerType in cancelTokens) {
            cancelledRequests += cancelRequests(innerType, reason);
        }
    } else if (cancelTokens.hasOwnProperty(type)) {
        for (let cancelToken of cancelTokens[type]) {
            cancelToken.cancel(reason);
            cancelledRequests++;
        }

        cancelTokens[type] = [];
    }

    return cancelledRequests;
}
