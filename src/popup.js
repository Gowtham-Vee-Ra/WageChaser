document.addEventListener("DOMContentLoaded", () => {
    const addEntryBtn = document.getElementById("addEntry");
    const jobDataList = document.getElementById("jobDataList");

    addEntryBtn.addEventListener("click", () => {
        const jobTitle = prompt("Enter Job Title:");
        const company = prompt("Enter Company Name:");
        const applicationLink = prompt("Enter Application Link:");
        
        if (jobTitle && company && applicationLink) {
            const jobEntry = { jobTitle, company, applicationLink };
            saveJobData(jobEntry);
        }
    });

    function saveJobData(jobEntry) {
        chrome.storage.local.get(["jobApplications"], (result) => {
            let jobApplications = result.jobApplications || [];
            jobApplications.push(jobEntry);
            chrome.storage.local.set({ jobApplications }, () => {
                renderJobList();
            });
        });
    }

    function renderJobList() {
        chrome.storage.local.get(["jobApplications"], (result) => {
            const jobApplications = result.jobApplications || [];
            jobDataList.innerHTML = "";
            jobApplications.forEach((job, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${job.applicationLink}" target="_blank">${job.jobTitle} at ${job.company}</a>`;
                jobDataList.appendChild(li);
            });
        });
    }

    renderJobList();
});
