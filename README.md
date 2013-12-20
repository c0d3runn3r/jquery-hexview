jquery-hexview
==============

jQuery plugin for viewing hex data mixed with text in an HTML element.

The resulting HTML is designed to be selectable and copyable, with the resulting string representing an escaped version of the original text.

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

### Character escaping

You can pass an option called "character_substitutions" to define what characters are escaped.  By default (for readability) \n (newline) is replaced with "\n" followed by a line break.  Here are the default substitutions:

```json
{
	character_substitutions: {

                "\\"    :   "\\\\", 
                "\/"    :   "\\\/",
                "\b"    :   "\\b",
                "\f"    :   "\\f",
                "\n"    :   "\\n<br />",
                "\r"    :   "\\r",
                "\t"    :   "\\t"
            } 
}           
```

Non-printable characters (ASCI 00 through 1F and 127) are written as \uXXXX unicode numbers.

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