import { MonsterType, MonsterTypeProperties } from './../../../utils/monster.utils';
import { Component, computed, input, Input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent /* implements OnChanges */ {

  /* @Input() monster: Monster = new Monster(); */
  monster = input(new Monster());
  MonsterTypeIcon = computed(()=>{
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor = computed(()=>{
    return MonsterTypeProperties[this.monster().type].color;
  });

  /* MonsterTypeIcon : string = "img/electric.png";
  backgroundColor : string = "rgb(255, 255, 100)"; */

  /* ngOnChanges(changes: SimpleChanges): void {
    if(changes['monster']){
      if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type){
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
        this.MonsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
      }
    }
  } */
  /* monster: InputSignal<Monster> = input(new Monster(), {
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }
  }); */
}
