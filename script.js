const lib=[];
const add=document.querySelector("#add");
const cancel=document.querySelector("#cancel");
const form=document.querySelector("form");
const submitBook=document.querySelector("#submitBook")

function Book(title,author,read,id){
    this.title=title;
    this.author=author;
    this.id=id;
    this.read=read;
}


function addBookToLibrary(title,author,read){

    submitBook.addEventListener("click",()=>{
        let title=document.querySelector("#bookTitle").value;
        let author=document.querySelector("#bookAuthor").value;
        let pageNo=document.querySelector("#bookPages").value;
        let book=new Book(title,author,read,crypto.randomUUID());
        lib.push(book);
    });
    

}

function displayLibrary(){
    lib.forEach((book)=>{
        
    });
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