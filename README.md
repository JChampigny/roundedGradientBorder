roundedGrandientBorder
======================

The aim of this little library is to create a way to render rounded borders with a gradient color using canvas.

[Example](http://jsfiddle.net/jeromechampigny/cVfH2)

## Usage ##
Include the library in your html.

```html
<script src="js/roundedGradientBorder.js"></script>
```

### JavaScript ###
```javascript
document.getElementsById('myButton').castBorderWithGradient(1, "#c10000");
```

## How it works ##

The library extends HTMLElement implementing the castBorderWithGradient method.
This method takes three arguments.

* borderSize
* colorTop
* colorBottom

And relays on the HTMLElement's css for the border-radius attribute.

You might also have to specify a 0px border on certain elements like inputs or buttons.

```css
border: 0px;
```
