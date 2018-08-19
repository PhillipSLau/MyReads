import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Books from './Books'




class SearchBooks extends React.Component {
		
		
		state = {
		query: '',
		books: []
	};

	updateQuery(query) {
		BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
	this.setState({query});
}

BookResults() {
	const {books, query} = this.state;

	
	if (query) {
		return books.error ?
		<div> No Books Found</div>
		: books.map((book, index) => { 
		return (
		<Books
			key ={index}
			book={book}
			
		/>
		);
		});
		}
	}
	
	
		
		render(){
		return(
			<div className="search-books">
				<div className="search-books-bar">
				  <Link to='/' className="close-search">Close</Link>
				  <div className="search-books-input-wrapper">
					{/*
					  NOTES: The search from BooksAPI is limited to a particular set of search terms.
					  You can find these search terms here:
					  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					  you don't find a specific author or title. Every search is limited by search terms.
					*/}
					<input 
						type="text" 
						placeholder="Search by title or author"
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
						
						 
					/>

				  </div>
				</div>
				<div className="search-books-results">
				  <ol className="books-grid">
					<li> 
					
					{this.BookResults()}
					
				
						
					</li>
				  </ol>
				</div>
			  </div>
		
		)
	}
}


export default SearchBooks;