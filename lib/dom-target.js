export function getParent(el, selector) {
	if (typeof selector !== 'string') {
		return;
	}
	while(el) {
		if (el.matches(selector)) {
			return el;
		}
		el = el.parentElement;
	}
}

export function isNode(el) {
	return el instanceof Node;
}

export default function target(el, selector) {
	if (isNode(selector)) {
		if (el === selector) {
			return el;
		} else if (selector.contains(el)) {
			return selector;
		}
	} else if (el.matches(selector)) {
		return el;
	} else {
		const parent = getParent(el, selector);
		if (parent) {
			return parent;
		}
	}
}
