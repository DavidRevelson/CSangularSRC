import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    imports: [MatGridListModule ,LayoutModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatSidenavModule, MatMenuModule, MatButtonModule, CommonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatSelectModule],
    exports: [MatGridListModule,LayoutModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatSidenavModule, MatMenuModule, MatButtonModule, CommonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatSelectModule],
})
export class MaterialModule { }