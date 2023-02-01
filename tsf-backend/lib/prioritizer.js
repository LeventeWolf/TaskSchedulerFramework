function prioritizeTasks(tasks) {
    const priorityValues = {
        "High": 1,
        "Medium": 0,
        "Low": -1,
    }

    const mappedPriorities = tasks.map((task) => {
        return {...task, priority: priorityValues[task.content.priority]}
    });

    mappedPriorities.sort((a, b) => b.priority - a.priority);

    return mappedPriorities;
}

module.exports = prioritizeTasks;