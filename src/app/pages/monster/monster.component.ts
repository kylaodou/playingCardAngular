import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monster',
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent  implements OnInit {
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
  }
  private route = inject(ActivatedRoute);
  monsterId = signal<number | undefined>(undefined);
}
