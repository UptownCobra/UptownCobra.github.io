class Square {
	constructor(index, piece) {
		this.isSelected = false;
		this.index = index;
		this.validMove = false;
		this.width = document.getElementById('board').clientWidth;
		this.squareWidth = .125 * this.width;
		this.squareElement = this.makeSquare();
		this.piece = piece;
		this.setPieceBackground(this.piece);
	};

	// Creates the square div element
	makeSquare() {
		let element = document.createElement('div');
		element.classList = "board-square";
		this.setBoardColor(element);
		//element.addEventListener('click', () => this.setSelected(), 0);
		//element.innerText = this.index;
		element.id = this.index;
		element.style = "height: " + this.squareWidth + "px;";
		document.getElementById('board').appendChild(element);
		return element;
	}


	setSelected() {
		if (!this.isSelected) {
			this.isSelected = true;
			this.squareElement.classList.add('selected');
		}
		else if (this.isSelected) {
			this.isSelected = false;
			this.squareElement.classList.remove('selected');
		}
	}

	clearValidMove() {
		this.validMove = false;
		this.squareElement.classList.remove('valid-move');
	}
	setValidMove() {
		this.validMove = true;
		this.squareElement.classList.add('valid-move');
	}

	setBoardColor(square) {
		if (this.index < 8 || (this.index >= 16 && this.index < 24) || (this.index >= 32 && this.index < 40) || (this.index >= 48 && this.index < 56)) {
			if (this.index % 2 == 0)
				square.classList.add("white-square");
			else
				square.classList.add("black-square");
		}
		else {
			if (this.index % 2 == 0)
				square.classList.add("black-square");
			else
				square.classList.add("white-square");
		}
	}

	setPieceBackground(piece) {
		if (piece != null) {
			this.squareElement.classList.add(piece.image);
		}
	}

	removeBackground() {
		this.squareElement.classList.remove(this.piece.image);
	}

	refresh() {
		if (this.piece != null) {
			this.piece.refresh(this.index)
			this.setPieceBackground(this.piece);
		}
		
	}

}