<?php
	// Start session.
	session_start();
	
	// Set a key, checked in mailer, prevents against spammers trying to hijack the mailer.
	$security_token = $_SESSION['security_token'] = uniqid(rand());
	
	if ( ! isset($_SESSION['formMessage'])) {
		$_SESSION['formMessage'] = 'Fill in the form below to send the lab an email.';	
	}
	
	if ( ! isset($_SESSION['formFooter'])) {
		$_SESSION['formFooter'] = ' ';
	}
	
	if ( ! isset($_SESSION['form'])) {
		$_SESSION['form'] = array();
	}
	
	function check($field, $type = '', $value = '') {
		$string = "";
		if (isset($_SESSION['form'][$field])) {
			switch($type) {
				case 'checkbox':
					$string = 'checked="checked"';
					break;
				case 'radio':
					if($_SESSION['form'][$field] === $value) {
						$string = 'checked="checked"';
					}
					break;
				case 'select':
					if($_SESSION['form'][$field] === $value) {
						$string = 'selected="selected"';
					}
					break;
				default:
					$string = $_SESSION['form'][$field];
			}
		}
		return $string;
	}
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="robots" content="index, follow" />
		<meta name="generator" content="RapidWeaver" />
		
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Join | Rivera Omics Group">
	<meta name="twitter:image" content="https://riveraomics.github.io/resources/AdobeStock_245562438_WP2.jpeg">
	<meta name="twitter:url" content="https://riveraomics.github.io/contact-form/index.php">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="Rivera Omics Group">
	<meta property="og:title" content="Join | Rivera Omics Group">
	<meta property="og:image" content="https://riveraomics.github.io/resources/AdobeStock_245562438_WP2.jpeg">
	<meta property="og:url" content="https://riveraomics.github.io/contact-form/index.php">
	
	<title>Join | Rivera Omics Group</title>
	<link rel="stylesheet" type="text/css" media="all" href="../rw_common/themes/Engineer/consolidated-3.css?rwcache=711187472" />
		
	    
</head>

<!-- This page was created with RapidWeaver from Realmac Software. http://www.realmacsoftware.com -->

<body>
	<div class="hero" id="hero">
		<nav class="navbar navbar-expand-lg">
			<a class="navbar-brand" href="https://riveraomics.github.io/"><img src="../rw_common/images/riveraomics_logo.png" width="856" height="131" alt="Rivera Omics Group"/> <span class="navbar-title">Rivera Omics Group</span></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ml-auto"><li class="nav-item"><a href="../" rel="" class="nav-link">Home</a></li><li class="nav-item active"><a href="./" rel="" class="nav-link">Join</a></li><li class="nav-item"><a href="../markdown-2/" rel="" class="nav-link">TEAM</a></li><li class="nav-item"><a href="../markdown/" rel="" class="nav-link">Projects</a></li><li class="nav-item"><a href="../offsite/" target="_blank" class="nav-link">UAGM</a></li></ul>
			</div>
		</nav>

		<div class="hero-content container d-flex align-items-center" id="hero">
			<div class="">
				<h1 class="hero-title">Rivera Omics Group</h1>
				<p class="hero-slogan display-4">Decoding life and disease</p>
			</div>
			<div class="hero-background" title="Rivera Omics Group"></div>
			<div class="hero-overlay"></div>
		</div>

	</div>

    <div class="content">
        <section class="main" style="position: relative;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 main">
                        
<div class="message-text"><?php echo $_SESSION['formMessage']; unset($_SESSION['formMessage']); ?></div><br />

<form class="rw-contact-form" action="./files/mailer.php" method="post" enctype="multipart/form-data">
	 <div>
		<label>Your Full Name</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element0'); ?>" name="form[element0]" size="40"/><br /><br />

		<label>Email (uagm.edu)</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element1'); ?>" name="form[element1]" size="40"/><br /><br />

		<label>Phone number (optional)</label> <br />
		<input class="form-input-field" type="text" value="<?php echo check('element2'); ?>" name="form[element2]" size="40"/><br /><br />

		<label>Subject</label> *<br />
		<select class="form-select-field" name="form[element3]">			<option <?php echo check('element3', 'select','Undergraduate student interested in joining lab.'); ?> value="Undergraduate student interested in joining lab.">Undergraduate student interested in joining lab.</option>
		</select><br /><br />

		<label>Briefly describe your background in science</label> *<br />
		<textarea class="form-input-field" name="form[element4]" rows="8" cols="38"><?php echo check('element4'); ?></textarea><br /><br />

		<label>Describe your career goals.</label> *<br />
		<textarea class="form-input-field" name="form[element5]" rows="8" cols="38"><?php echo check('element5'); ?></textarea><br /><br />

		<label>Describe how RNA bioinformatics fits into your career goals.</label> *<br />
		<textarea class="form-input-field" name="form[element6]" rows="8" cols="38"><?php echo check('element6'); ?></textarea><br /><br />

		<label>Resume or CV (optional)</label> <br />
		<input type="file" name="element7" /><br /><br />

		<div style="display: none;">
			<label>Spam Protection: Please don't fill this in:</label>
			<textarea name="comment" rows="1" cols="1"></textarea>
		</div>
		<input type="hidden" name="form_token" value="<?php echo $security_token; ?>" />
		
		<input class="form-input-button" type="submit" name="submitButton" value="Submit" />
	</div>
</form>

<br />
<div class="form-footer"><?php echo $_SESSION['formFooter']; unset($_SESSION['formFooter']); ?></div><br />

<?php unset($_SESSION['form']); ?>

                    </div>

                    <div class="col-sm-12 sidebar">
                        <h2></h2>
                         
                    </div>
                </div>
            </div>
        </section>
    </div>

	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 footer-content">
					<ul class="navbar-nav ml-auto"><li class="nav-item"><a href="../" rel="" class="nav-link">Home</a></li><li class="nav-item active"><a href="./" rel="" class="nav-link">Join</a></li><li class="nav-item"><a href="../markdown-2/" rel="" class="nav-link">TEAM</a></li><li class="nav-item"><a href="../markdown/" rel="" class="nav-link">Projects</a></li><li class="nav-item"><a href="../offsite/" target="_blank" class="nav-link">UAGM</a></li></ul>
					&copy; 2023 Rivera Omics Group
				</div>
			</div>
		</div>
	</footer>

	<script type="text/javascript" src="../rw_common/themes/Engineer/js/main.js?rwcache=711187472"></script>
</body>

</html>