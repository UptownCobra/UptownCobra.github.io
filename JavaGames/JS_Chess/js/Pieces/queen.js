
class Queen extends Piece {
	constructor(team, location) {
		super(name, team, location);
		this.name = "queen";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = new Array;
		this.setValidMoves();	
	}

	setValidMoves() {
		this.validMoves.length = 0;
		let x, y;
		let coords = this.coords;

		y = coords[1];
		for (let i = coords[0]; i >= 0; i--) {
			if (this.checkBounds(i, y))
				this.validMoves.push(this.convertToOneD(i, y));
			y++;
		}

		y = coords[1];
		for (let i = coords[0]; i <= 7; i++) {
			if (this.checkBounds(i, y))
				this.validMoves.push(this.convertToOneD(i, y));
			y--;
		}

		y = coords[1];
		for (let i = coords[0]; i >= 0; i--) {
			if (this.checkBounds(i, y))
				this.validMoves.push(this.convertToOneD(i, y));
			y--;
		}

		y = coords[1];
		for (let i = coords[0]; i <= 7; i++) {
			if (this.checkBounds(i, y))
				this.validMoves.push(this.convertToOneD(i, y));
			y++;
		}

		for (let i = coords[0] - 1; i >= 0; i--) {
			this.validMoves.push(this.convertToOneD(i, coords[1]));
		}

		for (let i = coords[0] + 1; i <= 7; i++) {
			this.validMoves.push(this.convertToOneD(i, coords[1]));
		}

		for (let i = coords[1] - 1; i >= 0; i--) {
			this.validMoves.push(this.convertToOneD(coords[0], i));
		}

		for (let i = coords[1] + 1; i <= 7; i++) {
			this.validMoves.push(this.convertToOneD(coords[0], i));
		}
	}
}