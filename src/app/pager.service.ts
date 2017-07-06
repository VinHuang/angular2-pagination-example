import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PagerService {

  constructor() { }

  public getPage(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages: number = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number, startIndex: number, endIndex: number;
    let pages: number[] = [];

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    }else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        endPage = totalPages;
        startPage = totalPages - 9;
      } else {
        endPage = currentPage + 4;
        startPage = currentPage - 5;
      }
    }

    startIndex = (currentPage - 1) * pageSize;
    endIndex = Math.min( startIndex + pageSize - 1 , totalItems - 1 );
    pages = _.range( startPage, endPage + 1 );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }

}
