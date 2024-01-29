(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"archive-2024.html":"Archives for 2024","breaking-boundaries-biomedical-research-puerto-rico-with-10x-genomics.html":"10X Genomics has recently been noticeably active in Puerto Rico, hosting two distinct activities in the San Juan metropolitan area; a genomics worksho","category-emmanuel-franceschini-rosado.html":"A list of posts in category &ldquo;Emmanuel Franceschini-Rosado&rdquo;","archive-2023.html":"Archives for 2023","category-osvaldo-d.-rivera-gonz00e1lez.html":"A list of posts in category &ldquo;Osvaldo D. Rivera-Gonz&aacute;lez&rdquo;","category-ver00f3nica-defill00f3-martinez.html":"A list of posts in category &ldquo;Ver&oacute;nica Defill&oacute;-Martinez&rdquo;","conversation-with-senior-medical-science-liason-caris.html":"Being able to attend Dr. Negrón’s seminar was a very pleasant experience full of knowledge and experience in the different fields one can explore in s","category-paola-n.-aponte-castro.html":"A list of posts in category &ldquo;Paola N. Aponte-Castro&rdquo;","category-sebasti00e1n-a.-rosario-torres.html":"A list of posts in category &ldquo;Sebasti&aacute;n A. Rosario-Torres&rdquo;","behind-relief-exploring-toxicology-common-medications.html":"The medical sciences community of the island was recently enriched by twelve seminars at the Puerto Rico’s Toxicology Conference led by distinguished "};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();