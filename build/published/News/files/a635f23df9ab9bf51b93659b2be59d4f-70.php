<!doctype html>
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
		<meta name="description" content="Ada Open Source Code and Tools - Software for a complex world - News" />
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
	<meta name="twitter:image" content="https://www.adaforge.org/resources/Ada-5-3D-Coins-2022-tweet.jpg">
	<meta name="twitter:url" content="https:/www.adaforge.org/News/files/a635f23df9ab9bf51b93659b2be59d4f-70.php">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="Ada Forge - Home">
	<meta property="og:image" content="https://www.adaforge.org/resources/Ada-5-3D-Coins-2022-tweet.jpg">
	<meta property="og:url" content="https:/www.adaforge.org/News/files/a635f23df9ab9bf51b93659b2be59d4f-70.php"> <title>Units of measurement for Ada v3.9
 | Programmer's Forge for Open Source Ada Code and Tools - News</title>
    <link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/styles.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/colourtag-theme-default-page5.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/flexslider.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/ec6on.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/ec9on.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/rimage.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/ssoff.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/sslide.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/sideright.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/olight60.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/fontfjalla.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/title32.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/fontdakotaspan.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/bts46.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/bt20.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/fontfjallanav.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/nav16.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/fontquestrialside.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/fontquestrialheader.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/fontquestrialcontent.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../../rw_common/themes/Endeavor2/css/font16.css" />
		 <style type="text/css" media="all">#feature {background-image: url("../../resources/Banner/BigSuccessfullTeam.jpg")}

blockquote, .standout {
margin: 20;
padding: 4px;
font: 14px 'Courier New', Courier, monospace;
display: block;
list-style-type: none;
background: rgba(240, 240, 240, 0.3);
}
code {
font: 12px 'Courier New', Courier, monospace;
display: inline;
background: rgba(240, 240, 240, 0.3);
padding: 4px;
    }
    
    
#extraContainer6 {background-image: url(../../resources/Banner/BigSuccessfullTeam.jpg);}  </style>
    <!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<script type="text/javascript" src="../../rw_common/themes/Endeavor2/scripts/html5shiv.js"></script>
		<![endif]-->
    <script type="text/javascript" src="../../rw_common/themes/Endeavor2/javascript.js"></script>
    <script type="text/javascript" src="../../rw_common/themes/Endeavor2/scripts/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="../../rw_common/themes/Endeavor2/scripts/jquery.hoverIntent.minified.js"></script>
    <script type="text/javascript" src="../../rw_common/themes/Endeavor2/scripts/function.js"></script>
    <script type="text/javascript" src="../../rw_common/themes/Endeavor2/scripts/jquery.fitvids.js"></script>
    <script type="text/javascript" src="../../rw_common/themes/Endeavor2/scripts/jquery.flexslider.js"></script>
    <script>
			 
 
		</script> 
<script type="text/javascript" async src="https://www.adaforge.org/News/files/meta.js"></script>
 <div id="myExtraContent9">News</div>
<link rel="stylesheet" type="text/css" href="../../rw_common/assets/message.css" />
<link rel="stylesheet" type="text/css" href="../../rw_common/assets/global.css" />
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
							<nav><ul class="navigation"><li id="current"><a href="../" rel="" id="current">News</a></li><li><a href="../../Libraries/" rel="">Libraries</a><ul class="navigation"><li><a href="../../Libraries/AppDomains/" rel="">App Domains</a></li><li><a href="../../Libraries/ServiceLibs/" rel="">Service Libs</a></li><li><a href="../../Libraries/SystemLibs/" rel="">System Libs</a></li><li><a href="../../Libraries/Hardware-Kernels/" rel="">Hardware & Kernels</a></li></ul></li><li><a href="../../DevTools/" rel="">Dev Tools</a><ul class="navigation"><li><a href="../../DevTools/DevToolsDesign/" rel="">Design</a></li><li><a href="../../DevTools/DevToolsSources/" rel="">Sources</a></li><li><a href="../../DevTools/DevToolsBuild/" rel="">Build</a></li><li><a href="../../DevTools/DevToolsTest/" rel="">Test</a></li><li><a href="../../DevTools/DevToolsDevOps/" rel="">DevOps</a></li><li><a href="../../DevTools/Translators/" rel="">Translate</a></li></ul></li><li><a href="../../Thematics/" rel="">Thematics</a></li><li><a href="../../OtherResources/" rel="">Other resources</a><ul class="navigation"><li><a href="../../OtherResources/Learn/" rel="">Learn</a></li><li><a href="../../OtherResources/Communities/" rel="">Communities</a></li><li><a href="../../OtherResources/Forums-Chats/" rel="">Forums &Chat</a></li><li><a href="../../OtherResources/OtherAdaResources/" rel="">Ada Resources</a></li><li><a href="../../OtherResources/PublicRepos/" rel="">Public Repos</a></li><li><a href="../../OtherResources/OSI-Licenses/" rel="">FOSS Licenses</a></li><li><a href="../../OtherResources/ProjectStructure/" rel="">AdaForge GPR</a></li><li><a href="../../OtherResources/Advocacy/" rel="">Advocacy</a></li><li><a href="../../OtherResources/Popularize/" rel="">Popularize</a></li><li><a href="../../OtherResources/BenchMarking/" rel="">Benchmarking</a></li><li><a href="../../OtherResources/CodeContests/" rel="">Code Contest</a></li><li><a href="../../OtherResources/AboutUs/" rel="">About US</a></li></ul></li><li><a href="../../Goodies/" rel="">Goodies</a><ul class="navigation"><li><a href="../../Goodies/AdaGoldCoin/" rel="">Ada Gold Coin</a></li><li><a href="../../Goodies/LadyAda/" rel="">Lady Ada</a></li><li><a href="../../Goodies/Ada_Logo/" rel="">Ada Language Logo</a></li></ul></li><li><a href="../../contact-form/" rel="">Contact</a></li></ul></nav>						
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
	<div class="blog-archive-entries-wrapper">
		<div id="unique-entry-id-70" class="blog-entry"><h1 class="blog-entry-title">Units of measurement for Ada v3.9
