import React from 'react'
import {Link} from 'react-router-dom'
import Books from './Books'
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {
	
	render(){
		
		return(
		  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    </ol>
                  </div>
                </div>
              </div>
			  <div className="open-search">
				<Link to='/Search'>Add a Book</Link>
            </div>
			</div>
		)
	}
}

export default BookShelf