# HypeMissingSelectors
![HypeMissingSelectors|690x487](https://playground.maxziebell.de/Hype/MissingSelectors/HypeMissingSelectors.png) 

Simple project to get the missing CSS selectors we all wished for :v:. These include selectors based on Symbol names, Layout names and Scene names. So, the following is now possible (example):
```html
<style>
	.First-Scene.Phone .TextBlock{
		background-color:#ff0000;
	}

	.First-Scene.Tablet-Landscape .TextBlock{
		background-color:#00ff00;
	}

	.Second-Scene.Phone .TextBlock{
		background-color:#0000ff;
	}

	.Second-Scene.Tablet-Landscape .TextBlock{
		background-color:#ffff00;
	}

	.Second-Scene.Tablet-Landscape .headline{
		font-weight:bold;
	}

	.Second-Scene.Tablet-Landscape .content{
		font-size:12px!important;
	}
</style>
```

*PS:* Many properties can be manipulated in pure Hype but this example exists to demonstrate that now elements (Scenes, Layouts and Symbols) can be targeted by name if needed when using this little extension.

**Version history**\
`1.0 Initial release under MIT-license`

Content Delivery Network (CDN)
--
Latest minified version can be linked into your project using the following in the head section of your project:
```html
<script src="https://cdn.jsdelivr.net/gh/worldoptimizer/HypeMissingSelectors/HypeMissingSelectors.min.js"></script>
```

Optionally you can also link a SRI version or specific releases. Read more about that on the jsDelivr's global Content Delivery Network (CDN) landing page for this extension at https://www.jsdelivr.com/package/gh/worldoptimizer/HypeMissingSelectors

Learn how to use the latest extension version and how to combine extentions into one file at
https://github.com/worldoptimizer/HypeCookBook/wiki/Including-external-files-and-Hype-extensions
