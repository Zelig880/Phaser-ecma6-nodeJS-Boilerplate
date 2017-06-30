class Boot extends Phaser.State {
    
    preload(){
        
        //Load all images here
        //this.load.image('', '');

    }

    create() {

        //Start all required game engine and plugins required here
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Menu');
    }

}