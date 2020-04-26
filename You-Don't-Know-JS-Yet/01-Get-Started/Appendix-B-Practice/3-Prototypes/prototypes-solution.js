function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
  symbols: [ "X", "Y", "Z", "W", "$", "*", "<", "@" ],
  
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }

    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },

  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }

    return this.symbols[this.position];
  }
};

var slotMachine = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel)
  ],

  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },

  display() {
    for (i = 0; i < 3; i++) {
      const n = reel.symbols.length;

      const fakeReels = this.reels.map(reel => {  
        const newReel = Object.create(reel);
        newReel.position = ((newReel.position + i - 1) % n + n) % n;
        return newReel;
      });
      const first = fakeReels[0].display();
      const second = fakeReels[1].display();
      const third = fakeReels[2].display();

      console.log(`${first} | ${second} | ${third}`);
    }
    console.log('---------')
  }
};

slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @

slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *