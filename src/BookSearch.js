import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { PropTypes } from 'prop-types';

class BookSearch extends Component {
	state = {
		books: [],
		query: ''
	};

	handleChange = event => {
		let value = event.target.value;
		this.setState({ query: value });
		this.searchBooks(value);
	};

	updateBookShelf = books => {
		let allBooks = this.props.books;
		for (let book of books) {
			book.shelf = 'none';
		}

		for (let book of books) {
			for (let b of allBooks) {
				if (b.id === book.id) {
					book.shelf = b.shelf;
				}
			}
		}
		return books;
	};

	searchBooks = val => {
		if (val.length !== 0) {
			BooksAPI.search(val, 10).then(books => {
				if (books.length) {
					books = books.filter(book => book.imageLinks);
					books = this.updateBookShelf(books);
					this.setState({ books });
				}
			});
		} else {
			this.setState({ books: [], query: '' });
		}
	};

	addBook = (book, shelf) => {
		this.props.onChange(book, shelf);
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.query.length > 0 &&
							this.state.books.map((book, index) => (
								<Book
									book={book}
									key={index}
									onUpdate={shelf => {
										this.addBook(book, shelf);
									}}
								/>
							))}
					</ol>
				</div>
			</div>
		);
	}
}

BookSearch.propTypes = {
	onChange: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
};

export default BookSearch;
