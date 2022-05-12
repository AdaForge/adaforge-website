<?php
	// Start session.
	session_start();
	
	// Set a key, checked in mailer, prevents against spammers trying to hijack the mailer.
	$security_token = $_SESSION['security_token'] = uniqid(rand());
	
	if ( ! isset($_SESSION['formMessage'])) {
		$_SESSION['formMessage'] = 'Fill in the form below to send us an email.';	
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
?><!doctype html>
<!--[if IE 8 ]><html lang="en" class="ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
    <meta name="viewport" content="initial-scale=1 maximum-scale=1" />
    
<!-- Start of StatCounter Code for Default Guide -->
<script type="text/javascript" src="/resources/Scripts/StatCounter.js"></script>

<div class="statcounter"><a title="web analytics"
href="http://statcounter.com/" target="_blank"><img
class="statcounter"
src="http://c.statcounter.com/10688383/0/3a95e712/1/"
alt="web analytics"></a></div>
<!-- End of StatCounter Code for Default Guide -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="author" content="(c) William Franck" />
		<meta name="description" content="AdaForge is the home of the brave Ada developer programming in the Ada language source code and searching free quality Open Source software libraries" />
		<meta name="keywords" content="ada programming language source code software library libraries osx linux freebsd real-time free quality opensource open-source adaforge" />
		<meta name="description" content="Ada Open Source Code and Tools  - Software for a complex world - Contact form" />
		<meta name="robots" content="index, follow" />
		<meta name="generator" content="RapidWeaver" />
		<link rel="apple-touch-icon" sizes="180x180" href="https://www.adaforge.org/resources/large.png" />
<link rel="apple-touch-icon" sizes="167x167" href="https://www.adaforge.org/resources/medium.png" />
<link rel="icon" type="image/png" href="https://www.adaforge.org/resources/favicon_large.png" sizes="64x64" />
<link rel="icon" type="image/png" href="https://www.adaforge.org/resources/favicon_medium.png" sizes="32x32" />
<link rel="apple-touch-icon" sizes="152x152" href="https://www.adaforge.org/resources/Ada_1983-2022_3D_Coin-152.png" />
<link rel="icon" type="image/png" href="https://www.adaforge.org/resources/favicon_small.png" sizes="16x16" />

	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@AdaForge2022">
	<meta name="twitter:creator" content="@AdaForge2022">
	<meta name="twitter:title" content="Ada Forge Software resources">
	<meta name="twitter:description" content="Ada 2022 — The Reliable Language for a Complex World. When your software really has to work, choose Ada ! or be lost with C, C++, Go, Rust, …">
	<meta name="twitter:url" content="https://www.adaforge.org/contact-form/index.php">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="Ada Forge - Home">
	<meta property="og:title" content="Ada Forge Software resources">
	<meta property="og:description" content="Ada 2022 — The Reliable Language for a Complex World. When your software really has to work, choose Ada ! or be lost with C, C++, Go, Rust, …">
	<meta property="og:url" content="https://www.adaforge.org/contact-form/index.php"> <title>Want to registesr a new softwari in this Ada Forge ?</title>
    <link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/styles.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/colourtag-theme-default-page48.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/flexslider.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/ec5on.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/ec6on.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/ec9on.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/rimage.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/ssoff.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/sslide.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/sidenone.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/olight60.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/fontfjalla.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/title32.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/fontdakotaspan.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/bts46.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/bt20.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/fontfjallanav.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/nav16.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/fontquestrialside.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/fontquestrialheader.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/fontquestrialcontent.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/Endeavor2/css/font16.css" />
		 <style type="text/css" media="all">#feature {background-image: url("../resources/Banner/Frog.jpg")}
</style>
    <!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<script type="text/javascript" src="../rw_common/themes/Endeavor2/scripts/html5shiv.js"></script>
		<![endif]-->
    <script type="text/javascript" src="../rw_common/themes/Endeavor2/javascript.js"></script>
    <script type="text/javascript" src="../rw_common/themes/Endeavor2/scripts/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="../rw_common/themes/Endeavor2/scripts/jquery.hoverIntent.minified.js"></script>
    <script type="text/javascript" src="../rw_common/themes/Endeavor2/scripts/function.js"></script>
    <script type="text/javascript" src="../rw_common/themes/Endeavor2/scripts/jquery.fitvids.js"></script>
    <script type="text/javascript" src="../rw_common/themes/Endeavor2/scripts/jquery.flexslider.js"></script>
      
<link rel="stylesheet" type="text/css" href="../rw_common/assets/message.css" />
<link rel="stylesheet" type="text/css" href="../rw_common/assets/global.css" />
</head>
<body>
    <div id="wrapper">
        <div id="hwrap">
            <header class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
			<div id="headwrap">
			
					<div id="titlelogo">
							<a href="https://www.adaforge.org/">				
							<div id="logo"></div>	
							<h1>Ada Forge - Home</h1></a>
							<h2>Software for a complex world</h2>
					</div>
						
						
						<div id="mwrap">
							<div id="lt"></div>
							<div id="lm"></div>
							<div id="lb"></div>
						</div>
						
						
						<div id="nwrap">
							<div id="menuBtn"></div>
							<nav><ul class="navigation"><li><a href="../News/" rel="">News</a></li><li><a href="../Libraries/" rel="">Libraries</a><ul class="navigation"><li><a href="../Libraries/AppDomains/" rel="">App Domains</a></li><li><a href="../Libraries/ServiceLibs/" rel="">Service Libs</a></li><li><a href="../Libraries/SystemLibs/" rel="">System Libs</a></li><li><a href="../Libraries/Hardware-Kernels/" rel="">Hardware & Kernels</a></li></ul></li><li><a href="../DevTools/" rel="">Dev Tools</a><ul class="navigation"><li><a href="../DevTools/DevToolsDesign/" rel="">Design</a></li><li><a href="../DevTools/DevToolsSources/" rel="">Sources</a></li><li><a href="../DevTools/DevToolsBuild/" rel="">Build</a></li><li><a href="../DevTools/DevToolsTest/" rel="">Test</a></li><li><a href="../DevTools/DevToolsDevOps/" rel="">DevOps</a></li><li><a href="../DevTools/Translators/" rel="">Translate</a></li></ul></li><li><a href="../Thematics/" rel="">Thematics</a></li><li><a href="../OtherResources/" rel="">Other resources</a><ul class="navigation"><li><a href="../OtherResources/Learn/" rel="">Learn</a></li><li><a href="../OtherResources/Communities/" rel="">Communities</a></li><li><a href="../OtherResources/Forums-Chats/" rel="">Forums &Chat</a></li><li><a href="../OtherResources/OtherAdaResources/" rel="">Ada Resources</a></li><li><a href="../OtherResources/PublicRepos/" rel="">Public Repos</a></li><li><a href="../OtherResources/OSI-Licenses/" rel="">FOSS Licenses</a></li><li><a href="../OtherResources/ProjectStructure/" rel="">AdaForge GPR</a></li><li><a href="../OtherResources/Advocacy/" rel="">Advocacy</a></li><li><a href="../OtherResources/Popularize/" rel="">Popularize</a></li><li><a href="../OtherResources/BenchMarking/" rel="">Benchmarking</a></li><li><a href="../OtherResources/CodeContests/" rel="">Code Contest</a></li><li><a href="../OtherResources/AboutUs/" rel="">About US</a></li></ul></li><li><a href="../Goodies/" rel="">Goodies</a><ul class="navigation"><li><a href="../Goodies/AdaGoldCoin/" rel="">Ada Gold Coin</a></li><li><a href="../Goodies/LadyAda/" rel="">Lady Ada</a></li><li><a href="../Goodies/Ada_Logo/" rel="">Ada Language Logo</a></li></ul></li><li id="current"><a href="./" rel="" id="current">Contact</a></li></ul></nav>						
						</div>
				</div>
			</header>
            <div class="banner video_banner">
                <div id="feature">
                    <div id="extraContainer11">
                        <div class="videoWrapper">
                        </div>
                    </div>
                    <div id="extraContainer1">
                    </div>
                    <div class="banner-text">
                    </div>
                    <div id="extraContainer9">
                    </div>
                </div>
            </div>
        </div>
        <div class="clear">
        </div>
        <div id="container">
            <div id="extraContainer7">
            </div>
            <div id="extraContainer8">
            </div>
            <section>
								
								<div id="padding">
<div class="message-text"><?php echo $_SESSION['formMessage']; unset($_SESSION['formMessage']); ?></div><br />

<form class="rw-contact-form" action="./files/mailer.php" method="post" enctype="multipart/form-data">
	 <div>
		<label>Your Name</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element0'); ?>" name="form[element0]" size="40"/><br /><br />

		<label>Your Email</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element1'); ?>" name="form[element1]" size="40"/><br /><br />

		<label>Subject</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element2'); ?>" name="form[element2]" size="40"/><br /><br />

		<label>Message</label> *<br />
		<textarea class="form-input-field" name="form[element3]" rows="8" cols="38"><?php echo check('element3'); ?></textarea><br /><br />

		<div style="display: none;">
			<label>Spam Protection: Please don't fill this in:</label>
			<textarea name="comment" rows="1" cols="1"></textarea>
		</div>
		<input type="hidden" name="form_token" value="<?php echo $security_token; ?>" />
		<input class="form-input-button" type="reset" name="resetButton" value="Reset" />
		<input class="form-input-button" type="submit" name="submitButton" value="Submit" />
	</div>
</form>

<br />
<div class="form-footer"><?php echo $_SESSION['formFooter']; unset($_SESSION['formFooter']); ?></div><br />

<?php unset($_SESSION['form']); ?>
</div>
								
							</section>
            <div id="asidewrap">
                <aside>
								<div id="sidecontent">
									<div id="sideTitle"></div>	
										
									
								</div>	
							</aside>
            </div>
            <div class="clear">
            </div>
            <div id="ecwrap">
            </div>
            <div id="ec2wrap">
                <div id="extraContainer2">
                </div>
            </div>
            <div id="ec3wrap">
                <div id="extraContainer3">
                </div>
            </div>
            <div id="ec4wrap">
                <div id="extraContainer4">
                </div>
            </div>
            <div id="ec5wrap">
                <div id="extraContainer5">
                </div>
            </div>
            <div id="ec6wrap">
                <div id="extraContainer6">
                </div>
            </div>
            <div id="extraContainer10">
            </div>
        </div>
        <footer>		
			<div id="footer">&copy; 2015-2022 William J. FRANCK <a href="#" id="rw_email_contact">Contact Me</a><script type="text/javascript">var _rwObsfuscatedHref0 = "mai";var _rwObsfuscatedHref1 = "lto";var _rwObsfuscatedHref2 = ":co";var _rwObsfuscatedHref3 = "nta";var _rwObsfuscatedHref4 = "ct@";var _rwObsfuscatedHref5 = "ada";var _rwObsfuscatedHref6 = "for";var _rwObsfuscatedHref7 = "ge.";var _rwObsfuscatedHref8 = "org";var _rwObsfuscatedHref = _rwObsfuscatedHref0+_rwObsfuscatedHref1+_rwObsfuscatedHref2+_rwObsfuscatedHref3+_rwObsfuscatedHref4+_rwObsfuscatedHref5+_rwObsfuscatedHref6+_rwObsfuscatedHref7+_rwObsfuscatedHref8; document.getElementById("rw_email_contact").href = _rwObsfuscatedHref;</script></div>		
				<div id="socialicons">
				<div id="socialicons1"></div>
			</div>		
		</footer>
    </div>
    <a href="#" class="scrollup">Scroll</a> 
<script src="../rw_common/assets/global.js"></script>
<div id="rapidweaver_privacy_message">
    <p><span style="font:13px .AppleSystemUIFont; color:#000000;">GDPR compliant</span></p>
    <button id="rapidweaver_privacy_message_dismiss_button">OK</button>
</div>

<script src="../rw_common/assets/message.js"></script>
</body>
</html>
