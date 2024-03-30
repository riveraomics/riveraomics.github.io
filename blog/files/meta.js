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
	var websiteMeta = {"category-osvaldo-d.-rivera-gonz00e1lez.html":"A list of posts in category &ldquo;Osvaldo D. Rivera-Gonz&aacute;lez&rdquo;","conversation-with-senior-medical-science-liason-caris.html":"Being able to attend Dr. Negrón’s seminar was a very pleasant experience full of knowledge and experience in the different fields one can explore in s","category-damian-e.-santiago-mu00f1oz.html":"A list of posts in category &ldquo;Damian E. Santiago-Mu&ntilde;oz&rdquo;","applying-artificial-intelligence-address-health-disparities-puerto-rico.html":"Artificial intelligence (AI) and machine learning (ML) are currently disrupting the healthcare industry, with the potential to address significant gap","category-paola-n.-aponte-castro.html":"A list of posts in category &ldquo;Paola N. Aponte-Castro&rdquo;","category-emmanuel-franceschini-rosado.html":"A list of posts in category &ldquo;Emmanuel Franceschini-Rosado&rdquo;","archive-2023.html":"Archives for 2023","category-ver00f3nica-defill00f3-martinez.html":"A list of posts in category &ldquo;Ver&oacute;nica Defill&oacute;-Martinez&rdquo;","archive-2024.html":"Archives for 2024","behind-relief-exploring-toxicology-common-medications.html":"The medical sciences community of the island was recently enriched by twelve seminars at the Puerto Rico’s Toxicology Conference led by distinguished ","breaking-boundaries-biomedical-research-puerto-rico-with-10x-genomics.html":"10X Genomics has recently been noticeably active in Puerto Rico, hosting two distinct activities in the San Juan metropolitan area; a genomics worksho","category-sebasti00e1n-a.-rosario-torres.html":"A list of posts in category &ldquo;Sebasti&aacute;n A. Rosario-Torres&rdquo;","category-carla-n.-cintron-benoit.html":"A list of posts in category &ldquo;Carla N. Cintron-Benoit&rdquo;","7d08e3c2a05ceed17484e83b2e595cb2-5.html":"The pharmaceutical industry in Puerto Rico is currently at a critical juncture, facing a myriad of factors that shape its present and future trajector"};
 
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