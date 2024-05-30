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
	var websiteMeta = {"category-sebasti00e1n-a.-rosario.html":"A list of posts in category &ldquo;Sebasti&aacute;n A. Rosario&rdquo;","puerto-rico-porzio-pharmaceuticals-summit.html":"The pharmaceutical industry in Puerto Rico is currently at a critical juncture, facing a myriad of factors that shape its present and future trajector","conversation-with-senior-medical-science-liason-caris.html":"Being able to attend Dr. Negrón’s seminar was a very pleasant experience full of knowledge and experience in the different fields one can explore in s","category-carla-n.-cintron.html":"A list of posts in category &ldquo;Carla N. Cintron&rdquo;","applying-artificial-intelligence-address-health-disparities-puerto-rico.html":"Artificial intelligence (AI) and machine learning (ML) are currently disrupting the healthcare industry, with the potential to address significant gap","category-damian-e.-santiago.html":"A list of posts in category &ldquo;Damian E. Santiago&rdquo;","archive-2023.html":"Archives for 2023","advancing-stem-research-education-semester-recap-rivera-omics-group.html":"As we wrap up a successful academic semester at RIVERA-OMICS, we are thrilled to share the highlights and achievements from our concluding lab meeting","category-paola-n.-aponte.html":"A list of posts in category &ldquo;Paola N. Aponte&rdquo;","category-osvaldo-d.-rivera.html":"A list of posts in category &ldquo;Osvaldo D. Rivera&rdquo;","category-emmanuel-franceschini.html":"A list of posts in category &ldquo;Emmanuel Franceschini&rdquo;","behind-relief-exploring-toxicology-common-medications.html":"The medical sciences community of the island was recently enriched by twelve seminars at the Puerto Rico’s Toxicology Conference led by distinguished ","archive-2024.html":"Archives for 2024","category-ver00f3nica-defill00f3.html":"A list of posts in category &ldquo;Ver&oacute;nica Defill&oacute;&rdquo;","breaking-boundaries-biomedical-research-puerto-rico-with-10x-genomics.html":"10X Genomics has recently been noticeably active in Puerto Rico, hosting two distinct activities in the San Juan metropolitan area; a genomics worksho"};
 
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