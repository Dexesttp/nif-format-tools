export function areEqual(ver1: string, ver2: string): boolean {
	return ver1 === ver2;
}

export function isGreaterThan(ver1: string, ver2: string): boolean {
	// TODO
	return false;
}

export function isGreaterOrEqual(ver1: string, ver2: string): boolean {
	return areEqual(ver1, ver2) || isGreaterThan(ver1, ver2);
}

export function compare(ver1: string, ver2: string): -1|0|1 {
	if(isGreaterThan(ver1, ver2))
		return -1;
	if(areEqual(ver1, ver2))
		return 0;
	return 1;
}
