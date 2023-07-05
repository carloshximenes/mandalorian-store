export const hasLength = (arr: unknown[]): boolean => !!(arr && arr.length);

export const endPosition = (arr: unknown[]): number => arr.length + 1;

export const mergeUnique = <T>(arrayA: T[] = [], arrayB: T[] = []): T[] => {
	const mergeArr = [...arrayA, ...arrayB];
	const result: T[] = [];
	mergeArr.forEach((item: T) => {
		if (result.indexOf(item) === -1) {
			result.push(item);
		}
	});
	return result;
};

export const isEqual = <T>(a: T[], b: T[]): boolean =>
	Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);

export const removeRepeatedElements = <T>(array: T[]): T[] =>
	array.filter((element, index, arr) => arr.indexOf(element) === index);

export const getLastElement = <T>(arr: T[]): T | undefined => (arr.length > 0 ? arr[arr.length - 1] : undefined);

export const removeLastElement = <T>(arr: T[]): T[] => arr.slice(0, -1);

export const sortAscendingByKey = <T, K extends keyof T>(arr: T[], key: K): T[] => [
	...arr.sort((a, b) => (a[key] as number) - (b[key] as number)),
];

export const sortDescendingByKey = <T extends Record<K, number | bigint>, K extends keyof T>(arr: T[], key: K): T[] => [
	...arr.sort((a, b) => {
		if (a[key] < b[key]) {
			return 1;
		}
		if (a[key] > b[key]) {
			return -1;
		}
		return 0;
	}),
];

export const sortStringArrAscendingByKey = <T, K extends keyof T>(arr: T[], key: K & string): T[] => [
	...arr.sort((a, b) => {
		const propA = a[key];
		const propB = b[key];
		if (typeof propA === 'string' && typeof propB === 'string') {
			return propA.localeCompare(propB);
		}
		return 0;
	}),
];

export const sortStringArrDescendingByKey = <T, K extends keyof T>(arr: T[], key: K): T[] => [
	...arr.sort((a, b) => {
		const propA = a[key];
		const propB = b[key];
		if (typeof propA === 'string' && typeof propB === 'string') {
			return propB.localeCompare(propA);
		}
		return 0;
	}),
];

export const sortAscending = (arr: string[]): string[] => arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

export const getPreviousElements = <T>(arr: T[], index: number): T[] => arr.slice(0, index);

export const getNextElements = <T>(arr: T[], index: number): T[] => arr.slice(index + 1);

export const hasAllElementsInCommon = <T>(arr: T[], target: T[]): boolean => {
	if (!hasLength(target)) return false;

	return target.every(v => arr.includes(v));
};

export const hasAnyElementInCommon = <T>(arr: T[], target: T[]): boolean => {
	if (!hasLength(target)) return false;

	return target.some(v => arr.includes(v));
};

interface ObjectWithArraysAndObjects {
	[key: string]: unknown | unknown[] | ObjectWithArraysAndObjects | ObjectWithArraysAndObjects[];
}

export const flattenArray = <T>(originalArray: T[]): Record<string, string>[] => {
	const result: Record<string, string>[] = [];

	const recurse = (obj: ObjectWithArraysAndObjects, currentKey?: string) => {
		Object.keys(obj).forEach(key => {
			const value = obj[key] || '';
			const newKey = currentKey ? `${currentKey}.${key}` : key;

			if (Array.isArray(value)) {
				if (typeof value[0] === 'object') {
					value.forEach((item, index) => {
						recurse(item, `${newKey}[${index}]`);
					});
				} else {
					result[result.length - 1][newKey] = value.join(', ');
				}
			} else if (typeof value === 'object') {
				recurse(value as ObjectWithArraysAndObjects, newKey);
			} else {
				result[result.length - 1][newKey] = String(value);
			}
		});
	};

	originalArray.forEach(obj => {
		result.push({});
		recurse(obj as ObjectWithArraysAndObjects);
	});

	return result;
};

export const filterAttributes = (originalArray: Record<string, string>[], attributesToKeep: string[]) =>
	originalArray.map(item => {
		const filteredItem: { [key: string]: string } = {};

		attributesToKeep.forEach(attribute => {
			const value = item[attribute];

			if (value !== undefined) {
				filteredItem[attribute] = value;
			}
		});

		return filteredItem;
	});