</h1><div class="blog-entry-date">2022-04-17 Filed in: <span class="blog-entry-category"><a href="category-library.php">Library</a></span></div><div class="blog-entry-summary"><br />Key features:<br /><br /><ul class="disc"><li>The type Unit denotes the dimension of a physical entity. The type Measure represents a dimensioned value;</li><li>Mixed unit arithmetic. Values in SI (Le Syst&egrave;me International d'Unit&eacute;s) units can be mixed with irregular units (such as foot and yard) as long as the result is defined;</li><li>Shifted unit support (a widely used instance of a shifted unit is degree of Celsius);</li><li>The type Measure is generic, parameterized by a floating-point type. A non-generic version based on the type Float is also provided;</li><li>String to Measure conversion supports as wide set of irregular units as possible;</li><li>Currently the powers of the base unit components lie in the range -8..7. This limitation has an implementation reason (absence of 64-bit modular integers in some Ada compilers). For further discussion of this topic see;</li><li>GTK+ widgets for a comfortable visual measurement unit editing and selection. The rest of the library can be used independently on this part as well as on GTK+.</li></ul><br />See <a href="http://www.dmitry-kazakov.de/ada/units.htm" target="_blank" title="Units of measurement for Ada">Dmitry&rsquo;s Web page</a> for details<br /><br /><br /><br />Changes in this version 3.9 : <br /><br /><ul class="disc"><li>GNAT Studio Community 2021 bugs worked around; </li><li>GTK 3.24.x support</li></ul><br /><br />Download from <a href="https://sourceforge.net/projects/unitsofmeasurementforada/files/latest/download " target="_blank" title="units_3_9">SourceForge</a><br />Download sources <a href="http://www.dmitry-kazakov.de/ada/units_3_9.tgz" target="_blank" title="units_3_9.tgz" download="http://www.dmitry-kazakov.de/ada/units_3_9.tgz">units_3_9.tgz</a> from <a href="http://www.dmitry-kazakov.de/ada/units.htm" target="_blank" title="Units of measurement for Ada">Dmitry&rsquo;s Web</a><br /><br />&copy; dmitry-kazakov<br />GPL-2.0-or-later<br /></div><div class="blog-entry-body"><p class="blog-entry-tags">Tags: <a href="tag-physics.php" title="Physics" rel="tag">Physics</a>,<a href="tag-math.php" title="Math" rel="tag">Math</a>,<a href="tag-gtk.php" title="GTK" rel="tag">GTK</a></p></div></div>
	</div>
	
</div>
								
							</section>
            <div id="asidewrap">
                <aside>
								<div id="sidecontent">
									<div id="sideTitle"></div>	
										
									<?php include("sidebar-content.html"); ?>
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
<script src="../../rw_common/assets/global.js"></script>
<div id="rapidweaver_privacy_message">
    <p><span style="font:13px .AppleSystemUIFont; color:#000000;">GDPR compliant</span></p>
    <button id="rapidweaver_privacy_message_dismiss_button">OK</button>
</div>

<script src="../../rw_common/assets/message.js"></script>
<script id="dsq-count-scr" src="//www-adaforge-org.disqus.com/count.js" async></script>
</body>
</html>
