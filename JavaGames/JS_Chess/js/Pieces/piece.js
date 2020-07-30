
class Piece {
	constructor(name, team, location) {
		this.name = name;
		this.team = team;
		this.isTaken = false;
		this.location = location;
		this.coords = this.convertToTwoD(this.location);
		//this.validMoves = this.setValidMoves();
		//this.imageLocation = this.setImageLocation();
		this.moveCnt = 0;
	}

	setImage() {
		return this.team + "-" + this.name;
	}

	getValidMoves() {
		return this.validMoves;
	}
	convertToTwoD(num) {
		let coordinates = new Array;
		coordinates[0] = Math.floor(num / 8);
		coordinates[1] = num % 8;
		return coordinates;
	}

	convertToOneD(num1, num2) {
		return (num1 * 8) + num2;
	}
	checkBounds(num1, num2) {
		if ((num1 >= 0 && num1 <= 7) && (num2 >= 0 && num2 <= 7)) {
			return true;
		} else
			return false;
	}
	refresh(index) {
		this.location = index;
		this.coords = this.convertToTwoD(this.location);
		this.setValidMoves();
	}
}