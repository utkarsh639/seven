let t = [];
let btn = document.getElementById('add_task_button');

let delete_task = function (event) {
    let id = event.target.id;
    let element_id = 'li_${id}';

    let elem =document.getElementsById(element_id);
    console.log(elem);
    
    elem.remove(); 

    let arr =  id.split("_")
    let index = arr[1];
    console.log(index);
}

let display = function () {
    let ul = document.getElementById("task_list");
    ul.innerText = "";
    for(let i=0;i<t.length;i++){
    let single_t = t[i];
    let new_elem = document.createElement('li');
        new_elem.innerText = single_t;

        let btn = document.createElement('button');
        btn.innerText = "❌ ";
       
        btn.addEventListener("click", delete_task);
        btn.id = 'btn_${i}';
        new_elem.id = 'li_btn_${i}';

        new_elem.appendChild(btn);
  
        ul.appendChild(new_elem);
    }
} 

let fn = function (){
    let input = document.getElementsByName('task')[0];
    let val = input.value;
    t.push(val);
    display();
}
btn.addEventListener('click', fn); 