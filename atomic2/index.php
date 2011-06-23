<?php
/**
 * @version		$Id: index.php  $
 * @package		Atomic2 | Karpenter
 * @copyright	(C) 2011 Kontent Design. All rights reserved.
 * @license		GNU General Public License version 2 or later
 */
defined('_JEXEC') or die;

/* The following line loads the MooTools JavaScript Library */
JHtml::_('behavior.framework', true);

/* The following line gets the application object for things like displaying the site name */
$blueprint = $this->params->get('blueprint');
$blueliquid = $this->params->get('blue-liquid');
$bluebuttons = $this->params->get('blue-buttons');
$bluefancy = $this->params->get('blue-fancy');
$bluelinkicons = $this->params->get('blue-linkicons');
$bluertl = $this->params->get('blue-rtl');
//////////////////////////////////////////////////
$bluesilksprite = $this->params->get('blue-silksprite');
$bluetabs = $this->params->get('blue-tabs');
/////////////////////////////////////////////////
$cssprint = $this->params->get('css-print');
$cssscreen = $this->params->get('css-screen');
$cssmobile = $this->params->get('css-mobile');
$cssie = $this->params->get('css-ie');
///////////////////////////////
$css3buttons = $this->params->get('css-buttons');
$csspie = $this->params->get('css-pie');
///////////////////////////////////////
$adapt = $this->params->get('adapt');
$html5shiv = $this->params->get('html5shiv');
$modernizr = $this->params->get('modernizr');
$jslibrary = $this->params->get('jslibrary');
$mootouch = $this->params->get('mootouch');
$lazy = $this->params->get('lazy');
$slideshow = $this->params->get('slideshow');
$tabs = $this->params->get('tabs');
$moodialog = $this->params->get('moodialog');
$milkbox = $this->params->get('milkbox');
$iphonecheck = $this->params->get('iphonecheck');
$moosocialize = $this->params->get('moosocialize');
$powertools = $this->params->get('powertools');
$mochaui = $this->params->get('mochaui');
$moodropmenu = $this->params->get('moodropmenu');
$smartgallery = $this->params->get('smartgallery');
$lazyloader = $this->params->get('lazyloader');
$jscarousel = $this->params->get('jscarousel');
$jqtouch = $this->params->get('jqtouch');
$jqueryui = $this->params->get('jqueryui');
$jqsimpledrop = $this->params->get('jqsimpledrop');
$html5player = $this->params->get('html5player');
$html5playerskin = $this->params->get('html5playerskin');
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$templateparams = $app->getTemplate(true)->params;

//$app = JFactory::getApplication();
if($blueprint="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-screen.css', 'text/css', true);
	if($blueliquid="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-blue-liquid.css', 'text/css', true);
	}
	if($bluebuttons="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-blue-buttons.css', 'text/css', true);
	}
	if($bluefancy="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-blue-fancy.css', 'text/css', true);
	}
	if($bluelinkicons="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-blue-linkicons.css', 'text/css', true);
	}
	if($bluertl="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-rtl.css', 'text/css', true);
	}
	//////////////////////////// ALREADY INCLUDED
	// if($bluesilksprite="1"){
		// $doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-screen.css', 'text/css', true);
	// }
	// if($bluetabs="1"){
		// $doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-screen.css', 'text/css', true);
	// }
	// if($cssscreen="1"){
		// $doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-screen.css', 'text/css', true);
	// }
	// if($css3buttons="1"){
		// $doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-screen.css', 'text/css', true);
	// }
	// if($csspie="1"){
		// $doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-screen.css', 'text/css', true);
	// }
	if($cssprint="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-print.css', 'text/css', true);
	}
	if($cssmobile="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-mobile.css', 'text/css', true);
	}
	if($blueie="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-ie.css', 'text/css', true);
	}
}
////////////////////////////

///////////////////////////////////////////
if ($adapt == "1") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-adapt.js', 'text/javascript', true);    
}
if ($html5shiv == "1") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-html5shiv.js', 'text/javascript', true);    
}
if ($modernizr == "1") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-modernizr.js', 'text/javascript', true);    
}


