
/**
 * jQuery Hexview
 *
 * Display hex characters in an HTML element
 *
 * Skeleton based on "jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)" by @addyosmani (http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/)
 * @author c0d3runn3r 12/2013
 */

;(function ( $, window, document, undefined ) {


    $.widget( "coderunner.hexview" , {

        //Options to be used as defaults
        options: {

            encoding: "utf8",
            text: "",
            width: 400,
            height: 175,
            character_substitutions: {

                "\\"    :   "\\\\", 
                "\/"    :   "\\\/",
                "\b"    :   "\\b",
                "\f"    :   "\\f",
                "\n"    :   "\\n<br />",
                "\r"    :   "\\r",
                "\t"    :   "\\t"
            } 

        },

        _create: function () {

        	// this.element
        	// this.options
        	this._print_text(this.options.text);
            this.element
                .addClass("ui-widget ui-widget-content ui-corner-all ui-resizable")
                .css("overflow-y", "scroll")
                .height(this.options.height)
                .width(this.options.width);

        },

        /**
         * Convert an integer to a fixed (2 byte) hex value
         *
         * @param num a number
         * @revtval a string like "01EF"
         */
        fixedHex: function (num) {

            var str=num.toString(16).toUpperCase();
            while(str.length <4){

                str="0"+str;
            }

            return str;
        },

        /**
         * Display text in an safe way
         *
         * @private
         * @text the text to set
         */
        _print_text: function(text) {

            var out="";
            for(var n=0; n<text.length; n++){

                var c=text.charAt(n);
                var code=c.charCodeAt(0);

                // Is this one of our mapped characters?
                if(typeof this.options.character_substitutions[c] == "string") {

                    // It's a special mapped character
                    out+="<span class='hexview-escaped'>"+this.options.character_substitutions[c]+"</span>";

                } else {

                    // It's a non printable character
                    if(code < 32 || code == 127) {

                        out +="<span class='hexview-escaped'>\\u"+this.fixedHex(code)+"</span>";
                    
                    } else {

                        out +=c;
                    }
                }

            }

        	this.element.html(out);

        },

        destroy: function () {

        	this.element.empty();
            this.element.removeClass("ui-widget ui-widget-content ui-corner-all ui-resizable");

            // For UI 1.8, destroy must be invoked from the 
            // base widget
            $.Widget.prototype.destroy.call(this);
            // For UI 1.9, define _destroy instead and don't 
            // worry about 
            // calling the base widget
        },

        /**
         * Public text setter
         *
         * @text the text to set
         */
        setText: function (text) {

        	this.options.text=text;
        	this._print_text(text);
            this._trigger("text_changed", {});
        },

        // Respond to any changes the user makes to the 
        // option method
        _setOption: function ( key, value ) {
            switch (key) {
            case "text":

            	this.setText(value);
                break;

                /* TODO - Allow dynamic change of height, etc? */

            default:
                //this.options[ key ] = value;
                break;
            }

            // For UI 1.8, _setOption must be manually invoked 
            // from the base widget
            $.Widget.prototype._setOption.apply( this, arguments );
            // For UI 1.9 the _super method can be used instead
            // this._super( "_setOption", key, value );
        }
    });

})( jQuery, window, document );