Loader Widget
=============

CUSTOMIZED STANDBY LOADER WIDGET FOR DOJO

Created by SANDEEP KANANGATT<br/>
Email - sandeepsuvit@gmail.com<br/>
Website - www.dotedlabs.com<br/>

This widget is a customized version of Dojo Standby widget (http://livedocs.dojotoolkit.org/dojox/widget/Standby). It has been customized to include texts along with the loading image. This helps the user to display text content dynamically when they want to show the loader for any particular event. The user can also change the loading image dynamically when they call the <b>show()</b> method of the widget. <br/><br/>
This standby loader can be invoked in the following ways.<br/><br/>
<b>Note:</b><br/>
The loader has been default set to work on the "wrapper" div on the 
		html pages. For achieving this you can enclose all your html content in a 
		div with id as "wrapper". User can also change default "wrapper" attach 
		node by calling <b>changeTargetObject()</b> function and passing in the node details.

<b>How to use this widget:</b><br/>
Include this js file and css file in your parent html 'head' tag after including the <b>dojo.js</b> file.
<pre>
1. standbyLoader.show();
<br/>   Displays the loader with the default text "Please wait...".<br/>
2. standbyLoader.show({text: "my message"});
<br/>   Displays the loader with the parameterized string. <br/>
3. standbyLoader.show({image: "image url", type: "IMG"});
<br/>   Displays the image that is passed as parameter. The text will stay as default. <br/>
4. standbyLoader.show({image: "image url", type:"IMG", text:"my message"});
<br/>   Displays the image and the text that is passed as parameter. <br/>
5. standbyLoader.show({target:"id of your target DOM object"});
<br/>	Displays the loader on the target DOM specified. <br/>
6. standbyLoader.hide();
<br/>   Hides the loader and defaults the loader text to "Please wait...".<br/>
</pre>
