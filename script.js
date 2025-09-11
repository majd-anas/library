const lib=[];
const add=document.querySelector("#add");
const cancel=document.querySelector("#cancel");
const form=document.querySelector("form");
const submitBook=document.querySelector("#submitBook")
const remove=document.querySelector("#removeButton");


function Book(title,author,pageNo,read,id){
    this.title=title;
    this.author=author;
    this.id=id;
    this.pageNo=pageNo;

}


Book.prototype.readStatus=function(){
        const readBttn=document.querySelector(`[data-readId="${this.id}"]`);
        if(readBttn.checked)
            this.read=true;
        else
            this.read=false;

}

function readClicked(book){
    book.readStatus();
    console.log(`${book.title} reading status: ${book.read}`);
}

function addBookToLibrary(){

    submitBook.addEventListener("click",()=>{
        console.log("clicked submit");
        let title=document.querySelector("#bookTitle").value;
        let author=document.querySelector("#bookAuthor").value;
        let pageNo=document.querySelector("#bookPages").value;
        let book=new Book(title,author,pageNo,false,crypto.randomUUID());
        let id=book.id;
        lib.push(book);
        displayLibrary(book);
    });

    
}

function displayLibrary(book){

    const container=document.querySelector(".container");

    const card=
    
    `
        <div class="card" data-id="${book.id}">
            <div class="titleBar">${book.title}</div>
            <div class="content">
                 <ul>
                    <li>Author ${book.author} </li>
                    <li>Pages ${book.pageNo} </li>
                 </ul>
            </div>
            <div class="options" >
                    <button onclick="removeBook(this)" data-remove-id="${book.id}" type="button" class="removeButton" name="remove">Remove</button>
            </div>
        </div>
    `;
    container.innerHTML+=card;
    const options=document.querySelector(`[data-id="${book.id}"] .options`);

    const readButton=document.createElement("input");
    readButton.type="checkbox";
    readButton.setAttribute('id',book.id);
    const readLabel=document.createElement("label");
    readLabel.setAttribute("for",book.id);
    readLabel.textContent="read";
    readButton.setAttribute("data-readId",book.id);
    options.append(readLabel,readButton);

    readButton.addEventListener("click",()=>readClicked(book));
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

function removeBook(e){

                console.log("remove clicked");
                const cards=document.querySelectorAll(".card");
                cards.forEach((card)=>{
                    if(card.dataset.id==e.dataset.removeId){
                        while(card.firstChild){
                            card.removeChild(card.firstChild);
                        }
                        card.remove();
                    }
                });
}


addBookForm();
cancelAddBook();
addBookToLibrary();