if ($jslibrary == "mootools") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mootools.js', 'text/javascript', true);  

	if ($mootools-more == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mootools-more.js', 'text/javascript', true);   
	}
	if ($lazy == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-lazy.js', 'text/javascript', true);    
	}
	if ($slideshow == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-slideshow.js', 'text/javascript', true);    
	}
	if ($tabs == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-tabs.js', 'text/javascript', true);    
	}
	if ($mootouch == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mootouch.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-mootouch.css', 'text/css', true);
	}
	if ($moodialog == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-Overlay.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Alert.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Confirm.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Error.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Fx.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.IFrame.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Prompt.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Request.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-MooDialog.css', 'text/css', true);
	}
	if ($milkbox == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-milkbox.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-milkbox.css', 'text/css', true);
	}
	if ($iphonecheck == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-iphone-checkbox.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-iphone-checkbox.css', 'text/css', true);
	}
	if ($moosocialize == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mooSocialize.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-mooSocialize.css', 'text/css', true);
	}
	if ($powertools == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-powertools.js', 'text/javascript', true);   
	}
	if ($mochaui == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/mocha.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Content.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Core.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Dock.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Layout.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Tabs.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Window.css', 'text/css', true);
	}
	if ($moodropmenu == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-moodropmenu.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-moodropmenu.css', 'text/css', true);
	}
	
} elseif ($jslibrary == "jquery") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jquery.js', 'text/javascript', true);
	
	if ($smartgallery == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-smart-gallery.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-smart-gallery.css', 'text/css', true);
	}
	if ($lazyloader == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jq-modern-lazyloader.js', 'text/javascript', true);    
	}
	if ($jscarousel == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jsCarousel.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-jsCarousel.css', 'text/css', true);
	}
	if ($jqtouch == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.css', 'text/css', true);
	}
	if ($jqueryui == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jquery-ui/js/jquery-ui.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jquery-ui/css/ui-lightness/jquery-ui.css', 'text/css', true);
	}
	if ($jqsimpledrop == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-simple-dropdown.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-simple-dropdown.css', 'text/css', true);
	}

}elseif ($jslibrary == "both"){
$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mootools.js', 'text/javascript', true); 
$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jquery.js', 'text/javascript', true);

if ($mootools-more == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mootools-more.js', 'text/javascript', true);   
	}
	if ($lazy == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-lazy.js', 'text/javascript', true);    
	}
	if ($slideshow == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-slideshow.js', 'text/javascript', true);    
	}
	if ($tabs == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-tabs.js', 'text/javascript', true);    
	}
	if ($mootouch == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mootouch.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-mootouch.css', 'text/css', true);
	}
	if ($moodialog == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-Overlay.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Alert.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Confirm.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Error.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Fx.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.IFrame.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Prompt.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-MooDialog.Request.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-MooDialog.css', 'text/css', true);
	}
	if ($milkbox == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-milkbox.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-milkbox.css', 'text/css', true);
	}
	if ($iphonecheck == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-iphone-checkbox.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-iphone-checkbox.css', 'text/css', true);
	}
	if ($moosocialize == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mooSocialize.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-mooSocialize.css', 'text/css', true);
	}
	if ($powertools == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-powertools.js', 'text/javascript', true);   
	}
	if ($mochaui == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/mocha.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Content.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Core.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Dock.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Layout.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Tabs.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/mochaui/build/themes/default/css/Window.css', 'text/css', true);
	}
	if ($moodropmenu == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-moodropmenu.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-moodropmenu.css', 'text/css', true);
	}
	
	if ($smartgallery == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-smart-gallery.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-smart-gallery.css', 'text/css', true);
	}
	if ($lazyloader == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jq-modern-lazyloader.js', 'text/javascript', true);    
	}
	if ($jscarousel == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jsCarousel.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-jsCarousel.css', 'text/css', true);
	}
	if ($jqtouch == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.css', 'text/css', true);
	}
	if ($jqueryui == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jquery-ui/js/jquery-ui.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/jquery/jquery-ui/css/ui-lightness/jquery-ui.css', 'text/css', true);
	}
	if ($jqsimpledrop == "1") {
		$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-simple-dropdown.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-simple-dropdown.css', 'text/css', true);
	}
	
}

