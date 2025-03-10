class App{
    constructor(){
        'use strict';
        if(DEV) console.log('App start()');

        // Scenes
        let scenes = [];
        scenes.push(Boot);
        scenes.push(Preload);
        scenes.push(Menu);
        scenes.push(BuyHammer);
        scenes.push(HowToPlay);
        scenes.push(ChooseLevel);
        scenes.push(GamePlay);

        // Game config
        const config = {
            type: Phaser.AUTO,
            parent: 'phaser-app',
            title: `Whack A Mole v${VERSION}${DEV ? ' (DEV)' : ''}`,
            url: 'https://github.com/perxel/whack-a-mole',
            width: window.innerWidth,
            height: window.innerHeight,
            scale: {
                mode: Phaser.Scale.RESIZE,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            scene: scenes,
            backgroundColor: '#c8e082',
            render: {
                pixelArt: false
            },
            dom: {
                createContainer: true
            },
            resolution: window.devicePixelRatio,
            antialias: true
        };

        // Create game app
        let game = new Phaser.Game(config);

        // Globals
        game.URL = '';
        game.gameVersion = VERSION;

        game.CONFIG = {
            width: game.config.width,
            height: game.config.height,
            centerX: Math.round(0.5 * game.config.width),
            centerY: Math.round(0.5 * game.config.height)
        };

        // Sound
        game._SOUND = new Sound();

        return game;
    }
}