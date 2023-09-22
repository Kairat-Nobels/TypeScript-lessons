"use strict";
class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    tick() {
        this.seconds++;
        if (this.seconds > 59) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes > 59) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours > 23) {
            this.hours = 0;
        }
    }
}
class Clock24 extends Clock {
    render() {
        const currentHour = this.hours % 24;
        const hours = currentHour.toString().padStart(2, '0');
        const minutes = this.minutes.toString().padStart(2, '0');
        return `${hours} : ${minutes}`;
    }
}
const clock24 = new Clock24(23, 59, 59);
console.log(clock24.render());
clock24.tick();
console.log(clock24.render());
class Clock12 extends Clock {
    render() {
        const timeType = this.hours >= 12 ? 'PM' : 'AM';
        const currentHour = this.hours % 12;
        const hours = currentHour.toString().padStart(2, '0');
        const minutes = this.minutes.toString().padStart(2, '0');
        return `${hours} : ${minutes} ${timeType}`;
    }
}
const clock12 = new Clock12(23, 59, 59);
console.log(clock12.render());
clock12.tick();
console.log(clock12.render());
class Car {
    constructor(seats, colour, canHavePassengers, fuelPer100Kilometers) {
        this.seats = seats;
        this.colour = colour;
        this.canHavePassengers = canHavePassengers;
        this.fuelPer100Kilometers = fuelPer100Kilometers;
    }
    calcFuelNeeded(distance) {
        return (this.fuelPer100Kilometers / 100) * distance;
    }
}
const porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200));
const superMan = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
};
console.log(superMan.guessWho('bird'));
console.log(superMan.guessWho('plane'));
"It's a plane?";
console.log(superMan.guessWho('superman'));
"It's a superman!";
//# sourceMappingURL=9_part.js.map