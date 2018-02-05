import React, { Component } from 'react';
import BookShelf from './BookShelf.js';
import PropTypes from 'prop-types';

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
							onChangeShelf={this.props.onChange}
						/>

						<BookShelf
							books={this.props.books.filter(book => book.shelf === 'read')}
							title="Read"
							onChangeShelf={this.props.onChange}
						/>

						<BookShelf
							books={this.props.books.filter(book => book.shelf === 'wantToRead')}
							title="Want to Read"
							onChangeShelf={this.props.onChange}
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

ListBook.propTypes = {
	books: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
};

export default ListBook;
