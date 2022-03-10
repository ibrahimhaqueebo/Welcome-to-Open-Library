const searchBook=()=>{
    const searchFild=document.getElementById('search-fild');
    const searchText=searchFild.value;
    searchFild.value='';
    const url=`https://openlibrary.org/search.json?q=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displaySearchResult(data.docs))
}

const displaySearchResult=books=>{
   const searchResult=document.getElementById('search-result');
   books.forEach(book => {
      const div=document.createElement('div');
      div.classList.add('col')
      div.innerHTML=`
      <div class="card">
     
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
       <h6>author name :</h6>
        <p>${book.author_name}</p>
        <h6>publisher :</h6>
        <p>${book.publisher}</p>
        <h6>publish date/year :</h6>
        <p>${book.publish_date}</p>
      </div>
    </div>
      `
      searchResult.appendChild(div);
   });

}