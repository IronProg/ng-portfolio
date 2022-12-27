import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatIconModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, MatIconModule, ReactiveFormsModule],
})
export class SharedModule {}
