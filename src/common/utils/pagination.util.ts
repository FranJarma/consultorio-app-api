export async function paginate<T>(
  prismaModel: { findMany: Function; count: Function },
  filter: Record<string, any> = {},
  range: number[] = [0, 9],
  sort: [string, 'ASC' | 'DESC'] = ['id', 'ASC'],
  searchableFields: string[] = [],
  defaultFilters: Record<string, any> = {}
) {
  const [start, end] = range;
  const take = end - start + 1;
  const skip = start;

  const { q, ...restFilters } = filter;
  const searchFilter = q
    ? {
        OR: searchableFields.map((field) => ({
          [field]: { contains: q },
        })),
      }
    : {};

  const prismaFilters = {
    ...defaultFilters,
    ...restFilters,
    ...searchFilter,
  };

  const [data, total] = await Promise.all([
    prismaModel.findMany({
      skip,
      take,
      where: prismaFilters,
      orderBy: { [sort[0]]: sort[1].toLowerCase() },
    }),
    prismaModel.count({ where: prismaFilters }),
  ]);

  return {
    data,
    total,
    range,
    totalPages: Math.ceil(total / take),
  };
}
