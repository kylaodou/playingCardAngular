import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../../utils/monster.utils';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  monsters: Monster[] = [];
  currenIndex: number = 1;

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monsters');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map((monserJson: any) =>
        Object.assign(new Monster(), monserJson)
      );
      this.currenIndex =
        Math.max(...this.monsters.map((monster) => monster.id), 0) + 1;
    } else {
      this.innit();
      this.save();
    }
  }

  private innit() {
    this.monsters = [];
    const monsters = [
      { name: 'Pika', hp: 40, figureCaption: 'N°002 Pikatchu' },
      {
        name: 'Cat',
        image: 'img/water.jpg',
        type: MonsterType.WATER,
        hp: 60,
        figureCaption: 'N°003 Cat',
      },
      {
        name: 'Plant Monster',
        image: 'img/plant.png',
        type: MonsterType.PLANT,
        hp: 20,
        figureCaption: 'N°004 Plant',
      },
      {
        name: 'Fire Monster',
        image: 'img/fire.png',
        type: MonsterType.FIRE,
        hp: 90,
        figureCaption: 'N°005 Fire',
      },
    ];

    for (const monster of monsters) {
      const newMonster = Object.assign(new Monster(), monster);
      newMonster.id = this.currenIndex++;
      this.monsters.push(newMonster);
    }
  }

  getAll(): Monster[] {
    return this.monsters;
  }

  find(id: number): Monster | undefined {
    return this.monsters.find((monster) => monster.id === id);
  }

  add(monster: Monster): Monster {
    monster.id = this.currenIndex++;
    this.monsters.push(monster);
    this.save();
    return monster;
  }

  remove(id: number) {
    const index = this.monsters.findIndex((monster) => monster.id === id);
    if (index !== -1) {
      this.monsters.splice(index, 1); // Suppression correcte par index
    }
    this.save();
  }

  update(upmonster: Monster): Monster {
    let monster = this.find(upmonster.id);
    if (monster) {
      this.monsters[upmonster.id] = upmonster;
    }
    this.save();
    return monster!;
  }
}
