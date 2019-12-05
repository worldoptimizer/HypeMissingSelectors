/*!
Hype MissingSelectors 1.0
copyright (c) 2019 Max Ziebell, (https://maxziebell.de). MIT-license
*/

/*
* Version-History
* 1.0 Initial release under MIT-license
*/
if("HypeMissingSelectors" in window === false) window['HypeMissingSelectors'] = (function () {

	function makeSafeForCSS(name) {
		return name.replace(/[^a-z0-9]/g, function(s) {
			var c = s.charCodeAt(0);
			if (c == 32) return '-';
			if (c >= 65 && c <= 90) return s;
			return '__' + ('000' + c.toString(16)).slice(-4);
		});
	}

	function addMissingSceneLayoutSelectors(hypeDocument, element, event){
		//scene class
		var sceneNameSafe = makeSafeForCSS(hypeDocument.currentSceneName());
		if (!element.classList.contains(sceneNameSafe)){
			element.classList.add(sceneNameSafe);
		}
		//layout class
		var layoutNameSafe = makeSafeForCSS(hypeDocument.currentLayoutName());
		if (!element.classList.contains(layoutNameSafe)){
			element.classList.add(layoutNameSafe);
		}
	}
	
	function addMissingSymbolSelectors(hypeDocument, element, event){
		//symbol class
		var symbolInstance = hypeDocument.getSymbolInstanceById(element.id);
		var symbolNameSafe = makeSafeForCSS(symbolInstance.symbolName());
		if (!element.classList.contains(symbolNameSafe)){
			element.classList.add(symbolNameSafe);
		}
	}

	/* setup callbacks */
	if("HYPE_eventListeners" in window === false) { window.HYPE_eventListeners = Array();}
	window.HYPE_eventListeners.push({"type":"HypeScenePrepareForDisplay", "callback": addMissingSceneLayoutSelectors});
	window.HYPE_eventListeners.push({"type":"HypeSymbolLoad", "callback": addMissingSymbolSelectors});	
	
	/* Reveal Public interface to window['HypeMissingSelectors'] */
	return {
		version: '1.0',
	};
})();