import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sliding-container',
  templateUrl: './sliding-container.component.html',
  styleUrls: ['./sliding-container.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SlidingContainerComponent implements OnInit {
  @Input() categories: string[] = [];
  @Input() showTrashcan = false;
  @Output() chosenIndex = new EventEmitter<number>();
  @Output() toDelete = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  sendPreference(idx: number) {
    this.chosenIndex.emit(idx);
  }

  deletePic() {
    //emits to parent in order to send a delete event
    this.toDelete.emit(true);
  }

}
