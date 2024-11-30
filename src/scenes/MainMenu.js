import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
     //   this.add.image(512, 384, 'background');

        this.add.image(512, 300, 'logo');

        this.add.text(512, 460, 'Main2 Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });


        const text = this.add.text(10, 10, 'Press a button on the Gamepad to use', { font: '16px Courier', fill: '#00ff00' });
        
        this.input.gamepad.once('down', function (pad, button, index)
        {

            text.setText(`Playing with ${pad.id}`);

            this.gamepad = pad;

            this.sprite = this.add.image(400, 300, 'elephant');

        }, this);
    }
}
