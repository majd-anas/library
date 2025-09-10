const lib=[];
const add=document.querySelector("#add");
const cancel=document.querySelector("#cancel");
const form=document.querySelector("form");
const submitBook=document.querySelector("#submitBook")


function Book(title,author,pageNo,id){
    this.title=title;
    this.author=author;
    this.id=id;
    this.pageNo=pageNo;

}


function addBookToLibrary(){

    submitBook.addEventListener("click",()=>{
        console.log("clicked submit");
        let title=document.querySelector("#bookTitle").value;
        let author=document.querySelector("#bookAuthor").value;
        let pageNo=document.querySelector("#bookPages").value;
        let book=new Book(title,author,pageNo,crypto.randomUUID());
        let id=book.id;
        lib.push(book);
        displayLibrary(title,author,pageNo,id);
    });

    
}

function displayLibrary(title,author,pageNo,id){

    const container=document.querySelector(".container");

    const card=
    
    `
        <div class="container" data-id="${id}" >
        <div class="card">
            <div class="titleBar">${title}</div>
            <div class="content">
                 <ul>
                    <li>Author ${author} </li>
                    <li>Pages ${pageNo} </li>
                 </ul>
            </div>
            <div class="options">
                <ul>
                    <button type="button" id="remove" name="remove">Remove</button>
                    <button type="button" id="edit" name="edit">Edit</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    container.innerHTML+=card;

}

function addBookForm(){
    add.addEventListener("click",()=>{
            console.log("add clicked");
            form.style.display="flex";
    }
    )
}

function cancelAddBook(){
    cancel.addEventListener("click",()=>{
        form.style.display="none";
    })
}


addBookForm();
cancelAddBook();
addBookToLibrary();