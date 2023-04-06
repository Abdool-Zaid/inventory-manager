function new_item() {
    let key = document.querySelector('#key').value;
    let value = document.querySelector('#value').value;
    console.log(key, '|', value)
    let obj = {}
    obj[key] = value
    console.log(obj)
  }
document.querySelector('#submit').addEventListener('click',new_item)