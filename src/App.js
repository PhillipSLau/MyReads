import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import Books from './Books'

import './App.css'

class BooksApp extends React.Component {
 
    
  render() {
    return ( 
		<div className="app">
			<Route exact path='/' render={() => (
			<BookShelf
			/>
			)}/>
			<Route path='/search' render={({history}) => (
			<SearchBooks
				
			
			/>
			)}
			/>
			</div>
      
    )
  }
}

export default BooksApp
