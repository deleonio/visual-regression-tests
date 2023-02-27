import { TEST_CASES } from './src/cases';
import { createTest } from './src/test';

const THEME_CASES = new Set(['bmf', 'bzst', 'desy-v2', 'itzbund', 'mapz', 'th', 'zoll-v2']);

THEME_CASES.forEach((themeName) => {
	TEST_CASES.forEach((value, componentName) => {
		value.forEach((testName) => {
			createTest(`${themeName}: ${componentName} > ${testName}`, `https://cnjn19.csb.app/#/${componentName}/${testName}?theme=${themeName}`); // 1.3
			// createTest(`${themeName}: ${componentName} > ${testName}`, `https://w5u37c.csb.app/#/${componentName}/${testName}?theme=${themeName}`); // 1.4
		});
	});
});
