import { dependency, dependencyForTest, sum } from './dependency';

describe('should works', () => {
	test('should work', () => {
		expect(dependency(true)).toBe('Works!');
	});

	test('should do not work', () => {
		expect(dependency(false)).toBe('Does not work properly');
	});
});

describe('should works other dependency', () => {
	test('should work other dependency', () => {
		expect(dependencyForTest(true)).toBe('Works!');
	});

	test('should do not work other dependency', () => {
		expect(dependencyForTest(false)).toBe('Does not work properly');
	});
});

describe('sum', () => {
	test('should adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});

	test('should use jsdom in this test file', () => {
		const element = document.createElement('div');
		expect(element).not.toBeNull();
	});
});
