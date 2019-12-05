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
