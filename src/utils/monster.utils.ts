import { Monster } from './../app/models/monster.model';
export enum MonsterType{
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterProperties{
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties : {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]:{
        imageUrl: 'img/planticon.png',
        color: 'rgb(1, 232, 9)'
    },
    [MonsterType.ELECTRIC]:{
        imageUrl: 'img/electric.png',
        color: 'rgb(255, 255, 100)'
    },
    [MonsterType.FIRE]:{
        imageUrl: 'img/fireicon.png',
        color: 'rgb(255, 102, 0)'
    },
    [MonsterType.WATER]:{
        imageUrl: 'img/iconwater.png',
        color: 'rgb(34, 232, 254)'
    },
}

