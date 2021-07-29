import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from '../categories.service';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {
  visible = false;
  icon = "add_circle";
  category = "";
  @Output() added = new EventEmitter<string>();
  constructor(private categorySerice: CategoriesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  clickedIcon() {
    if (this.icon == "add_circle") {
      this.icon = "clear";
    } else {
      this.icon = "add_circle";
    }
    this.visible = !this.visible;
  }

  insertCategory() {
    this.categorySerice.insertCategory(this.category).subscribe(obs => {
      if (obs == "OK") {
        //update UI after insertion
        this.added.emit(this.category);
        this.category = "";
      }
    }, err => {
      this.dialogModal(err.error);
    });

  }

  setValue(ev: any) {
    this.category = ev.target.value;
  }

  dialogModal(err: string) {
    this.dialog.open(ErrorModalComponent, { data: { err } });
  }

}
