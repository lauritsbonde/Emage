import {onCLS, onFCP, onLCP, onTTFB, Metric} from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
	if (onPerfEntry && typeof onPerfEntry === 'function') {
		onCLS(onPerfEntry);
		onFCP(onPerfEntry);
		onLCP(onPerfEntry);
		onTTFB(onPerfEntry);
	}
};

export default reportWebVitals;