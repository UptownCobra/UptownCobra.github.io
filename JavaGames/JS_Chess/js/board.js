//'use strict';

class Board {
	constructor(size) {
		this.size = size,
		this.gameBoard = document.getElementById("board")
		this.selectedIndex = null;
		this.initBoardArray = this.createInitBoard(); 
		this.boardArray = new Array;
		this.boardArray = this.initBoard();
		this.validMoves;
		this.inValidMoves;
		
	
	};

	initBoard() {
		let boardArray = new Array();
		for (let i = 0; i <= this.size; i++) {
			if (this.initBoardArray[i] != null) {
				this.initBoardArray[i].location = i;
			}
			boardArray[i] = new Square(i, this.initBoardArray[i]);
			boardArray[i].squareElement.addEventListener('click', (e) => this.handleSquareClick(e), 0);
		}
		return boardArray;
	}

	handleSquareClick(e) {
		let index = parseInt(e.target.id);
		let curSquare = this.boardArray[index]; //element that was clicked on 
		if (!this.boardArray.some((i) => i.isSelected)) { //if none of the squares are selected
			curSquare.setSelected();
			this.selectedIndex = curSquare.index;
			this.setValidMoves();
		} else {
			if (curSquare.isSelected) {
				this.clearValidMoves();
				curSquare.setSelected();
				this.selectedIndex = null;
			} else if (curSquare.validMove) {
				this.movePiece(curSquare);
			}
		}
		
	}

	
	setValidMoves() {
		let index = this.selectedIndex
		let square = this.boardArray[index];
		this.validMoves = square.piece.validMoves;
		this.checkValidMoves(square);
		this.validMoves.forEach((i) => this.boardArray[i].setValidMove());
	}
	clearValidMoves() {
		this.validMoves.forEach((i) => this.boardArray[i].clearValidMove())
	}
	createInitBoard() {
		w = 'white';
		b = 'black';
		return [new Rook(b, 0), new Knight(b, 1), new Bishop(b, 2), new King(b,3), new Queen(b,4), new Bishop(b, 5), new Knight(b,6), new Rook(b,7),
			new Pawn(b,8), new Pawn(b,9), new Pawn(b,10), new Pawn(b,11), new Pawn(b,12), new Pawn(b,13), new Pawn(b,14), new Pawn(b,15),
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			new Pawn(w,48), new Pawn(w,49), new Pawn(w,50), new Pawn(w,51), new Pawn(w,52), new Pawn(w,53), new Pawn(w,54), new Pawn(w,55),
			new Rook(w,56), new Knight(w,57), new Bishop(w, 58), new King(w,59) , new Queen(w,60), new Bishop(w, 61), new Knight(w,62), new Rook(w,63)

		]
	}

	refresh() {
		this.clearValidMoves();
		this.boardArray[this.selectedIndex].setSelected();
		this.boardArray[this.selectedIndex].piece = null;
		this.selectedIndex = null;
		this.clearValidMoves();
		
		this.boardArray.forEach((square) => square.refresh());
		
	}

	checkValidMoves(square) {
		let team = square.piece.team;
		let moveSquare;
		let board = this.boardArray;
		this.findInvalidMoves(square);
		let copy = this.validMoves
		this.validMoves = copy.filter((i, index) => {
			if(this.inValidMoves.includes(i)){
				return false;
			}
			moveSquare = board[i]
			if (moveSquare.piece) {
				if(square.piece.name == "pawn") {
					if(square.piece.coords[1] != moveSquare.index % 8) {
						if (team != moveSquare.piece.team) {
							return true;
						}
					} 
				}else {
					if (team != moveSquare.piece.team) {
						return true;
					}
				}
			} else {
				if(square.piece.name == "pawn") {
					if(square.piece.coords[1] == moveSquare.index % 8) {
						return true;
					}
				 } else 
					return true
				}
		});
	}

