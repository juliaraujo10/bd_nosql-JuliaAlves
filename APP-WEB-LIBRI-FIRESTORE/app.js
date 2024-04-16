/* ###### LISTAGEM DE LIVROS E AUTORES */


const livrosList = document.querySelector('#book-list');

function renderBook(doc) {
    //CRIAÇÃO DOS ELEMENTOS HTML:    
    let li = document.createElement('li');
    let titulo = document.createElement('span');
    let autor = document.createElement('span');


    //CARREGA OS DADOS NOS ELEMENTOS HTML
    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    autor.textContent = doc.data().autor;

    //ADICIONANDO OS DADOS DE AUTOR E TITULO NA TAG LI:
    li.appendChild(titulo);
    li.appendChild(autor);

    //ADICIONANDO A LI NA TAG UL:
    livrosList.appendChild(li);
}


db.collection('libre-firebase')
    .get()
    .then(
        (snapshot)=>{
            // console.log(snapshot.docs)
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
                renderBook(doc);
            });
        }
    ); 

    /* ###### INSERÇÃO DE LIVROS E AUTORES */

    const form = document.querySelector('#add-book-form');

    form.addEventListener('submit', (event) =>{

        event.preventDefault();

        db.collection('libre-firebase')
        .add({
            autor:form.autor.value,
            titulo:form.titulo.value
        }).then(()=>{
            form.titulo.value = '';
            form.autor.value = '';
            window.location.reload();
        });

    });