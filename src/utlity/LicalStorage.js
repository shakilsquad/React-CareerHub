const getStorageJobApplication =  () =>{
    const storageJobApplication = localStorage.getItem('job-applications');
    if(storageJobApplication){
        return JSON.parse(storageJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storageJobApplications = getStorageJobApplication();
    const exist = storageJobApplications.find(jobId => jobId === id);
    if(!exist){
        storageJobApplications.push(id);
        localStorage.getItem('job-applications',JSON.stringify(storageJobApplications))
    }
}
export{getStorageJobApplication, saveJobApplication};
