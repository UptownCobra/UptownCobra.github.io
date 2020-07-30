
class Rook extends Piece {
	constructor(team, location) {
		super(name, team, location);
		this.name = "rook";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = new Array;	
		this.setValidMoves();
	}

	setValidMoves() {
		this.validMoves.length = 0;
		let coords = this.coords;

		for (let i = coords[0]- 1; i >= 0; i--) {
			this.validMoves.push(this.convertToOneD(i, coords[1]));
		}

		for (let i = coords[0] + 1; i <=7 ; i++) {
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