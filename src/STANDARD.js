var STANDARD = {}
//compiler flag for class heirarchy
STANDARD.BEGIN_LIVES = 3;
STANDARD.BACKGROUND = "img/background.jpg";
STANDARD.BACKGROUND_SPEED = 50;

STANDARD.MAINMENU_CONTROL_KEY = 32;

STANDARD.EXPLOSION = "img/explosions.png";

STANDARD.BASTERED_CIRCLE = true;
STANDARD.BASTERED_CIRCLE_START_RAD = 200;
STANDARD.BASTERED_CIRCLE_MAX_RAD = 600;
STANDARD.BASTERED_CIRCLE_GROWTH_RATE = 25;
STANDARD.BASTERED_CIRCLE_SHRINK_RATE = 50;
STANDARD.BASTERED_CIRCLE_INNER_GLOW = 20;
STANDARD.BASTERED_CIRCLE_OUTER_GLOW = 20;
STANDARD.BASTERED_CIRCLE_FIRE_BULLETS_BEFORE_SHRINKING = 55;
STANDARD.BASTERED_CIRCLE_CHARGE_SHRINK_RATE = 10;

STANDARD.ENEMY_SPAWN_RATE = 1.5;

//normal enemy that spawns at the top
STANDARD.YELLOW_INVADER = true;
STANDARD.YELLOW_INVADER_IMAGE = "img/yellowInvader.png";
STANDARD.YELLOW_INVADER_POINTS = 10;
STANDARD.YELLOW_INVADER_HEALTH = 100;
STANDARD.YELLOW_INVADER_SPEED = 80;
STANDARD.YELLOW_INVADER_DAMAGE = 50;
STANDARD.YELLOW_INVADER_FIRE_RATE = 1.5;

//fast moving invader that is generated when
//a bullet hits the bastard circle
STANDARD.ANGRY_INVADER = true;
STANDARD.ANGRY_INVADER_IMAGE = "img/angryInvader.png";
STANDARD.ANGRY_INVADER_SPEED = 150;
STANDARD.ANGRY_INVADER_DAMAGE = 20;
STANDARD.ANGRY_INVADER_HEALTH = 50;
STANDARD.ANGRY_INVADER_POINTS = 5;
STANDARD.ANGRY_INVADER_FIRE_RATE = 1.5;
STANDARD.ANGRY_MORPH_SHEET = 'img/angryMorph.png';

//Enemy Boss
STANDARD.BOSS_INVADER = true;
STANDARD.BOSS_INVADER_IMAGE = "img/bossInvader.png";
STANDARD.BOSS_INVADER_SPEED = 40;
STANDARD.BOSS_INVADER_DAMAGE = 25;
STANDARD.BOSS_INVADER_HEALTH = 500;
STANDARD.BOSS_INVADER_POINTS = 50;
STANDARD.BOSS_INVADER_FIRE_RATE = 1.5;

//bullets per second
STANDARD.ORB_BULLET = true;
STANDARD.ORB_BULLET_SPEED = 250; // pixels per second
STANDARD.ORB_BULLET_DAMAGE = 5;
STANDARD.ORB_BULLET_IMAGE = "img/redBullet.png";

STANDARD.PEA_BULLET = true;
STANDARD.PEA_BULLET_SPEED = 250; // pixels er second
STANDARD.PEA_BULLET_DAMAGE = 50;
STANDARD.PEA_BULLET_IMAGE = "img/blueBullet.png";

STANDARD.PEA_SHOOTER = true;
STANDARD.PEA_SHOOTER_FIRING_SPEED = 5; // bullets per second
STANDARD.PEA_SHOOTER_IMAGE = "img/peaShooter.png";
STANDARD.PEA_SHOOTER_NAME = "Pea Shooter";
STANDARD.PEA_SHOOTER_ID = 1;

STANDARD.TRI_SHOOTER = true;
STANDARD.TRI_SHOOTER_FIRING_SPEED = 5; // bullets per second
STANDARD.TRI_SHOOTER_IMAGE = "img/triShooter.png";
STANDARD.TRI_SHOOTER_NAME = "Tri Shooter";
STANDARD.TRI_SHOOTER_ID = 3;

STANDARD.DOUBLE_BARREL = true;
STANDARD.DOUBLE_BARREL_FIRING_SPEED = 5; // bullets per second
STANDARD.DOUBLE_BARREL_IMAGE = "img/doubleBarrel.png";
STANDARD.DOUBLE_BARREL_NAME = "Double Barrel";
STANDARD.DOUBLE_BARREL_ID = 2;

STANDARD.HUMAN_WEAPON = true;
STANDARD.HUMAN_WEAPON_TRIGGER = 90 //z key

STANDARD.PLAYER_SHIP = true;
STANDARD.PLAYER_SHIP_HEALTH = 100;
STANDARD.PLAYER_SHIP_SPEED = 200;    // pixels per second
STANDARD.PLAYER_SHIP_KEY_LEFT = 37   //left arrow
STANDARD.PLAYER_SHIP_KEY_RIGHT = 39  //right arrow
STANDARD.PLAYER_SHIP_KEY_UP = 38     //up arrow
STANDARD.PLAYER_SHIP_KEY_DOWN = 40   //down arrow
STANDARD.PLAYER_SHIP_IMAGE = "img/ship.png";
STANDARD.PLAYER_SHIP_KEY_NEXT_WEAPON = 65; //a
STANDARD.PLAYER_SHIP_KEY_PREV_WEAPON = 83; //s

STANDARD.HEALTH_ITEM = true;
STANDARD.HEALTH_ITEM_IMAGE = "img/health.png";
STANDARD.HEALTH_ITEM_SPEED = 100;//pixels per second at a given angle
STANDARD.HEALTH_ITEM_HEAL = 50;  //health points

STANDARD.PEA_SHOOTER_AMMO_IMAGE = "img/peaShooterAmmo.png";

STANDARD.TRI_SHOOTER_AMMO = true;
STANDARD.TRI_SHOOTER_AMMO_IMAGE = "img/triShooterAmmo.png";
STANDARD.TRI_SHOOTER_AMMO_SPEED = 100;
STANDARD.TRI_SHOOTER_AMMO_AMMO = 30; // 30 bullets / 3 bullets per shot = 10 shots
STANDARD.TRI_SHOOTER_AMMO_ID = STANDARD.TRI_SHOOTER_ID;

STANDARD.DOUBLE_BARREL_AMMO = true;
STANDARD.DOUBLE_BARREL_AMMO_IMAGE = "img/doubleBarrelAmmo.png";
STANDARD.DOUBLE_BARREL_AMMO_SPEED = 100;
STANDARD.DOUBLE_BARREL_AMMO_AMMO = 20; // 20 bullets / 2 bullets per shot = 10 shots
STANDARD.DOUBLE_BARREL_AMMO_ID = STANDARD.DOUBLE_BARREL_ID;

STANDARD.HALO_BONUS = true;
STANDARD.HALO_BONUS_IMAGE = "img/haloBonus.png";
STANDARD.HALO_BONUS_SPEED = 100;
STANDARD.HALO_BONUS_AMOUNT = 200; // pixels on radius to increase by
