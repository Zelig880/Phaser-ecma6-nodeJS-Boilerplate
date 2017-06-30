class GameOver extends Phaser.State {

    create() {
        let _gameOverLabel;

        _gameOverLabel  = this.add.text(
            100, 
            50, 
            "The game is finished.",
            {
                font: "50px Arial",
                fill: "#FFFFFF"
            }
        );

    }
}