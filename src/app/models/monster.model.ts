import { MonsterType } from "../../utils/monster.utils";

export class Monster{
    id : number = -1;
    name : string = "My Monster";
    image :  string = "img/pikachu.jpg";
    type : MonsterType = MonsterType.ELECTRIC;
    hp : number = 40;
    figureCaption : string = "N°001 Monster";
    attackName : string = "Geo Impact";
    attackStrenght : number = 60;
    attackDescription : string = "Ceci est une longue description de la capacité du monstre. Probablement quelque chose à faire avec l'électricité...";
    /* copy() : Monster{
        return Object.assign(new Monster(), this);
    } */
}
