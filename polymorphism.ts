class SoundPlayer {
    playSound(): void {
        console.log("Making a generic sound...");
    }
}

class Guitar extends SoundPlayer {
     playSound(): void {
        console.log("Strumming guitar strings: *Ting!*");
    }
}

class Drum extends SoundPlayer {
     playSound(): void {
        console.log("Hitting the drum: *Boom!*");
    }
}

const instruments: SoundPlayer[] = [new Guitar(), new Drum(), new SoundPlayer()];

instruments.forEach((instrument) => {
    instrument.playSound();
});