document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.querySelector('.inputtask');
    const submitButton = document.querySelector('.submitbutton');
    const taskList = document.querySelector('.tasklist');

    function updateTaskListVisibility() {
        if (taskList.children.length === 0) {
            taskList.style.display = "none";
        } else {
            taskList.style.display = "flex"; // Or whatever it was before
        }
    }

    function addTask() {
        const taskText = inputTask.value.trim();
        if (taskText === '') return; // Prevent empty tasks
    
        // Create task container
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
    
        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
    
        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '✖';
    
        // Delete functionality
        deleteButton.addEventListener('click', () => {
            taskItem.classList.add('fade-out'); // Add animation class
            setTimeout(() => {
                taskItem.remove();
                updateTaskListVisibility(); // Call update function after deletion
            }, 300); // Delay removal for smooth animation
        });
    
        // Append elements
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    
        // Update visibility after adding a task
        updateTaskListVisibility();
    
        // Clear input field
        inputTask.value = '';
    }
    
    // Call updateTaskListVisibility() at the beginning
    updateTaskListVisibility();
    

    // Click event for adding tasks
    submitButton.addEventListener('click', addTask);

    // "Enter" key event for adding tasks
    inputTask.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });
});
