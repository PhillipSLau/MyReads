import React, {Component} from 'react'

import PropTypes from 'prop-types'
import BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'



const Books = ({ book }) => {
	
	
	
		return(
			<li>
			<div className="book" id="book.id">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
						<div className="book-shelf-changer">
							
							<select>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
				</div>
			<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
			</li>				
			);
	
};

export default Books
