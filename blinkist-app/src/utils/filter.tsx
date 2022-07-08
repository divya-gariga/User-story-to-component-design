
export function getSearchResults(searchTerm:string,ListOfItems:any []){
    const value=searchTerm.toLowerCase();
    const searchResults=ListOfItems.filter((book: any) => {
        return Object.keys(book).some(function (key: string) {
            if((key == "title" || key == "author" )&& value!==" "&&value!="") {
                 return book[key].toLowerCase().indexOf(value) !== -1;
            }
        });
    },
    )
    return searchResults;  
} 