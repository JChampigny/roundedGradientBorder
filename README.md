roundedGrandientBorder
======================

The aim of this little library is to create a way to render rounded borders with a gradient color using canvas.

[Example](http://jsfiddle.net/jeromechampigny/cVfH2)

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

## Usage ##
Include the library in your html.

```html
<script src="js/roundedGradientBorder.js"></script>
```
The method has to be called on a HTMLElement like in the following examples

### JavaScript ###
```javascript
document.getElementsById('myButton').castBorderWithGradient(1,"#ebebeb", "#c10000");
```
### JQuery ###
#### single node ####
```javascript
$("#id").get(0).castBorderWithGradient(1, "#ebebeb", "#c10000");
```
#### Multiple nodes ####
```javascript
$(".class").each(function(){
  this.castBorderWithGradient(1, "#ebebeb", "#c10000");
});
```
