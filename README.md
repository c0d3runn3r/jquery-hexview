jquery-hexview
==============

jQuery plugin for viewing hex data in an HTML element 

This plugin was really developed out of a need to display text with encoded values in a normal HTML element.  As such, it doesn't display hex in the same sense as would a hex editor:

```

00 AD 3F 4F    44 81 C0 D0  ...

```

Instead, it displays strings that contain otherwise unreadable characters.  For example, newlines become "\n" and tabs become "\t".


### Example usage
```html

	<div id="view"></div>

```
```js

			// Setup hexview
			$("#view").hexview();

			/* ... later, we want to set its value ... */
			$("#view").hexview("setText","This is\r\nsome text \r\n with newlines");

```


### Styling 

jquery-hexview uses the builtin jQuery UI styles.  To make your escaped text stand out a little, something like the following is recommended:

```css
span.hexview-escaped {
				background: #777;
				color: white;
				border: 1px solid white;
				letter-spacing: 0;
				font-size: smaller;
			}
```