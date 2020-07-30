
class Pawn extends Piece {
	constructor(team,location) {
		super(name, team, location);
		//this.moveCnt = 0;
		this.name = "pawn";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = new Array;
		this.setValidMoves();	
	}

	setValidMoves() {
		this.validMoves.length = 0;
		if (this.moveCnt == 0) {
			if (this.team == 'black') {
				this.validMoves.push(this.convertToOneD(this.coords[0] + 1, this.coords[1]));
				this.validMoves.push(this.convertToOneD(this.coords[0] + 2, this.coords[1]));
				this.validMoves.push(this.convertToOneD(this.coords[0] + 1, this.coords[1] + 1));
				this.validMoves.push(this.convertToOneD(this.coords[0] + 1, this.coords[1] -1));
			} else {
				this.validMoves.push(this.convertToOneD(this.coords[0] - 1, this.coords[1]));
				this.validMoves.push(this.convertToOneD(this.coords[0] - 2, this.coords[1]));
				this.validMoves.push(this.convertToOneD(this.coords[0] - 1, this.coords[1] + 1));
				this.validMoves.push(this.convertToOneD(this.coords[0] -1, this.coords[1] -1));

			}
		}
		else {
			if (this.team == 'black') {
				if(this.checkBounds(this.coords[0] + 1 ,this.coords[1])) {
					this.validMoves.push(this.convertToOneD(this.coords[0] + 1, this.coords[1]));
				} if(this.checkBounds(this.coords[0] + 1 ,this.coords[1] + 1)) {
					this.validMoves.push(this.convertToOneD(this.coords[0] + 1, this.coords[1] + 1));
				} if(this.checkBounds(this.coords[0] + 1 ,this.coords[1] - 1)) {
					this.validMoves.push(this.convertToOneD(this.coords[0] + 1, this.coords[1] -1));
				}
			} else {
				if(this.checkBounds(this.coords[0] - 1, this.coords[1])) {
					this.validMoves.push(this.convertToOneD(this.coords[0] - 1, this.coords[1]));
				}if(this.checkBounds(this.coords[0] - 1, this.coords[1] + 1)) {
					this.validMoves.push(this.convertToOneD(this.coords[0] - 1, this.coords[1] + 1));
				} if(this.checkBounds(this.coords[0] - 1, this.coords[1] - 1)) {
					this.validMoves.push(this.convertToOneD(this.coords[0] -1, this.coords[1] -1));
				}
			}
		}

	
	}

}