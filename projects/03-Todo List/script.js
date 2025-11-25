const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
let editTodo = null

//add Todo Function
const addTodo = () => {
  const inputText = inputBox.value.trim()
  if (inputText.length <= 0) {
    alert('Write Something In Your Todo')
    return false
  }

  if (addBtn.value === 'Edit') {
    editTodo.target.previousElementSibling.innerHTML = inputText
    editLocalTodo(inputText)
    addBtn.value = 'Add'
    inputBox.value = ''
  } else {
    // creating li and p
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerHTML = inputText
    li.appendChild(p)

    //Edit Button
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    editBtn.classList.add('btn', 'editBtn')
    li.appendChild(editBtn)

    //Delete Button
    const delBtn = document.createElement('button')
    delBtn.innerText = 'Remove'
    delBtn.classList.add('btn', 'delBtn')
    li.appendChild(delBtn)

    todoList.appendChild(li)
    inputBox.value = ''
    saveLocalTodo(inputText)
  }
}

// Update todo function
const updateTodo = (e) => {
  //console.log(e.target)
  if (e.target.innerHTML === 'Remove') {
    console.log(e.target.parentElement)
    todoList.removeChild(e.target.parentElement)
    delLocalTodo(e.target.parentElement)
  }

  if (e.target.innerHTML === 'Edit') {
    inputBox.value = e.target.previousElementSibling.innerHTML
    inputBox.focus()
    addBtn.value = 'Edit'
    editTodo = e
  }
}

const saveLocalTodo = (todo) => {
  let todos
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

const getLocalTodo = () => {
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach((todo) => {
      // creating li and p
      const li = document.createElement('li')
      const p = document.createElement('p')
      p.innerHTML = todo
      li.appendChild(p)

      //Edit Button
      const editBtn = document.createElement('button')
      editBtn.innerText = 'Edit'
      editBtn.classList.add('btn', 'editBtn')
      li.appendChild(editBtn)

      //Delete Button
      const delBtn = document.createElement('button')
      delBtn.innerText = 'Remove'
      delBtn.classList.add('btn', 'delBtn')
      li.appendChild(delBtn)

      todoList.appendChild(li)
    })
  }
}

// Delete Local Todos
const delLocalTodo = (todo) => {
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  let todoText = todo.children[0].innerHTML
  let todoIndex = todos.indexOf(todoText)
  todos.splice(todoIndex, 1)
  localStorage.setItem('todos', JSON.stringify(todos))
  console.log(todoIndex)
}

const editLocalTodo = (todo) => {
  let todos = JSON.parse(localStorage.getItem('todos'))
  let todoIndex = todos.indexOf(todo)
  todos[todoIndex] = inputBox.value
  localStorage.setItem('todos', JSON.stringify(todos))
}

document.addEventListener('DOMContentLoaded', getLocalTodo)
addBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', updateTodo)