if ($mobileesp == "1") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-mdetect.js', 'text/javascript', true);    
}
if ($jqmobile == "1") {
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/karpenter-jquery.mobile.min.js', 'text/javascript', true);
    $doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/css/karpenter-jquery.mobile.min.css', 'text/css', true);
}
if ($html5player == "1") {
	switch($html5playerskin){
		case 'original':
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/video-js.css', 'text/css', true);
		break;
		case 'hu':
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/video-js.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/skins/hu.css', 'text/css', true);
		break;
		case 'tube':
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/video-js.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/skins/tube.css', 'text/css', true);
		break;
		case 'vim':
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/video-js.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/atomic2/karpenter/js/video-js/skins/vim.css', 'text/css', true);
		break;	
	}
    $doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/video-js/video.js', 'text/javascript', true);
	$doc->addScript($this->baseurl . '/templates/atomic2/karpenter/js/video-js/video-instance.js', 'text/javascript', true);
    
}
?>
<?php echo '<?'; ?>xml version="1.0" encoding="<?php echo $this->_charset ?>"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" >
    <head>
        <!-- The following JDOC Head tag loads all the header and meta information from your site config and content. -->
        <jdoc:include type="head" />

        <!-- The following five lines load the Blueprint CSS Framework (http://blueprintcss.org). If you don't want to use this framework, delete these lines. -->
        <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/blueprint/screen.css" type="text/css" media="screen, projection" />
        <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/blueprint/print.css" type="text/css" media="print" />
        <!--[if lt IE 8]><link rel="stylesheet" href="blueprint/ie.css" type="text/css" media="screen, projection"><![endif]-->
        <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/blueprint/plugins/fancy-type/screen.css" type="text/css" media="screen, projection" />
        <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/blueprint/plugins/joomla-nav/screen.css" type="text/css" media="screen" />


        <!-- The following line loads the template CSS file located in the template folder. -->
        <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />

        <!-- The following four lines load the Blueprint CSS Framework and the template CSS file for right-to-left languages. If you don't want to use these, delete these lines. -->
<?php if ($this->direction == 'rtl') : ?>
            <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/blueprint/plugins/rtl/screen.css" type="text/css" />
            <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template_rtl.css" rel="stylesheet" type="text/css" />
<?php endif; ?>

        <!-- The following line loads the template JavaScript file located in the template folder. It's blank by default. -->
        <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/js/template.js"></script>
		<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/karpenter/js/karpenter-noconflict.js"></script>
    </head>
    <body>
        <div class="container">
            <hr class="space" />
            <div class="joomla-header span-16 append-1">
                <h1><?php echo $app->getCfg('sitename'); ?></h1>
            </div>
<?php if ($this->countModules('atomic-search')) : ?>
                <div class="joomla-search span-7 last">
                    <jdoc:include type="modules" name="atomic-search" style="none" />
                </div>
<?php endif; ?>
        </div>
            <?php if ($this->countModules('atomic-topmenu')) : ?>
            <jdoc:include type="modules" name="atomic-topmenu" style="container" />
<?php endif; ?>

        <div class="container">
            <div class="span-16 append-1">
        <?php if ($this->countModules('atomic-topquote')) : ?>
                    <jdoc:include type="modules" name="atomic-topquote" style="none" />
        <?php endif; ?>
                <jdoc:include type="message" />
                <jdoc:include type="component" />
                <hr />
                <?php if ($this->countModules('atomic-bottomleft')) : ?>
                    <div class="span-7 colborder">
                        <jdoc:include type="modules" name="atomic-bottomleft" style="bottommodule" />
                    </div>
<?php endif; ?>

                <?php if ($this->countModules('atomic-bottommiddle')) : ?>
                    <div class="span-7 last">
                        <jdoc:include type="modules" name="atomic-bottommiddle" style="bottommodule" />
                    </div>
                <?php endif; ?>
            </div>
                <?php if ($this->countModules('atomic-sidebar')) : ?>
                <div class="span-7 last">
                    <jdoc:include type="modules" name="atomic-sidebar" style="sidebar" />
                </div>
                <?php endif; ?>
            <?php echo $this->params->get('fieldName'); ?>
            <div class="joomla-footer span-16 append-1">
                <hr />
                &copy;<?php echo date('Y'); ?> <?php echo $app->getCfg('sitename'); ?>
            </div>
        </div>
    </body>
</html>
