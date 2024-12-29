The solution to this problem requires triggering a reflow or repaint of the affected elements after adding a new item to the flex container. Here are two approaches:

**Approach 1: Using `offsetHeight`**

This method forces a reflow, ensuring that the browser recalculates the layout and updates the styles:

```javascript
const container = document.querySelector('.container');

function addItem() {
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  container.appendChild(newItem);
  container.offsetHeight; // Trigger reflow
}
```

**Approach 2: Using `requestAnimationFrame`**

This approach leverages the browser's animation frame to schedule the style update for optimal performance:

```javascript
const container = document.querySelector('.container');

function addItem() {
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  container.appendChild(newItem);
  requestAnimationFrame(() => {
     container.offsetHeight; // Trigger reflow
  });
}
```

These approaches will ensure that the `:last-child` selector functions correctly even when elements are dynamically added to a flex container.