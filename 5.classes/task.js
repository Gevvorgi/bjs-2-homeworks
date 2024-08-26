class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this. pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    get state() {
		return this._state;
	}

	set state(stateValue) {
		if (stateValue < 0) {
			this._state = 0;
		} else if (stateValue > 100) {
			this._state = 100;
		} else {
			this._state = stateValue;
		}
	}

	fix() {
	this.state = this.state * 1.5;
	return this.state;
	}
}

class Magazine extends PrintEditionItem{
    constructor(...arg){
        super(...arg)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, ...arg){
        super(...arg)
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(...arg){
        super(...arg)
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(...arg){
        super(...arg)
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(...arg){
        super(...arg)
        this.type = "detective";
    }
}

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30){
            this.books.push(book)
        }
    }
    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i][type] === value) {
                return this.books[i]
            }
        }
        return null;
    }
    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].name === bookName){
                return this.books.splice([i], 1)[0]
            }
        }
        return null
    }

}
