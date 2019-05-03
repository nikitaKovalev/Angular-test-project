import { Injectable } from '@angular/core';
import { GenericApiService } from '../../shared/services';

@Injectable()
export class TasksApiService extends GenericApiService {
  sourceUrl = 'staff/tasks';
}