	movePiece(square) {
		if (square.piece != null) {
			square.removeBackground();
		}
		
		square.piece = this.boardArray[this.selectedIndex].piece;
		
		square.piece.moveCnt++;
		
		this.boardArray[this.selectedIndex].squareElement.classList.remove(this.boardArray[this.selectedIndex].piece.image);
		
		this.refresh();

	}
	findInvalidMoves(square) {
		this.inValidMoves =[];
		let invalidMovesAbovePiece = new Array();
		let invalidMovesBelowPiece = new Array()
		let pieceIndex = square.piece.location;
		let pieceY = square.piece.coords[0];
		let pieceX = square.piece.coords[1];
		let moves = this.validMoves;
		let board = this.boardArray;
		let movesWithPieceOnIt = this.validMoves.filter(function (index) {
			if(board[index].piece != null) {
				return true;
			} else {
				return false;
			}
		})
		moves.sort();
		movesWithPieceOnIt.forEach((index) => {
			let pieceCoords = this.convertToTwoD(index);
			if(index < pieceIndex){
				if(pieceCoords[1] == pieceY) { //calculate invalid Moves above piece on the y axis
					for(let i = pieceCoords[0] - 1 ; i >= 0; i-- ) {
						invalidMovesAbovePiece.push(this.convertToOneD(pieceCoords[1],i))
					}
				} else if (pieceCoords[0] == pieceX) { //calculate invalid Moves above piece on the x axis					
					for(let i = pieceCoords[1] - 1; i >= 0; i--) {
						invalidMovesAbovePiece.push(this.convertToOneD(i,pieceCoords[0]))
					}
				}else if(pieceCoords[0] > pieceX) { //calulate invalid
					let tempX = pieceCoords[0] + 1;
					let tempY = pieceCoords[1] - 1;
					for(let i = tempX; i <= 8; i++ ){
						invalidMovesAbovePiece.push(this.convertToOneD(tempY,i));
						tempY--;
					}
				} else if (pieceCoords[0] < pieceX) {
					let tempX = pieceCoords[0] - 1;
					let tempY = pieceCoords[1] - 1;
					for(let i = tempX; i >= 0; i-- ){
						invalidMovesAbovePiece.push(this.convertToOneD(tempY,i));
						tempY--;
					}
				}

			} else if(index > pieceIndex){
				if(pieceCoords[1] == pieceY) { //calculate invalid Moves above piece on the y axis
					for(let i = pieceCoords[0] + 1 ; i < 8; i++ ) {
						invalidMovesAbovePiece.push(this.convertToOneD(pieceCoords[1],i))
					}
				} else if (pieceCoords[0] == pieceX) { //calculate invalid Moves above piece on the x axis					
					for(let i = pieceCoords[1] + 1; i < 8 ; i++) {
						invalidMovesAbovePiece.push(this.convertToOneD(i,pieceCoords[0]))
					}
				}else if(pieceCoords[0] > pieceX) { //calulate invalid
					let tempX = pieceCoords[0] + 1;
					let tempY = pieceCoords[1] + 1;
					for(let i = tempX; i <= 8; i++ ){
						invalidMovesBelowPiece.push(this.convertToOneD(tempY,i));
						tempY++;
					}
				} else if (pieceCoords[0] < pieceX) {
					let tempX = pieceCoords[0] - 1;
					let tempY = pieceCoords[1] + 1;
					for(let i = tempX; i >= 0; i-- ){
						invalidMovesBelowPiece.push(this.convertToOneD(tempY,i));
						tempY++;
					}
				}

			}
		})
		this.inValidMoves = invalidMovesAbovePiece.concat(invalidMovesBelowPiece);
		invalidMovesAbovePiece = [];
		invalidMovesBelowPiece = [];

		
	}
	convertToOneD(num1, num2) {
		return (num1 * 8) + num2;
	}
	convertToTwoD(num) {
		let coordinates = new Array;
		coordinates[1] = Math.floor(num / 8);
		coordinates[0] = num % 8;
		return coordinates;
	}
}


let w = 'white';
let b = 'black';
let test = new Board(63);

