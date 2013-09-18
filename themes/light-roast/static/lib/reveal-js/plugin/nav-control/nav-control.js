/*
 * Display the nav control bar
 *
 * By Bo Yu <bohr.yu@gmail.com>, September 2013
 */

var RevealNavControl = (function() {
	function _open() {
		var control = document.getElementById("nav-control");
		control.style.display = "block";
	}

  function _close() {
    var control = document.getElementById("nav-control");
    control.style.display = "none";
  }

	function _toggle() {
		var inputbox = document.getElementById("nav-control");
		if (inputbox.style.display !== "block") {
			_open();
		}
		else {
			_close();
		}
	}

	var dom = {};
	dom.wrapper = document.querySelector( '.reveal' );

	if( !dom.wrapper.querySelector( '#nav-control' ) ) {
			var element = document.createElement( 'div' );
			element.id = "nav-control";
			element.classList.add('nav-control');
      element.style.position = 'absolute';
      element.style.bottom = '3px';
      element.style.left = '0px';
      element.style.width = '100%';
      element.style.height = '50px';
      element.style["z-index"] = '2';

      //searchElement.innerHTML = '<span><input type="search" id="searchinput" class="searchinput" style="vertical-align: top;"/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJiSURBVHjatFZNaxNBGH5md+Mmu92NVdKDRipSAyqCghgQD4L4cRe86UUtAQ+eFCxoa4/25EXBFi8eBE+eRPoDhB6KgiiixdAPCEkx2pjvTXadd9yNsflwuyUDD/O+u8PzzDPvzOwyx3EwyCZhwG3gAkp7MnpjgbopjsltcD4gjuXZZKeAR348MYLYTm3LzOs/y3j3JTfZxgXWXmTuwPHIc4VmoOmv5IrI53+AO2DdHLjkDWQ3GoEEVFXtXQOvkSnPWcyUceviLhwbDYv8/XIVj97kse7TodLvZXxYxrPUHkQ1ufXs3FEdybEIxucySOesoNvUgWU1cP3MkCBfTFdw9fGaAMVmRELq7LBw2Q3/FaAxxWIRpw+ZIr/7IouPqzUBiqmdHAv7EuhRAwf1er2Vy4x1jW3b2d5Jfvu5IPp7l2LYbcgCFFNb+FoJ7oBqEAqFMPNqFcmEgVMJDfMT+1tvN0pNjERlMS6QA5pFOKxiKVPFhakPeL3It+WGJUDxt2wFR+JhzI7v5ctkd8DXOZAkCYYxhO+lKm4+Xfqz/rIixBuNBl7eOYzkQQNzqX249mRl6zUgEcYkaJrGhUwBinVdh6IouPzwE6/DL5w4oLkH8y981aDf+uq6hlKpJESiUdNfDZi7/ehG9K6KfiA3pml0PLcsq+cSMTj2NL9ukc4UOmz7AZ3+crkC4mHujFvXNaMFB3bEr8xPS6p5O+jXxq4VZtaen7/PwzrntjcLUE0iHPS1Ud1cdiEJl/8WivZk0wXd7zWOMkeF8s0CcAmkNrC2nvXZDbbbN73ccYnZoH9bfgswAFzAe9/h3dbKAAAAAElFTkSuQmCC" id="searchbutton" class="searchicon" style="vertical-align: top; margin-top: -1px;"/></span>';
			dom.wrapper.appendChild( element );
	}

  /*
	document.getElementById("searchbutton").addEventListener( 'click', function(event) {
		doSearch();
	}, false );

	document.getElementById("searchinput").addEventListener( 'keyup', function( event ) {
		switch (event.keyCode) {
			case 13:
				event.preventDefault();
				doSearch();
				searchboxDirty = false;
				break;
			default:
				searchboxDirty = true;
		}
	}, false );

	// Open the search when the 's' key is hit (yes, this conflicts with the notes plugin, disabling for now)
	
	document.addEventListener( 'keydown', function( event ) {
		// Disregard the event if the target is editable or a
		// modifier is present
		if ( document.querySelector( ':focus' ) !== null || event.shiftKey || event.altKey || event.ctrlKey || event.metaKey ) return;

		if( event.keyCode === 83 ) {
			event.preventDefault();
			openSearch();
		}
	}, false );
*/
	return { open: _open, close: _close, toggle: _toggle };
})();
