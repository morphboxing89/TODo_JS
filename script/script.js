const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert('Введите текст');  //Если поле ввода пустое, то оно будет содержать данный текст//
    }
    else {
        let li = document.createElement('li'); //Создает html элемент и сохраняется в переменной li//
        li.innerHTML = inputBox.value; //Любой текст введенный в поле ввода, будет добавлен в li//
        listContainer.appendChild(li); //Будет отображаться под listContaine //
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; //Добавляем в тег span значок креста//
        li.appendChild(span);
    }
    inputBox.value = ''; //После ввода текста, очистит поле ввода//
    saveData(); //Каждый раз при добавлении новой задачи будет вызываться функия сохранения данных //
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); //при нажатии на span удалит родительский эл-т//
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('data'); //Указывает на всё содержимое которое хранится в браузере с именем data//
}
showList();