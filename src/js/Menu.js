class Menu extends Phaser.State {

    create() {
        let _menuLabel;

        _menuLabel  = this.add.text(
            100, 
            50, 
            "Click spacebar to start game",
            {
                font: "50px Arial",
                fill: "#999999"
            }
        );

        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.addOnce(function(){
            this.state.start('Main');
        }, this);

    }
}