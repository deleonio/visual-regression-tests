import { TEST_CASES } from './src/cases';
import { createTest } from './src/test';

const THEME_CASES = new Set(['bmf', 'bpa', 'bzst', 'desy-v2', 'ecl-ec', 'ecl-eu', 'itzbund', 'mapz', 'th', 'zoll-v2']);

THEME_CASES.forEach((themeName) => {
	TEST_CASES.forEach((value, componentName) => {
		value.forEach((testName) => {
			createTest(`${themeName}: ${componentName} > ${testName}`, `https://public-ui.github.io/sample-react/#/${componentName}/${testName}?theme=${themeName}`); // 1.4
		});
	});
});
