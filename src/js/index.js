//This should actually be done by using import, but browser support is quite low
const boot = new Boot(); 
const menu = new Menu();
const main = new Main();
const gameOver = new GameOver();


class Game extends Phaser.Game {

    constructor() {

        super(1200, 800, Phaser.AUTO, 'area');
        this.state.add('Boot', boot, false);
        this.state.add('Menu', menu, false);
        this.state.add('Main', main, false);
        this.state.add('GameOver', gameOver, false);
        
        this.state.start('Boot');
    }

}

new Game();
    

 
