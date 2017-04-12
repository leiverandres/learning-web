import InlineEdit from 'inline-edit-js';
let el = document.getElementById('editable-title');
let editable = new InlineEdit(el, {
  onChange: (newValue, oldValue) => {
    window.alert(`Here we send data to server: ${newValue}`);
  }
});
console.log('hello');
