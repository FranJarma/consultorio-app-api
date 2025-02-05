import { paginate } from "../utils/pagination.util";

export class BaseService<T> {
    constructor(
      private readonly prismaModel: { findMany: Function; count: Function },
      private readonly searchableFields: string[] = [],
      private readonly defaultFilters: Record<string, any> = {}
    ) {}
  
    async getAll(filter?: string, range?: string, sort?: string) {
      const parsedFilter = filter ? JSON.parse(filter) : {};
      const parsedRange = range ? JSON.parse(range) : [0, 9];
      const parsedSort = sort ? JSON.parse(sort) : ['id', 'ASC'];
  
      Object.assign(parsedFilter, this.defaultFilters);
  
      const result = await paginate(this.prismaModel, parsedFilter, parsedRange, parsedSort, this.searchableFields);
  
      return {
        data: result.data ?? [],
        total: result.total ?? 0,
      };
    }
  }
  