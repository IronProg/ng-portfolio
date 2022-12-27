import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tag } from 'src/app/projects/tags';

@Component({
  selector: 'app-admin-tags',
  templateUrl: './admin-tags.component.html',
  styleUrls: ['./admin-tags.component.css']
})
export class AdminTagsComponent implements OnInit {
  tagsForm = new FormGroup({
    "tag": new FormControl("", [Validators.required, Validators.pattern(/^[A-Z]*$/)]),
    "name": new FormControl("", Validators.required)
  })

  tags: Tag[] = [
    { tag: "JS", name: "Javascript" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteTag(id?: string) {
    if (!id) {
      return;
    }

    console.log(id);
  }

  newTag() {
    if (!this.tagsForm.valid) {
      return;
    }

    const form = this.tagsForm.value;

    const newTag: Tag = {
      name: form.name!,
      tag: form.tag!
    }

    console.log(newTag);
  }
}
