let inMemoryIssue =[];
let nextId = 1;

function getIssueList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryIssue);
    });
}

function getIssueById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("id parameter is required"));
        }
        
        resolve(inMemoryIssue.find(issue => issue.id === id));
    });
}

function addIssue(title, description) {
    return new Promise((resolve, reject) => {
        if (!title || title===undefined) {
            reject(new Error("Issue title required"));
        }
        else if (!description || description===undefined) {
            reject(new Error("Issue description required"));
        }
        else{
            inMemoryIssue.push({
                id:nextId,
                title,
                description
            });
            nextId+=1;
        }
        resolve();
    });
}

function removeIssueById(id) {
    return new Promise((resolve, reject) => {
        issue = inMemoryIssue.find(issue => issue.id === id);
        if(!issue){
            reject(new Error("Issue doesn't exist"));
        }
        inMemoryIssue= inMemoryIssue.filter(issue=> issue.id !==id);
        resolve();
    });
}

function updateIssue(id,newTitle, newDescription) {
    return new Promise((resolve, reject) => {
        issue = inMemoryIssue.find(issue => issue.id === id);
        if(!issue){
            reject(new Error("Issue doesn't exist"));
        }
        issue.title = newTitle;
        issue.description = newDescription;
        resolve();
    });
}

module.exports = {
    getIssueList,
    getIssueById,
    addIssue,
    removeIssueById,
    updateIssue
};