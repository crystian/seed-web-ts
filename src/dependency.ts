export function dependency(val: any): string {
	let r = 'Does not work properly';
	if (val) {
		r = 'Works!';
	}
	return r;
}

export function dependencyForTest(val: any): string {
	let r = 'Does not work properly';
	if (val) {
		r = 'Works!';
	}
	return r;
}

export function sum(a, b): number {
	return a + b;
}
