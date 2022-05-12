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
	var websiteMeta = {"3268b0cc9203a02f37a4a0c879f61182-52.php":"The objective of UXStrings is Unicode and dynamic length support for \nstrings in Ada. \n\nChanges from last publication: \n\t•\tAda.Strings.UTF_Encoding.Co","archive-may-2022.php":"Archives for May 2022","ab622e9cc46e0505ee30451c75e24b38-38.php":"A quick note to announce the latest release of Excel Writer.\n\nThe changes since last note here are:\n\n15: 23-Apr-2016:\n\t•\tzoom factor for viewing \/ edi","archive-october-2016.php":"Archives for October 2016","2847bb9ddc6e41cea218b16362069009-73.php":"One place to go, AdaForge\nand every thing is on hand!\n\nWe’ve put RTFM direct links on the right side-bar of the home page\n","tag-elv002feq-3-max0021.php":"Posts tagged &ldquo;ELV\/eQ-3 MAX!&rdquo;","tag-regexpr.php":"Posts tagged &ldquo;RegExpr&rdquo;","664fdc73303e4ac66bbd19ca31bafc8d-33.php":"This is GNAT GPL 2016, rebuilt as a cross-compiler from Mac OS X to arm-eabi. \n\nThe CPUs supported include cortex-m3, cortex-m4, cortex-r4.\n\nhttps:\/\/s","21869e3c24bf8b699ed708a59f4ea719-31.php":"Hey guys, I know there are several options for Ada to interface with databases, but I wasn't happy with any of them for various reasons and thus creat","0e80218abc8bd07063c5bddd55e39256-55.php":"\nQOI (the «Quite OK Image Format» ) has been added to the add it to GID, the «Generic Image Decoder» \n\nGID is free, open-source, available on SourceFo","tag--gnat.php":"Posts tagged &ldquo; GNAT&rdquo;","category-compiler.php":"A list of posts in category &ldquo;Compiler&rdquo;","tag-gauge.php":"Posts tagged &ldquo;Gauge&rdquo;","90c7c56940e430a1ea32eb094543a34e-7.php":"AdaControl is a free (GMGPL) tool that detects the use of various kinds of constructs in Ada programs. \nIts first goal is to control proper usage of s","092f01104d568e4f2d07a4a257c30da8-35.php":"GLOBE_3D is a GL Object Based 3D engine realized with the Ada programming language. \n\nLatest additions:\n\t•\tUse of Generic Image Decoder (GID) in GL.IO","tag-persistent.php":"Posts tagged &ldquo;Persistent&rdquo;","tag-osx.php":"Posts tagged &ldquo;OSX&rdquo;","archive-september-2021.php":"Archives for September 2021","tag-cryptography.php":"Posts tagged &ldquo;Cryptography&rdquo;","093cb7a0e9070ce8394ae8f738a85344-12.php":"This is an Ada library currently targeting localization support for Ada (along the lines of Java properties) with supporting message formatting and bu","tag-dashboard.php":"Posts tagged &ldquo;Dashboard&rdquo;","e6a1f2864fb2f2f4ee4d6b6165c3ca90-53.php":"GNAT (FSF) ~ GCC 12.0.1 \n\nCompilers included: Ada, C, C++.\n\nAvailable on Simon’s GitHub, and soon through ALIRE\n\t•\tBuild for Mac M1 : GCC 12.0.1-aarch","archive-july-2015.php":"Archives for July 2015","1c5ebc6807388bb9f7cff99397968dbd-76.php":"PTC announced the release of version 10.3 of its PTC® ObjectAda for Linux and PTC ObjectAda64 for Linux Ada compiler products. \n\nBuilding upon the Ada","tag-freebsd.php":"Posts tagged &ldquo;FreeBSD&rdquo;","tag-3d.php":"Posts tagged &ldquo;3D&rdquo;","tag-doubly-linked-webs-and-lists.php":"Posts tagged &ldquo;Doubly-linked webs and lists&rdquo;","tag-graphs.php":"Posts tagged &ldquo;Graphs&rdquo;","tag-web.php":"Posts tagged &ldquo;Web&rdquo;","90d645e7ddeff49531d3da52e1710b03-67.php":"Simple components is a library addressing:\n\n\t•\tcontainers (maps, sets, unbounded arrays), \n\t•\tIEEE numbers, \n\t•\tlock-free containers (FIFOs, blackboar","category-library.php":"A list of posts in category &ldquo;Library&rdquo;","884068ac933b5d7e44d573c3e4d5b49e-61.php":"GNAT (FSF) ~ GCC 12.0.1 of 20220311\n\nCompilers included: Ada, C, C++.\n\nAvailable on Simon’s GitHub, and soon through ALIRE\n\t•\tBuild for Mac INTEL : GC","category-humor.php":"A list of posts in category &ldquo;Humor&rdquo;","4cedce6e4fc4af64dcf02a55fd8f30c7-48.php":"AdaControl is a free (GMGPL) tool that detects the use of various kinds of constructs in Ada programs.\n\nIts first goal is to control proper usage of s","a5028fd379ccb7aee611e12b450c6fad-13.php":"The new packages are on AUR4.\n","tag-streams.php":"Posts tagged &ldquo;Streams&rdquo;","7a4ac44684893632ee14e6b0587c3c64-54.php":"GWindows is a full Microsoft Windows Rapid Application Development framework for programming GUIs (Graphical User Interfaces) with Ada. \n\nGWindows wor","c273ceb441f649b134fb8e319e8cc260-21.php":"Buffered, Memory and Time stream handling.\n\nNew in this release:\n\t•\tAdded send_socket for better integration with gnat_socket.\n\t•\tAdded the capability","tag-sets.php":"Posts tagged &ldquo;Sets&rdquo;","14cbdcc085e5dc7f925e409a9b44e910-36.php":"This is GCC 6.1.0 built for Mac OS X El Capitan (10.11.4, Darwin 15.4.0), with the Command Line Tools for Xcode 7.\n\nCompilers included: Ada, C, C++, O","tag-parser.php":"Posts tagged &ldquo;Parser&rdquo;","deef5c6ca812855625106adba30c4a7d-64.php":"GNOGA is a framework for building portable apps:\n\n\t•\tCommunication platform between the Ada code and the browser \/ native\n\t•\tBinding to the HTML5 DOM ","tag-spark.php":"Posts tagged &ldquo;SPARK&rdquo;","61190a96227476afe57e73c7cbecfc75-60.php":"\nGNAT (FSF) ~ GCC 12.0.1 of 20220128 (only Ada, C, C++, built on Mac OS-X El Capitan, runs up to macOS 12 Monterey).\n\nCompilers included: Ada, C, C++.","f367ea43e6241fda8dd8c05c13e25f6b-27.php":"I created a set of thick bindings against the recent v0.8.0 version.  Those cover the stable API (basic compression \/ decompression and use of diction","category-binding.php":"A list of posts in category &ldquo;Binding&rdquo;","archive-august-2016.php":"Archives for August 2016","606f2c0aadf7b34fb41e630e74242e2a-71.php":"You will find a very clever way to handle the license bla-bla 🥸\n\nRush to our FOSS Licenses page \n","archive-february-2016.php":"Archives for February 2016","49952cb7ea77feb331c68b9ddf4ef581-45.php":"I'm making public my ASN.1 project which aims to be a verified implementation of ASN.1, which is used in security-certificates, which is hopefully the","tag-gtk.php":"Posts tagged &ldquo;GTK&rdquo;","tag-arm.php":"Posts tagged &ldquo;ARM&rdquo;","category-ada-forge.php":"A list of posts in category &ldquo;Ada Forge&rdquo;","tag-widgets.php":"Posts tagged &ldquo;Widgets&rdquo;","1157ac5b7ede45c75ed9e24f8b7608b8-11.php":"The library is provided for design high-quality industrial control widgets\nfor Ada applications. The software is based on GtkAda, Ada bindings to GTK+","archive-march-2022.php":"Archives for March 2022","tag-modbus.php":"Posts tagged &ldquo;MODBUS&rdquo;","c40519cb7d7eeafad65faddfdf5c9b67-41.php":"This release includes GNAT Ada Run Time Systems (RTSs) based on FreeRTOS (http:\/\/www.freertos.org) and targeted at boards with Cortex-M3, -M4, -M4F MC","tag-rts.php":"Posts tagged &ldquo;RTS&rdquo;","7786bb14e48da1ba150867ee0aa23470-26.php":"The changes since the last release are:\n\t•\tAdded a new utility zbinfo to query built-in data. This was released as an example previously (the dumploca","category-contribution.php":"A list of posts in category &ldquo;Contribution&rdquo;","category-tech-library.php":"A list of posts in category &ldquo;Tech Library&rdquo;","tag-macos.php":"Posts tagged &ldquo;MacOS&rdquo;","tag-windows.php":"Posts tagged &ldquo;Windows&rdquo;","2a4707c79cc8b4d023f1bf15b884689a-42.php":"AZip is a Zip archive manager. \n\nThe latest addition is an archive recompression tool.\n\nhttp:\/\/azip.sf.net\/\n\nFrom Gautier\n","tag-blackboards.php":"Posts tagged &ldquo;Blackboards&rdquo;","tag-storage-pools.php":"Posts tagged &ldquo;storage pools&rdquo;","tag-events.php":"Posts tagged &ldquo;Events&rdquo;","archive-february-2022.php":"Archives for February 2022","category-license.php":"A list of posts in category &ldquo;License&rdquo;","tag-fifo.php":"Posts tagged &ldquo;FIFO&rdquo;","tag-chebyshev-series.php":"Posts tagged &ldquo;Chebyshev series&rdquo;","171d4757c87574134da36d19af123053-24.php":"It deals with the following issues:\n\n- Tasking support;\n- Custom models for tree view widget;\n- Custom cell renderers for tree view widget;\n- Multi-co","a635f23df9ab9bf51b93659b2be59d4f-70.php":"\nKey features:\n\n\t•\tThe type Unit denotes the dimension of a physical entity. The type Measure represents a dimensioned value;\n\t•\tMixed unit arithmetic","archive-april-2022.php":"Archives for April 2022","tag-sql.php":"Posts tagged &ldquo;SQL&rdquo;","archive-march-2016.php":"Archives for March 2016","96563b966a2c676daeb440901ec993b8-19.php":"The GNAT-to-Android\/ARM cross-compiler known as GnatDroid-ARMv7 has been available on FreeBSD and DragonFly since even before it was officially suppor","tag-javascript.php":"Posts tagged &ldquo;JavaScript&rdquo;","d91b6cbf986c709225bf5ba8f6f30b5f-75.php":"PTC announced the release of version 10.3 of ObjectAda for Windows and PTC ObjectAda64 for Windows Ada compiler products. \n\nThis new release provides ","tag-opengis.php":"Posts tagged &ldquo;OpenGIS&rdquo;","category-paper.php":"A list of posts in category &ldquo;Paper&rdquo;","tag-iot.php":"Posts tagged &ldquo;IoT&rdquo;","tag-gcc.php":"Posts tagged &ldquo;GCC&rdquo;","825784bb906fb2925f83ccf3206fb7d1-6.php":"William Franck did a 3D design of the (2D) Lay Ada Coin, winner of the 2001-2002 Ada-Belgium Programming Contest.\n\n￼\n","tag-spatial-data.php":"Posts tagged &ldquo;Spatial data&rdquo;","ccd3dab2dd875714e35bd21ef06a4c8e-34.php":"Now the entire FreeBSD Ports Ada framework is available on this soon-to-be-tier-1 platform.  The existing gcc6-aux port (http:\/\/www.freshports.org\/lan","4ed90bba4e1688deb9ebf849881936d0-65.php":"Fuzzy machine learning framework is a library and a GUI front-end for machine learning using intuitionistic fuzzy data. \n\nChanges in the version 1.10\n","5f7fe5c25ae16f0f5f9013d903605262-72.php":"Thematics about designing or using Ada Software Libraries\n\nInterested ? \n\nContribute to the MD page on our GitHub\n\nIt is back on a MarkDown formatted ","archive-november-2016.php":"Archives for November 2016","tag-sqlite.php":"Posts tagged &ldquo;SQLite&rdquo;","5cab0e8ecf5cfecaf9f08c3e57580edb-56.php":"HAC (HAC Ada Compiler) is a small, quick, open-source Ada compiler, covering a subset of the Ada language.\n\nHAC is itself fully programmed in Ada.\n\nMa","tag-maps.php":"Posts tagged &ldquo;Maps&rdquo;","70b40356d79be909ca28d1e5f5c67847-20.php":"Changes to the previous version:\n\n\t•\tELV\/e-Q3 MAX! client protocol implementation corrected;\n\t•\tELV\/e-Q3 MAX! client supports reading measured tempera","c0f4970b82f198d94b82e96668df5180-0.php":"Gnoga uses modern web technologies to allow simple creation of cross platform GUIs for Ada with native or custom look and feels that perform on par to","archive-january-2022.php":"Archives for January 2022","tag-l10n.php":"Posts tagged &ldquo;l10n&rdquo;","8daf0e69d05e40002bf92fa332df8786-50.php":"I’ve the pleasure to announce a ground-up update of AdaForge.org\n\nThe purpose of this site is to bring to the Ada developer a catalog of (almost) all ","archive-april-2016.php":"Archives for April 2016","f2b6994b600a888b2a44c66819108f8c-29.php":"These bindings are thick and I've committed the testcases I was using to serve as examples.  They cover the most of the functionality of libsodium, bu","tag-arduino.php":"Posts tagged &ldquo;Arduino&rdquo;","5009bd9639cfa7641c70c234e01fbd96-25.php":"Changes in '52', 08-Oct-2016:\n\t•\tUnZip.Streams: all procedures have an additional (optional) Ignore_Directory parameter.\n\t•\tZip.Compress has the follo","6be717a919d71282b82c5658d55100ef-17.php":"This is GCC 5.2.1 for arm-eabi from GCC ARM Launchpad, tested on\nthe Cortex-M3 as found on the Arduino Due and the Cortex-M4 as\nfound on the STMicroel","tag-mutexes.php":"Posts tagged &ldquo;Mutexes&rdquo;","tag-postgresql.php":"Posts tagged &ldquo;PostgreSQL&rdquo;","d97d4ed384789a6e99794fe1db1645cb-32.php":"Imago is a thin binding to DevIL - Developers' Image Library (which is a library that supports working with most image formats). \n\nhttps:\/\/github.com\/","archive-september-2015.php":"Archives for September 2015","tag-cortex.php":"Posts tagged &ldquo;Cortex&rdquo;","archive-january-2015.php":"Archives for January 2015","19636a78cb88779bffcfb56ae80ba7de-40.php":"Deepend is a set of storage pools for Ada 95, Ada 2005, and Ada 2012 that includes subpool capabilities. Groups of memory allocations from a storage p","archive-may-2016.php":"Archives for May 2016","tag-physics.php":"Posts tagged &ldquo;Physics&rdquo;","e35c744dde388a7c4f66c6dacc33f61f-37.php":"This is GCC 6.1.0, rebuilt as a cross-compiler from Mac OS X to arm-eabi specifically,\n\t•\tthe Cortex-M3 as found on the Arduino Due\n\t•\tthe Cortex-M4 a","tag-ada-style.php":"Posts tagged &ldquo;Ada Style&rdquo;","tag-pools.php":"Posts tagged &ldquo;Pools&rdquo;","3a3ae15323e942de7f755e75780e6ef9-18.php":"There's not a lot of added Ada goodness compared to 5.1.0, but the El\nCapitan-related problem that David Botton recently encountered is fixed.\n\nIf you","0b5415722f88dede9b122c15edb57991-4.php":"Development version of Matreshka provides server-independent implementation of well known Servlet API and web-application server Spikedog to execute A","050563826252ae469020fe1edba30efd-39.php":"(Buffers of many shapes and sizes)\n\nDequesterity is a set of Ada 2005 generics that provide various forms of general purpose buffer containers.\nBuffer","24b816fa2b7025a7192910a635992334-69.php":"\nChanges to the version 3.29 :\n\n\t•\tCompatibility functions Get_Iter_At_Location and Get_Iter_At_Position were added to the package Gtk.Missed. \n\t•\tThe","archive-january-2016.php":"Archives for January 2016","95ba966b02bf0a4189d9a689868ea25d-46.php":"Latest changes are:\n\t•\tISO Latin-1 character support\n\t•\tImage dimensions can be queried (useful before inserting them!)\n\t•\tAdded tool: img2pdf\n\t•\tImpr","tag-buffers.php":"Posts tagged &ldquo;Buffers&rdquo;","tag-http.php":"Posts tagged &ldquo;HTTP&rdquo;","29d84545ce729f4cfc6916a0e0411242-8.php":"Qt5Ada is a Ada-2012 port to Qt5 framework (based on Qt 5.5.0 final)\n\nThis project uses a proprietary layer. It is not completely open source. (Ref Da","3ba0e7b4c426f84dc862aa569e02e32c-3.php":"Development version of Matreshka provides Ada to JavaScript translator and run-time library to run Ada applications in Web browsers and other JavaScri","category-social.php":"A list of posts in category &ldquo;Social&rdquo;","tag-pdf.php":"Posts tagged &ldquo;PDF&rdquo;","a6378e5c501efb14384230e8851fd026-47.php":"AdaControl is a free (GMGPL) tool that detects the use of various kinds of constructs in Ada programs.\n\nIts first goal is to control proper usage of s","tag-ml.php":"Posts tagged &ldquo;ML&rdquo;","tag-quality-code.php":"Posts tagged &ldquo;Quality Code&rdquo;","archive-december-2021.php":"Archives for December 2021","2a3883c2faf8ba39f35b95261fd71947-49.php":"AdaDep\nAn ASIS-based application to help you understand what uses what in your projects; very useful in reorganizing packages. AdaDep tells, for each ","tag-g11n.php":"Posts tagged &ldquo;g11n&rdquo;","aa1f76e376de2fd34b288423e159a77f-23.php":"Changes to the previous version:\n\t•\tModbus TCP client bug fixed. The bug prevented receiving large responses, more than 60 words, e.g. to FC3 (read ho","d12e42accc176fff89a3562c2b93efb5-10.php":"The library extends GtkAda 3.8.3\/4.\n\nhttp:\/\/www.dmitry-kazakov.de\/ada\/gtkada_contributions.htm\n\n","tag-tcp.php":"Posts tagged &ldquo;TCP&rdquo;","72d029dd42d1dda293ced93099b935db-15.php":"The Muen Separation Kernel is the world’s first Open Source microkernel that has been formally proven to contain no runtime errors at the source code ","tag-industrial.php":"Posts tagged &ldquo;Industrial&rdquo;","category-tools.php":"A list of posts in category &ldquo;Tools&rdquo;","tag-home.php":"Posts tagged &ldquo;Home&rdquo;","tag-gnat.php":"Posts tagged &ldquo;GNAT&rdquo;","86918877c3e73ffbb74b95bc78a4e474-77.php":"GNAT (FSF) ~ GCC 12.1.0, X86_64 build.\n\nCompilers included: Ada, C, C++.\n\nAvailable on Simon’s GitHub, and soon through ALIRE\n\t•\tSee the release page ","tag-strings.php":"Posts tagged &ldquo;Strings&rdquo;","tag-stacks.php":"Posts tagged &ldquo;Stacks&rdquo;","tag-globalization.php":"Posts tagged &ldquo;Globalization&rdquo;","41ab411ee45f251949716e78f04b58e6-28.php":"Thick bindings for the Linux joystick API are available at: https:\/\/github.com\/alkhimey\/Ada_Joystick \n\nFrom Artium\n\n","archive-august-2021.php":"Archives for August 2021","category-framework.php":"A list of posts in category &ldquo;Framework&rdquo;","archive-march-2017.php":"Archives for March 2017","14a04055e0ab5c726e891fa4d3fe4081-5.php":"How does Ada 2012 compare to the most popular or modern programming languages ?\n\t•\tC-Sharp 2015\n\t•\tJava 8\n\t•\tJavaScript 5\n\t•\tScala 2.9\n\t•\tSwift 2.1\n\nE","000e18e216f8213c9251df498cc74bdd-57.php":"Dokan is a Windows 32- and 64-bit user-space file system, similar to FUSE.\nDokan is implemented in  in C\/C++.\nThe driver routes the I\/O requests to th","archive-june-2016.php":"Archives for June 2016","0e4c46953c19379062172e129efd8416-58.php":"Adare_net is a small, portable and easy to use Ada network lib. \nIt supports ipv4 ipv6 udp and tcp, and can 'listen' with ipv6, too. \nSocket Synchrono","archive-november-2015.php":"Archives for November 2015","8f13744be838d4731bbd5099e2a32555-62.php":"\nBased on Qt-6.3.0-everywhere opensource \n\nbuilt with \n\t•\tMicrosoft Visual Studio 2019 x64 Windows\n\t•\tgcc amd64 in Linux\n\nPackage tested with \n\t•\tgnat","3fe9b600b2b7c8081ea709cade41d1f1-43.php":"The Adequate project provides command line clients for the MQTT protocol. All the hard work is provided by Dmitry Kazakov's Components. \nAmong them is","category-tool.php":"A list of posts in category &ldquo;Tool&rdquo;","tag-network.php":"Posts tagged &ldquo;Network&rdquo;","tag-image.php":"Posts tagged &ldquo;Image&rdquo;","a976ba6215fc8e3a0b2c834c5a29f5da-9.php":"The current version provides implementations of smart pointers, directed\ngraphs, sets, maps, B-trees, stacks, tables, string editing, unbounded\narrays","tag-b-trees.php":"Posts tagged &ldquo;B-trees&rdquo;","6ea470c775774350d81dfaa1c7da7c57-14.php":"This is XNAdaLib 2015 built on MacOS 10.9 Mavericks for Native Quartz including:\n\t•\tGTK Ada GPL 2015 with GTK+ 3.16.0 complete,\n\t•\tGlade 3.18.3,\n\t•\tGn","72377b83303f293a180da14ed9332080-59.php":"\nAdaControl is a free (GMGPL) tool that detects the use of various kinds of constructs in Ada programs. \n\nIts first goal is to control proper usage of","c6792da119ee4f2011bd48c73483b2f5-16.php":"This is a full Ada library from Per Sandberg for controlling the LIFX smart bulbs.\nSee project on GitHub.","375eef2f7cb297bece84c6a0ea0a649d-2.php":"We are pleased to announce new major release of Matreshka. See Release Notes for more information and visit Download to download source code and binar","archive-july-2016.php":"Archives for July 2016","tag-qt.php":"Posts tagged &ldquo;QT&rdquo;","tag-odbc.php":"Posts tagged &ldquo;ODBC&rdquo;","68aa6fddb835802220ba9787c9057eee-74.php":"\nImpressive Ada source code plugin for popular VS Code - Microsoft Visual Studio Code editor.\n\nCurrent features:\n\t•\tGNAT project files support.\n\t•\tCod","tag-spark2014.php":"Posts tagged &ldquo;SPARK2014&rdquo;","tag-mqtt.php":"Posts tagged &ldquo;MQTT&rdquo;","cc02632770fc6f38b1ac00d28ea0c8bc-66.php":"MAX home automation is a GTK+ application to manage ELV\/eQ-3 MAX! cubes. \n\nA cube is a gateway to a network of radiator thermostats, shutter contacts ","archive-october-2021.php":"Archives for October 2021","tag-excel.php":"Posts tagged &ldquo;Excel&rdquo;","tag-automation.php":"Posts tagged &ldquo;Automation&rdquo;","tag-database.php":"Posts tagged &ldquo;Database&rdquo;","cc58256855cb5025a3996d384c6da364-22.php":"Changes to the previous version:\n\t•\tMinor changes improving performance;\n\t•\tWaveform sweeper interface is enhanced to suppress the \"draw\" signal flood","3fa1b7abc77cbf5b347f1bf3e4b8b956-44.php":"I had intended that release 3.1 of AdaBase be a quick improvement that would add three new native data types:\n\t1\tBit type (like bit flags)\n\t2\tUTF8 enc","archive-may-2015.php":"Archives for May 2015","tag-compression.php":"Posts tagged &ldquo;Compression&rdquo;","tag-rtfm.php":"Posts tagged &ldquo;RTFM&rdquo;","category-app-library.php":"A list of posts in category &ldquo;App Library&rdquo;","tag-sources-editor.php":"Posts tagged &ldquo;Sources Editor&rdquo;","tag-gnutls.php":"Posts tagged &ldquo;GNUTLS&rdquo;","e4539482671563181b9397efe90ffa97-51.php":"Adaforge has now his own Twitter account !\n\n@AdaForge2022 is labelled «AdaForge for Ada programmers»\nand described as\n« #Ada2022 Software & Tools for ","e0fbf66e17d4118737c3726106d77511-68.php":"\nChanges to this version 5.15 : \n\n\t•\tGNAT Studio Community 2021 bugs worked around; \n\t•\tGTK 3.24.x support\n\n\nSee Dmitry’s Web page for details\n\nDownlo","tag-localization.php":"Posts tagged &ldquo;localization&rdquo;","tag-quartz.php":"Posts tagged &ldquo;Quartz&rdquo;","archive-october-2015.php":"Archives for October 2015","archive-february-2017.php":"Archives for February 2017","tag-linux.php":"Posts tagged &ldquo;Linux&rdquo;","tag-math.php":"Posts tagged &ldquo;Math&rdquo;","tag-mysql.php":"Posts tagged &ldquo;MySQL&rdquo;","tag-ieee-754.php":"Posts tagged &ldquo;IEEE 754&rdquo;","38d0ac3ffb5d34a9c72ceb1882860af0-30.php":"SymExpr is a generic Ada package that allow you some manipulation of \"symbolic expressions.\"\n\nhttps:\/\/launchpad.net\/symexpr\/+download\n\nFrom Riccardo B"};
 
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