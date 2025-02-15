const StorageHandler = {
    saveJobData: function (jobEntry, callback) {
        chrome.storage.local.get(["jobApplications"], (result) => {
            let jobApplications = result.jobApplications || [];
            jobApplications.push(jobEntry);
            chrome.storage.local.set({ jobApplications }, callback);
        });
    },

    getJobData: function (callback) {
        chrome.storage.local.get(["jobApplications"], (result) => {
            callback(result.jobApplications || []);
        });
    },

    deleteJobData: function (index, callback) {
        chrome.storage.local.get(["jobApplications"], (result) => {
            let jobApplications = result.jobApplications || [];
            jobApplications.splice(index, 1);
            chrome.storage.local.set({ jobApplications }, callback);
        });
    }
};
