document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskTime = document.getElementById('task-time').value;
    const taskDifficulty = document.getElementById('task-difficulty').value;

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');

        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const taskTimeSpan = document.createElement('span');
        taskTimeSpan.textContent = `الوقت: ${taskTime}`;

        const difficultyBadge = document.createElement('span');
        difficultyBadge.textContent = taskDifficulty;
        difficultyBadge.classList.add('task-difficulty');
        if (taskDifficulty === 'سهل') {
            difficultyBadge.classList.add('difficulty-easy');
        } else if (taskDifficulty === 'متوسط') {
            difficultyBadge.classList.add('difficulty-medium');
        } else {
            difficultyBadge.classList.add('difficulty-hard');
        }

        taskInfo.appendChild(taskContent);
        taskInfo.appendChild(difficultyBadge);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'حذف';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskInfo);
        listItem.appendChild(taskTimeSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
        document.getElementById('task-time').value = '';
        document.getElementById('task-difficulty').value = 'سهل';
        taskInput.focus();
    }
}
