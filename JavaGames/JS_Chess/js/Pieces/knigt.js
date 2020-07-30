
class Knight extends Piece {
	constructor(team, location) {
		super(name, team, location);
		//this.image = setImage();
		this.name = "knight";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = new Array;
		this.setValidMoves();
	}

	setValidMoves() {
		this.validMoves.length = 0;
		let x, y;

		x = this.coords[0] - 2;
		y = this.coords[1] - 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] - 2;
		y = this.coords[1] + 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 2;
		y = this.coords[1] - 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 2;
		y = this.coords[1] + 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] - 1;
		y = this.coords[1] - 2;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 1;
		y = this.coords[1] - 2;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] - 1;
		y = this.coords[1] + 2;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 1;
		y = this.coords[1] + 2;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

	}
}

