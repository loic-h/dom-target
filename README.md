#dom-target

From a node or a selector, retrieve the closest parent, or the node itself.

##Usage

```
import target from 'dom-target';

const button = document.querySelecor('#my-button');

document.addEventListener('mousedown', e => {
	console.log(target(e.target, "#my-button")); // display button
	console.log(target(e.target, button)); // display button
});
```
