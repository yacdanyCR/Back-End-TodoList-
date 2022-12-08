class TaskModel {
    #task

    constructor(task) {
        this.#task = task;
    }

    getTask() {
        return this.#task;
    }
}

module.exports = {
    TaskModel
}