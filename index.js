let tasks = [
    {
        id: 1,
        name: 'Belajar DOM',
        status: true,
    },
]

const addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', function () {
    //console.log(addBtn)
    let inputTask = document.getElementById('input_task').value
    if (inputTask !== '') {
        let id = tasks[tasks.length - 1].id + 1
        let tempObject = {
            id: id,
            name: inputTask,
            status: true
        }
        tasks.push(tempObject)
        getTasks()
        document.getElementById('inputTask').value = ''
    } else {
        alert('task kosong harap diisi !')
    }
})

const deleteBtn = document.getElementById('delete_btn')
deleteBtn.addEventListener('click', function () {
    let id = tasks[tasks.length - 1].id
    let task = tasks.pop(id)
    getTasks(task)
})

function getTasks() {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    tasks.forEach(task => {
        tbody.innerHTML += `<tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td>${task.status}</td>
        </tr>  `
    })
}






