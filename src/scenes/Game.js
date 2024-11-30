import { Scene } from 'phaser';

export class Game extends Scene


{

     x=0;
     y=0;
     text = null;
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'background').setAlpha(0.5);

        this.text = this.add.text(this.x, this.y, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update(){
        // Add velocity properties if they don't exist yet
        if (this.velocityX === undefined) {
            this.velocityX = 5;
            this.velocityY = 5;
        }

        // Update position based on velocity
        this.text.x += this.velocityX;
        this.text.y += this.velocityY;

        // Bounce off right edge
        if (this.text.x >= this.cameras.main.width- (this.text.width/2)) {
            this.text.x = this.cameras.main.width- (this.text.width/2);
            this.velocityX *= -1; // Reverse horizontal direction
        }

        // Bounce off bottom edge
        if (this.text.y >= this.cameras.main.height- (this.text.height/2)) {
            this.text.y = this.cameras.main.height- (this.text.height/2);
            this.velocityY *= -1; // Reverse vertical direction
        }

        // Bounce off left edge
        if (this.text.x <= 0+(this.text.width/2)) {
            this.text.x = 0+(this.text.width/2);
            this.velocityX *= -1; // Reverse horizontal direction
        }

        // Bounce off top edge
        if (this.text.y <= 0+(this.text.height/2)) {
            this.text.y = 0+(this.text.height/2);
            this.velocityY *= -1; // Reverse vertical direction
        }
    }
}