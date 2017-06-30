
//Declare all game constant here.
//const CONSTANT = 0;

class Main extends Phaser.State {

    create() {
        let _label;

        _label  = this.add.text(
            100, 
            50, 
            "Click spacebar to gameOver",
            {
                font: "50px Arial",
                fill: "#999999"
            }
        );

        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.addOnce(function(){
            this.state.start('GameOver');
        }, this);
    }

    update() {

    }

}