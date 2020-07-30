
class King extends Piece {
	constructor(team, location) {
		super(name, team, location);
		this.name = "king";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = new Array;
		this.setValidMoves();
	}

	setValidMoves() {
		this.validMoves.length = 0;
		let x, y;

		x = this.coords[0] - 1;
		y = this.coords[1]; 
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 1;
		y = this.coords[1];
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0];
		y = this.coords[1] - 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0];
		y = this.coords[1] + 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 1;
		y = this.coords[1] + 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] - 1;
		y = this.coords[1] + 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] + 1;
		y = this.coords[1] - 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

		x = this.coords[0] - 1;
		y = this.coords[1] - 1;
		if (this.checkBounds(x, y))
			this.validMoves.push(this.convertToOneD(x, y));

	}

}