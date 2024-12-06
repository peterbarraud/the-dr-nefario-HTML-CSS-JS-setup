// Import our custom CSS
import '../scss/styles.scss';
import OpenMessageBox from './messagebox';
const modalDialog = document.querySelector('#modal-dialog');

window.onload = (event) => {
    console.log("page is fully loaded");
    
  };



document.querySelector('.success-button').addEventListener("click", () =>{
    modalDialog.showModal();
    // OpenMessageBox();
});

document.querySelector('#save-changes').addEventListener("click", () => {
    modalDialog.close();
});

