import { GenericApiService } from './generic-api.service';
import { IPagination, ITask } from '../../models';

export class GenericPagination {

  public pageNumber: number;
  public pageCount: number;
  public hasPrev: boolean;
  public hasNext: boolean;
  public searchTxt: string;
  public results: Array<ITask>;

  constructor(private api: GenericApiService) {
    this.pageNumber = 1;
    this.pageCount = 0;
    this.searchTxt = '';
    this.results = [];
  }

  public getList() {
    this.api.getListWithParams(this.pageNumber, 5, { search: this.searchTxt })
      .subscribe((response: IPagination) => {
        this.hasPrev = response.previous;
        this.hasNext = response.next;
        this.pageCount = response.count;
        this.results = response.results;
      });
  }

  public prevPage() {
    this.pageNumber--;
    this.getList();
  }

  public nextPage() {
    this.pageNumber++;
    this.getList();
  }

  public searchParams(params) {
    this.searchTxt = params;
    this.getList();
  }
}
