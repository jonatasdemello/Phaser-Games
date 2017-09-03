var game;
window.onload = function () {
    game = new Phaser.Game(640, 429, Phaser.AUTO, "phaser_game");
    
    game.state.add('StateIntro', StateIntro);
    game.state.start('StateIntro');
    
    game.state.add('StateOver', StateOver);
    
    game.state.add('StateMain', StateMain);
    //game.state.start('StateMain');
};