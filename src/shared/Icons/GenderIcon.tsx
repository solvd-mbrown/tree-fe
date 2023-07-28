import React from 'react';
import {Icon} from 'native-base';
import {Path} from 'react-native-svg';

const GenderIcon = () => {
	return (
		<Icon size="24px" viewBox="0 0 24 24">
			<Path
				fill="#252A31"
				d="M19.6494 3.10284C19.5624 2.8934 19.3959 2.72696 19.1865 2.63998C19.0834 2.59606 18.9728 2.57277 18.8608 2.57141H15.4322C15.2049 2.57141 14.9869 2.66172 14.8261 2.82246C14.6654 2.98321 14.5751 3.20123 14.5751 3.42855C14.5751 3.65588 14.6654 3.8739 14.8261 4.03465C14.9869 4.19539 15.2049 4.2857 15.4322 4.2857H16.7951L14.7379 6.34284C13.5233 5.43379 12.0094 5.01864 10.5009 5.18095C8.99249 5.34325 7.60155 6.07098 6.6081 7.21761C5.61465 8.36425 5.09246 9.84467 5.14666 11.3608C5.20085 12.877 5.8274 14.3164 6.90018 15.3892C7.97297 16.4619 9.41232 17.0885 10.9285 17.1427C12.4447 17.1969 13.9251 16.6747 15.0717 15.6812C16.2184 14.6878 16.9461 13.2968 17.1084 11.7884C17.2707 10.28 16.8555 8.76605 15.9465 7.55141L18.0036 5.49427V6.85713C18.0036 7.08445 18.0939 7.30247 18.2547 7.46322C18.4154 7.62396 18.6335 7.71427 18.8608 7.71427C19.0881 7.71427 19.3061 7.62396 19.4669 7.46322C19.6276 7.30247 19.7179 7.08445 19.7179 6.85713V3.42855C19.7166 3.31654 19.6933 3.20589 19.6494 3.10284V3.10284ZM14.1465 14.1428C13.5506 14.7508 12.7871 15.1675 11.9535 15.3398C11.1198 15.5122 10.2537 15.4323 9.46563 15.1105C8.67753 14.7886 8.00312 14.2394 7.52841 13.5328C7.05369 12.8261 6.80017 11.9941 6.80017 11.1428C6.80017 10.2916 7.05369 9.45956 7.52841 8.75292C8.00312 8.04629 8.67753 7.49704 9.46563 7.17521C10.2537 6.85337 11.1198 6.77353 11.9535 6.94586C12.7871 7.1182 13.5506 7.5349 14.1465 8.14284V8.14284C14.9318 8.94396 15.3716 10.021 15.3716 11.1428C15.3716 12.2646 14.9318 13.3417 14.1465 14.1428V14.1428Z"
			/>
			<Path
				fill="#252A31"
				d="M17.1428 11.1429C17.1442 9.99251 16.8148 8.86599 16.1939 7.89755C15.573 6.9291 14.6868 6.15956 13.6409 5.68061C12.5949 5.20166 11.4333 5.03349 10.2945 5.19614C9.15568 5.35879 8.08761 5.8454 7.21756 6.59799C6.34751 7.35059 5.71215 8.33744 5.38719 9.44097C5.06222 10.5445 5.06135 11.7182 5.38468 12.8222C5.708 13.9262 6.34189 14.914 7.21082 15.6679C8.07975 16.4218 9.14709 16.91 10.2857 17.0743V18.8572H9.42853C9.2012 18.8572 8.98319 18.9475 8.82244 19.1082C8.6617 19.269 8.57139 19.487 8.57139 19.7143C8.57139 19.9417 8.6617 20.1597 8.82244 20.3204C8.98319 20.4812 9.2012 20.5715 9.42853 20.5715H10.2857V21.4286C10.2857 21.6559 10.376 21.874 10.5367 22.0347C10.6975 22.1955 10.9155 22.2858 11.1428 22.2858C11.3701 22.2858 11.5882 22.1955 11.7489 22.0347C11.9097 21.874 12 21.6559 12 21.4286V20.5715H12.8571C13.0844 20.5715 13.3024 20.4812 13.4632 20.3204C13.6239 20.1597 13.7142 19.9417 13.7142 19.7143C13.7142 19.487 13.6239 19.269 13.4632 19.1082C13.3024 18.9475 13.0844 18.8572 12.8571 18.8572H12V17.0743C13.4268 16.8684 14.7317 16.1556 15.6761 15.0664C16.6205 13.9773 17.1411 12.5845 17.1428 11.1429V11.1429ZM11.1428 15.4286C10.2952 15.4286 9.46659 15.1773 8.7618 14.7063C8.05702 14.2354 7.50771 13.5661 7.18333 12.783C6.85896 11.9999 6.77409 11.1381 6.93945 10.3068C7.10482 9.47545 7.51299 8.71181 8.11236 8.11244C8.71173 7.51307 9.47537 7.1049 10.3067 6.93953C11.1381 6.77417 11.9998 6.85904 12.7829 7.18341C13.566 7.50779 14.2353 8.0571 14.7063 8.76188C15.1772 9.46667 15.4285 10.2953 15.4285 11.1429C15.4285 11.7057 15.3177 12.263 15.1023 12.783C14.8869 13.3029 14.5712 13.7754 14.1733 14.1734C13.7753 14.5713 13.3029 14.887 12.7829 15.1024C12.2629 15.3178 11.7056 15.4286 11.1428 15.4286V15.4286Z"
			/>
		</Icon>
	);
};

export default GenderIcon;