/**
 * CUSTOMIZED STANDBY LOADER WIDGET FOR DOJO
 * 
 * Created by SANDEEP KANANGATT
 * Email - sandeepsuvit@gmail.com
 * Website - www.dotedlabs.com
 * 
 * This widget is a customized version of Dojo Standby widget 
 * (http://livedocs.dojotoolkit.org/dojox/widget/Standby). It has been customized 
 * to include texts long with the loading image. This helps the user to display text 
 * content dynamically when they want to show the loader for any particular event. 
 * The user can also change the loading image dynamically when they call the show() 
 * method of the widget. 
 * 
 * This standby loader can be invoked in the following ways.
 * 
 * Note: The loader has been default set to work on the "wrapper" <div/> on the 
 * 		html pages. For achieving this you can enclose all your html content in a 
 * 		<div/> with id as "wrapper". User can also change default "wrapper" attach 
 * 		node by calling changeTargetObject() function and passing in the node details.
 *
 * ------------------------------------------------------------------------
 * How to use this widget:
 * ------------------------------------------------------------------------
 * 1. standbyLoader.show();
 * 		-> Displays the loader with the default text "Please wait...".
 * 
 * 2. standbyLoader.show({text: "my message"});
 * 		-> Displays the loader with the	parameterized string. 
 * 
 * 3. standbyLoader.show({image: "image url", type: "IMG"});
 * 		-> Displays the	image that is passed as parameter. The text will stay 
 * 			as default. 
 * 
 * 4. standbyLoader.show({image: "image url", type:"IMG", text:"my message"});
 * 		-> Displays the image and the text that is passed as parameter. 
 * 
 * 5. standbyLoader.hide();
 * 		-> Hides the loader and	defaults the loader text to "Please wait...".
 */

// Globally set variables
var standbyLoader = new Object();

// Image path to load
var standbyLoaderImageSrc = "../../js/dojox/widget/Standby/images/loading.gif";

// The default message on the loader
var standbyLoaderDefaultText = "Please wait...";

// The default target object
var standbyLoaderDefaultTargetObject = "wrapper";

// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

// Utility functions for string operations
var StringUtilsFunctions = {
	// Check if the string is empty
	isEmpty : function(param) {
		if (param === undefined) {
			return true;
		} else {
			if (param == null)
				return true;
			if (param.length < 0)
				return true;
			if (param.length == 0)
				return true;
			return false;
		}
	},

	// Capitalizes the first letter of a string
	capitaliseFirstLetter : function(param) {
		return param.charAt(0).toUpperCase() + param.slice(1);
	}
};

// On Load function
require([ "dojox/widget/Standby", "dojo/domReady!" ], function(Standby) {
	var standby = new Standby({
		// Default set to the wrapper <div/>
		target : standbyLoaderDefaultTargetObject,
		color : 'white',
		opacity : '1',
		style : 'text-align:center; overflow: auto',
		centerIndicator : 'text',
		// Default message on the loader
		text : "<img src='" + standbyLoaderImageSrc
				+ "' class='standbyLoaderImage' />"
				+ "<span class='standbyLoaderText'>"
				+ standbyLoaderDefaultText + "</span>"
	});

	// Appending the loader to the DOM
	document.body.appendChild(standby.domNode);

	// Initializing the loader
	standby.startup();

	// Adding customized functionality to the standby loader object
	standbyLoader = {
		imageUrl : standbyLoaderImageSrc,
		loaderText : standbyLoaderDefaultText,
		image_MIME : "IMG",

		show : function(param) {
			if (param === undefined) {
				this.revertToDefaultText();
				this.revertToDefaultImage();
				standby.show();
			} else {
				if (!StringUtilsFunctions.isEmpty(param.type)
						&& param.type.toUpperCase() == this.image_MIME) {
					// Check for image url
					if (!StringUtilsFunctions.isEmpty(param.image)) {
						this.imageUrl = param.image;
						this.changeImage(this.imageUrl);
					} else {
						this.revertToDefaultImage();
					}
					// Check for loader text
					if (!StringUtilsFunctions.isEmpty(param.text)) {
						this.loaderText = param.text;
						this.changeText(this.loaderText);
					} else {
						this.revertToDefaultText();
					}
					// Show the loader
					standby.show();
				} else {
					if (!StringUtilsFunctions.isEmpty(param.text)) {
						this.revertToDefaultImage();
						this.loaderText = param.text;
						this.changeText(this.loaderText);
					} else {
						this.revertToDefaultText();
						this.revertToDefaultImage();
					}
					// Show the loader
					standby.show();
				}
			}
		},

		// Function to hide the standby loader
		hide : function() {
			standby.hide();
			this.revertToDefaultText();
			this.revertToDefaultImage();
		},

		// Change the default message to custom message
		changeText : function(param) {
			if (!StringUtilsFunctions.isEmpty(param)) {
				this.loaderText = StringUtilsFunctions
						.capitaliseFirstLetter(param);
			} else {
				this.revertToDefaultText();
			}
			standby.set("text", "<img src='" + this.imageUrl
					+ "' class='standbyLoaderImage' />"
					+ "<span class='standbyLoaderText'>" + this.loaderText
					+ "</span>");
		},

		// Revert back the custom message to the default message
		revertToDefaultText : function() {
			this.loaderText = standbyLoaderDefaultText;
			standby.set("text", "<img src='" + this.imageUrl
					+ "' class='standbyLoaderImage' />"
					+ "<span class='standbyLoaderText'>" + this.loaderText
					+ "</span>");
		},

		// Change the default image to custom image
		changeImage : function(param) {
			if (!StringUtilsFunctions.isEmpty(param)) {
				this.imageUrl = param;
			} else {
				this.revertToDefaultImage();
			}
			standby.set("text", "<img src='" + this.imageUrl
					+ "' class='standbyLoaderImage' />"
					+ "<span class='standbyLoaderText'>" + this.loaderText
					+ "</span>");
		},

		// Change the custom image to default image
		revertToDefaultImage : function() {
			this.imageUrl = standbyLoaderImageSrc;
			standby.set("text", "<img src='" + this.imageUrl
					+ "' class='standbyLoaderImage' />"
					+ "<span class='standbyLoaderText'>" + this.loaderText
					+ "</span>");
		},

		// Change the default target object of the standby loader
		changeTargetObject : function(param) {
			if (StringUtilsFunctions.isEmpty(param)) {
				standby.set("target", standbyLoaderDefaultTargetObject);
			} else {
				standby.set("target", param);
			}
		},

		// Change the custom target object to default target object
		revertToDefaultTargetObject : function() {
			standby.set("target", standbyLoaderDefaultTargetObject);
		}

	};
});
