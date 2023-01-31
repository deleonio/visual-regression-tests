import { TEST_CASES } from './src/cases';
import { createTest } from './src/test';

const THEME_CASES = new Set(['th']);

THEME_CASES.forEach((themeName) => {
	TEST_CASES.forEach((value, componentName) => {
		value.forEach((testName) => {
			createTest(themeName, componentName, testName);
		});
	});
});
