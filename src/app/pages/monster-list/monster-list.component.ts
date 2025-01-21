import { Component, computed, inject, model, signal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { MonsterService } from '../../services/monsters/monster.service';

@Component({
  selector: 'app-monster-list',
  imports: [PlayingCardComponent,  SearchBarComponent, CommonModule],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  monsters = signal<Monster[]>([]);
  search = model('');
  filtredMonsters = computed(()=>{
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  });
  monsterService = inject(MonsterService);

  constructor(){
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster(){
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set([...this.monsterService.getAll()]);
  }
}
