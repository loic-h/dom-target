With the wide support of the native [closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) method for node elements, this repository is now obsolete.

# dom-target

From a node or a selector, retrieve the closest parent, or the node itself.

## Installation

```
npm install dom-target --save
```


## Usage

```javascript
import target from 'dom-target';

const button = document.querySelecor('#my-button');

document.addEventListener('mousedown', e => {
	console.log(target(e.target, "#my-button")); // display button
	console.log(target(e.target, button)); // display button
});
```
