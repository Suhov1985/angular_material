import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'table-basic-example',
    styleUrls: ['table-basic-example.sass'],
    templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol', 'val', 'val2', 'val3', 'val4'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.paginator._intl.itemsPerPageLabel = 'Записiв на сторiнцi';
    }
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}

export interface PeriodicElement {
    tavalue1: string;
    position: number;
    weight: string;
    symbol: string;
    val: string;
    val2: string;
    val3: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 2721987, tavalue1: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', val: '01.01.2017 01:01:01', val2: '01.01.2017 01:01:01', val3: '01.01.2017 01:01:01'},
    {position: 2721987, tavalue1: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', val: '01.01.2017 01:01:01', val2: '01.01.2017 01:01:01', val3: '01.01.2017 01:01:01'},
    {position: 2721987, tavalue1: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', val: '01.01.2017 01:01:01', val2: '01.01.2017 01:01:01', val3: '01.01.2017 01:01:01'},
    {position: 2721987, tavalue1: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', val: '01.01.2017 01:01:01', val2: '01.01.2017 01:01:01', val3: '01.01.2017 01:01:01'}
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */