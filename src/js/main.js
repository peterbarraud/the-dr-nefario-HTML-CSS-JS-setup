// Import our custom CSS
import '../scss/styles.scss'
// import '../js/messagebox'

const modalDialog = document.querySelector('#modal-dialog');



document.querySelector('.success-button').addEventListener("click", () =>{
    modalDialog.showModal();
    // OpenMessageBox();
});

document.querySelector('#save-changes').addEventListener("click", () => {
    modalDialog.close();
});

