const lib=[];
let add=document.querySelector("#add");

function Book(title,author,read,id){
    this.title=title;
    this.author=author;
    this.id=id;
    this.read=read;
}


function addBookToLibrary(title,author,read){
    let book=new Book(title,author,read,crypto.randomUUID());
    lib.push(book);
}

function displayLibrary(){
    for(let book of lib){
        //creat the cards
    }
}

function addNewBook(){

}