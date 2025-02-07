export async function paginate(
  prismaModel: { findMany: Function; count: Function },
  include: object,
  filter: Record<string, any> = {},
  range: number[] = [0, 9],
  sort: [string, 'ASC' | 'DESC'] | [string, 'ASC' | 'DESC'][] = ['id', 'ASC'],
  searchableFields: string[] = [],
  defaultFilters: Record<string, any> = {}
) {
  const [start, end] = range;
  const take = end - start + 1;
  const skip = start;

  const { q, ...restFilters } = filter;

  const searchFilter =
  q && searchableFields.length > 0
    ? {
        OR: searchableFields.map((field) =>
          field.includes('.')
            ? {
                [field.split('.')[0]]: {
                  [field.split('.')[1]]: {
                    contains: q,
                  },
                },
              }
            : {
                [field]: { contains: q },
              }
        ),
      }
    : {};

  const normalizedFilters = Object.entries({ ...defaultFilters, ...restFilters }).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value)) {
        acc[key] = { in: value };
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const finalFilters = {
    ...normalizedFilters,
    ...(Object.keys(searchFilter).length ? searchFilter : {}),
  };

  const normalizedSort = Array.isArray(sort[0]) ? (sort as [string, 'ASC' | 'DESC'][]) : [sort];

  const orderBy = normalizedSort.map(([field, direction]) => ({
    [field as string]: (direction as string).toLowerCase(),
  }));

  const [data, total] = await Promise.all([
    prismaModel.findMany({
      skip,
      take,
      where: finalFilters,
      orderBy,
      include,
    }),
    prismaModel.count({ where: finalFilters }),
  ]);

  return {
    data,
    total,
    range,
    totalPages: Math.ceil(total / take),
  };
}
