const OpenMessageBox= (title='User message', body='Message box') => {
    let dialog = document.createElement('dialog');

    dialog.appendChild(Object.assign(document.createElement("h3"),{innerHTML : title}));
    dialog.appendChild(Object.assign(document.createElement('p'),{innerHTML: body}));

    let form = document.createElement('form');
    // <button value="cancel" >Cancel</button>
    form.appendChild(Object.assign(document.createElement("button"),{
        value : 'cancel',
        formmethod:'dialog',
        textContent:'OK'
    }));
    dialog.appendChild(form);
    document.body.appendChild(dialog);
    dialog.showModal();
}