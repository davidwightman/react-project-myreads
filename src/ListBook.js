import React, { Component } from 'react';
import BookShelf from './BookShelf.js';

class ListBook extends Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
							title="Currently Reading"
						/>

						<BookShelf books={this.props.books.filter(book => book.shelf === 'read')} title="Read" />

						<BookShelf
							books={this.props.books.filter(book => book.shelf === 'wantToRead')}
							title="Want to Read"
						/>
					</div>
				</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
		);
	}
}

export default ListBook;
