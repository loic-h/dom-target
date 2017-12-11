/**
 * getParent utility
 *
 * Retrieve a parent element from a selector
 *
 * @param {Node} `el`
 * @param {String} `selector`
 * @return {Node}
 */

function getParent(el, selector) {
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


/**
 * isNode utility
 *
 * Tell if argument is a DOM Node element
 *
 * @param {Node} `el`
 * @return {Bool}
 */

function isNode(el) {
	return el instanceof Node;
}


/**
 * target main function
 *
 * Return the closest parent, or the node itself
 *
 * @param {Node} `el`
 * @param {String} `selector`
 * @return {Node}
 */

function target(el, selector) {
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

// export main function
module.exports = target;
module.exports.isNode = isNode;
module.exports.getParent = getParent;
