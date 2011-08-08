<?php
/**
 * @version		$Id: index.php  $
 * @package		'.$this->template.' | Karpenter
 * @copyright	(C) 2011 Kontent Design. All rights reserved.
 * @license		GNU General Public License version 2 or later
 */
defined('_JEXEC') or die;

/* Load template parameters */

/* Blueprint */
$blueprint = $this->params->get('blueprint');
$blueliquid = $this->params->get('blue-liquid');
$bluebuttons = $this->params->get('blue-buttons');
$bluefancy = $this->params->get('blue-fancy');
$bluelinkicons = $this->params->get('blue-linkicons');
$bluesilksprite = $this->params->get('blue-silksprite');
$bluetabs = $this->params->get('blue-tabs');
$bluertl = $this->params->get('blue-rtl');

/* Other CSS */
$cssbasic = $this->params->get('css-basic');
$cssreset = $this->params->get('cssreset');
$cssprint = $this->params->get('css-print');
$cssscreen = $this->params->get('css-screen');
$cssmobile = $this->params->get('css-mobile');
$cssie = $this->params->get('css-ie');
$css3buttons = $this->params->get('css3-buttons');
$csspie = $this->params->get('css-pie');

/* MooTools & jQuery */
$jslibrary = $this->params->get('jslibrary');
//$mootoolsmore = $this->params->get('mootools-more');
$captionjs = $this->params->get('captionjs');
$corejs = $this->params->get('corejs');
$lazy = $this->params->get('lazy');
$slideshow = $this->params->get('slideshow');
$tabs = $this->params->get('tabs');
$moodialog = $this->params->get('moodialog');
$mootips = $this->params->get('mootips');
$milkbox = $this->params->get('milkbox');
$powertools = $this->params->get('powertools');
$moodropmenu = $this->params->get('moodropmenu');
$smartgallery = $this->params->get('smartgallery');
$lazyloader = $this->params->get('lazyloader');
$jscarousel = $this->params->get('jscarousel');
$jqsimpledrop = $this->params->get('jqsimpledrop');
$which_mootools = $this->params->get('which_mootools');
$which_mootools_more = $this->params->get('which_mootools_more');

/* Other JavaScript */
$html5shiv = $this->params->get('html5shiv');
$modernizr = $this->params->get('modernizr');
$karpenterjs = $this->params->get('karpenterjs');
$ligature = $this->params->get('ligature');

/* Mobile */
$html5boilerplate = $this->params->get('html5boilerplate');
$mjslibrary = $this->params->get('mjslibrary');
$mobileesp = $this->params->get('mobileesp');
$iphonecheck = $this->params->get('iphonecheck');

/* Media */
$html5player = $this->params->get('html5player');
$html5playerskin = $this->params->get('html5playerskin');

/* UI */
$uilibrary = $this->params->get('uilibrary');

/* Fonts */
$fonts=array();
$arvo=$this->params->get('arvo');
$bentham=$this->params->get('bentham');
$crimson=$this->params->get('crimson');
$garamond=$this->params->get('garamond');
$goudy=$this->params->get('goudy');
$josefinslab=$this->params->get('josefinslab');
$kameron=$this->params->get('kameron');
$nixieone=$this->params->get('nixieone');
$anonymouspro=$this->params->get('anonymouspro');
$lobstertwo=$this->params->get('lobstertwo');
$lora=$this->params->get('lora');
$mavenpro=$this->params->get('mavenpro');
$opensans=$this->params->get('opensans');
$puritan=$this->params->get('puritan');
$raleway=$this->params->get('raleway');
$redressed=$this->params->get('redressed');
$dancingscript=$this->params->get('dancingscript');
$dawning=$this->params->get('dawning');
$labelleaurore=$this->params->get('labelleaurore');
$lobster=$this->params->get('lobster');
$carterone=$this->params->get('carterone');
$fontdiner=$this->params->get('fontdiner');
$holtwood=$this->params->get('holtwood');
$slackey=$this->params->get('slackey');

$jsForRemove = array();

/* The following line gets the application object for things like displaying the site name */
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$templateparams = $app->getTemplate(true)->params;

/* This function is used to check whether browser is IE or not */
function using_ie(){
    $u_agent = $_SERVER['HTTP_USER_AGENT'];
    $ub = false;
    if(preg_match('/MSIE/i',$u_agent)){
        $ub = true;
    }
    return $ub;
}

/*----------------------- CSS -----------------------*/

if($blueprint=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue.css', 'text/css', "all");
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-joomlanav.css', 'text/css', "all");
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-screen.css', 'text/css', "screen");
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-print.css', 'text/css', "print");
	
	if($blueliquid=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-liquid.css', 'text/css', "all");
	}
	if($bluebuttons=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-buttons.css', 'text/css', "all");
	}
	if($bluefancy=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-fancy.css', 'text/css', "all");
	}
	if($bluelinkicons=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-linkicons.css', 'text/css', "all");
	}
	if($bluesilksprite=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-silksprite.css', 'text/css', "all");
	}
	if($bluetabs=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-tabs.css', 'text/css', "all");
	}
	if($bluertl=="1"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-rtl.css', 'text/css', "all");
	}
	if (using_ie()){
 		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-blue-ie.css', 'text/css', "all");
	}
} else {
	/* Resets should only be used if Blueprint isn't active. */
	if($cssreset=="meyersreset"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-reset.css', 'text/css', "all");
	}
	if($cssreset=="normalize"){
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-normalize.css', 'text/css', "all");
	}
}
if($css3buttons=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-css3-buttons.css', 'text/css', "all");
}
if($csssbasic=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter.css', 'text/css', "all");
}
if($cssscreen=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-screen.css', 'text/css', "screen");
}
if($cssprint=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-print.css', 'text/css', "print");
}
if($cssmobile=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-mobile.css', 'text/css', "all");
}
if($cssie=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-ie.css', 'text/css', "all");
}

/*----------------------- JavaScript -----------------------*/

if($csspie=="1"){
	$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-pie.js', 'text/javascript', true);
}

if ($modernizr == "1") {
    $doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-modernizr.js', 'text/javascript', true);    
} else {
	/* Prevent conflict between these two. */
	if ($html5shiv == "1") {
    	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-html5shiv.js', 'text/javascript', true);    
	}
}

if ($jslibrary == "mootools") {
	
	if (!$captionjs)
	   $jsForRemove[] = '/caption.js';	# added by LAB;
	
	if ($which_mootools == 'custom')
	{
		$jsForRemove[] = '/mootools-core.js';
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootools.js', 'text/javascript', true);    
	}
	
	# MooTools More Inclusion;
	if ($which_mootools_more == 'joomla')
		$doc->addScript($this->baseurl . '/media/system/js/mootools-more.js', 'text/javascript', true);   
	elseif ($which_mootools_more == 'custom')
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootools-more.js', 'text/javascript', true);   
	else
		$jsForRemove[] = '/mootools-more.js';
		
	if ($lazy == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-lazy.js', 'text/javascript', true);    
	}
	if ($slideshow == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-slideshow.js', 'text/javascript', true); 
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-navigation.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-declarative.js', 'text/javascript', true);
	}
	if ($tabs == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-tabs.js', 'text/javascript', true);    
	}
	if ($moodialog == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-Overlay.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Alert.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Confirm.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Error.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Fx.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.IFrame.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Prompt.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Request.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-MooDialog.css', 'text/css', "all");
	}
	if ($milkbox == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-milkbox-yc.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-milkbox-default.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-milkbox-main.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-milkbox.css', 'text/css', "all");
	}
	if ($iphonecheck == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-iphone-checkbox.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-iphone-checkbox.css', 'text/css', "all");
	}
	if ($powertools == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-powertools.js', 'text/javascript', true);   
	}
	if ($uilibrary == "mochaui") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/mocha.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Content.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Core.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Dock.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Layout.css', 'text/css', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Tabs.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Window.css', 'text/css', "all");
	}
	if ($moodropmenu == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-moodropmenu.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-moodropmenu.css', 'text/css', "all");
	}
	if ($mjslibrary == "mootouch") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootouch.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-mootouch.css', 'text/css', "all");
	}
	if ($mootips == "1") {
		JHTML::_('behavior.tooltip'); 
	}
} elseif ($jslibrary == "jquery") {
		$jsForRemove[] = '/mootools-core.js';	# added by LAB;
		$jsForRemove[] = '/caption.js';	# added by LAB; caption.js is only loaded if MooTools Core is loaded.
		$jsForRemove[] = '/core.js';	# added by LAB; core.js is only loaded if MooTools Core is loaded.
    	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jquery.js', 'text/javascript', true);
	
	if ($html5boilerplate == "1" && $modernizr=="1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/js/script.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/js/plugins.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/js/dd_belatedpng.js', 'text/javascript', true);		
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/css/style.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/css/handheld.css', 'text/css',"all");
	}	
	if ($smartgallery == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-smart-gallery.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-smart-gallery.css', 'text/css', "all");
	}
	if ($lazyloader == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jq-modern-lazyloader.js', 'text/javascript', true);    
	}
	if ($jscarousel == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jsCarousel.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-jsCarousel.css', 'text/css', "all");
	}
	if ($jqsimpledrop == "1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-simple-dropdown.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-simple-dropdown.css', 'text/css', "all");
	}	
	if ($uilibrary == "jqueryui") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jquery-ui/js/jquery-ui.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jquery-ui/css/ui-lightness/jquery-ui.css', 'text/css',"all");
	}
	if ($mjslibrary == "jqtouch") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.css', 'text/css',"all");
	}
	if ($mjslibrary == "jqmobile") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jquery.mobile.js', 'text/javascript', true);
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-jquery.mobile.css', 'text/css', "all");
	}
	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-noconflict.js', 'text/javascript', true);
	
} elseif ($jslibrary == "both") {
	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jquery.js', 'text/javascript', true);
	
	if (!$captionjs){
		$jsForRemove[] = '/caption.js';
	}
	if ($which_mootools == 'custom'){
		$jsForRemove[] = '/mootools-core.js';
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootools.js', 'text/javascript', true);    
	}
	if ($html5boilerplate == "1" && $modernizr=="1") {
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/js/plugins.js', 'text/javascript', true);
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/js/dd_belatedpng.js', 'text/javascript', true);		
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/css/style.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/html5-boilerplate/css/handheld.css', 'text/css',"all");
	}
	
	# MooTools More Inclusion;
	if ($which_mootools_more == 'joomla')
		$doc->addScript($this->baseurl . '/media/system/js/mootools-more.js', 'text/javascript', true);   
	elseif ($which_mootools_more == 'custom')
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootools-more.js', 'text/javascript', true);   
	else
		$jsForRemove[] = '/mootools-more.js';
		
		if ($lazy == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-lazy.js', 'text/javascript', true);    
		}
		if ($slideshow == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-slideshow.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-navigation.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-declarative.js', 'text/javascript', true);
		}
		if ($tabs == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-tabs.js', 'text/javascript', true);    
		}
		if ($mjslibrary == "mootouch") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootouch.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-mootouch.css', 'text/css', true);
		}
		if ($moodialog == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-Overlay.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Alert.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Confirm.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Error.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Fx.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.IFrame.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Prompt.js', 'text/javascript', true);
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-MooDialog.Request.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-MooDialog.css', 'text/css', "all");
		}
		if ($milkbox == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-milkbox-yc.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-milkbox.css', 'text/css', "all");
		}
		if ($iphonecheck == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-iphone-checkbox.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-iphone-checkbox.css', 'text/css', "all");
		}
		if ($powertools == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-powertools.js', 'text/javascript', true);   
		}
		if ($uilibrary == "mochaui") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/mocha.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Content.css', 'text/css', "all");
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Core.css', 'text/css', "all");
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Dock.css', 'text/css', "all");
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Layout.css', 'text/css', "all");
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Tabs.css', 'text/css', "all");
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/mochaui/build/themes/default/css/Window.css', 'text/css', "all");
		}
		if ($moodropmenu == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-moodropmenu.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-moodropmenu.css', 'text/css', "all");
		}
		if ($mootips == "1") {
			JHTML::_('behavior.tooltip'); 
		}
		if ($smartgallery == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-smart-gallery.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-smart-gallery.css', 'text/css',"all");
		}
		if ($lazyloader == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jq-modern-lazyloader.js', 'text/javascript', true);    
		}
		if ($jscarousel == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jsCarousel.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-jsCarousel.css', 'text/css', "all");
		}
		if ($uilibrary == "jqueryui") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jquery-ui/js/jquery-ui.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jquery-ui/css/ui-lightness/jquery-ui.css', 'text/css', "all");
		}
		if ($jqsimpledrop == "1") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-simple-dropdown.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-simple-dropdown.css', 'text/css', "all");
		}
		if ($mjslibrary == "jqtouch") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.css', 'text/css', "all");
		}
		if ($uilibrary == "jqueryui") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jquery-ui/js/jquery-ui.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jquery-ui/css/ui-lightness/jquery-ui.css', 'text/css', "all");
		}
		if ($mjslibrary == "mootouch") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mootouch.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-mootouch.css', 'text/css', "all");
		}
		if ($mjslibrary == "jqtouch") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/jquery/jQTouch/jqtouch/jqtouch.css', 'text/css', "all");
		}
		if ($mjslibrary == "jqmobile") {
			$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-jquery.mobile.js', 'text/javascript', true);
			$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/css/karpenter-jquery.mobile.css', 'text/css', "all");
		}
		$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-noconflict.js', 'text/javascript', true);
}
elseif ($jslibrary == "none") {
	$jsForRemove[] = '/mootools-core.js';
	$jsForRemove[] = '/caption.js';
	$jsForRemove[] = '/core.js';
}
if (!$corejs){
	$jsForRemove[] = '/core.js';
}
if ($ligature == "1") {
	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-ligature.js', 'text/javascript', true);    
}
if ($karpenterjs == "1") {
	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter.js', 'text/javascript', true);    
}
		
/*----------------------- Mobile -----------------------*/

if ($mobileesp == "1") {
    $doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/karpenter-mdetect.js', 'text/javascript', true);    
}

/*----------------------- Media -----------------------*/

if ($html5player == "1") {
	switch($html5playerskin){
		case 'original':
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/video-js.css', 'text/css', "all");
		break;
		case 'hu':
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/video-js.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/skins/hu.css', 'text/css', "all");
		break;
		case 'tube':
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/video-js.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/skins/tube.css', 'text/css', "all");
		break;
		case 'vim':
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/video-js.css', 'text/css', "all");
		$doc->addStyleSheet($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/skins/vim.css', 'text/css', "all");
		break;	
	}
    $doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/video.js', 'text/javascript', true);
	$doc->addScript($this->baseurl . '/templates/'.$this->template.'/karpenter/js/video-js/video-instance.js', 'text/javascript', true);
}

/*----------------------- Fonts -----------------------*/
if($arvo=="1"){array_push($fonts, "Arvo");}
if($bentham=="1"){array_push($fonts, "Bentham");}
if($crimson=="1"){array_push($fonts, "Crimson Text");}
if($garamond=="1"){array_push($fonts, "EB Garamond");}
if($goudy=="1"){array_push($fonts, "Goudy Bookletter 1911");}
if($josefinslab=="1"){array_push($fonts, "Josefin Slab");}
if($kameron=="1"){array_push($fonts, "Kameron");}
if($nixieone=="1"){array_push($fonts, "Nixie One");}
if($anonymouspro=="1"){array_push($fonts, "Anonymous Pro");}
if($lobstertwo=="1"){array_push($fonts, "Lobster Two");}
if($lora=="1"){array_push($fonts, "Lora");}
if($mavenpro=="1"){array_push($fonts, "Maven Pro");}
if($opensans=="1"){array_push($fonts, "Open Sans");}
if($puritan=="1"){array_push($fonts, "Puritan");}
if($raleway=="1"){array_push($fonts, "Raleway");}
if($redressed=="1"){array_push($fonts, "Redressed");}
if($dancingscript=="1"){array_push($fonts, "Dancing Script");}
if($dawning=="1"){array_push($fonts, "Dawning of a New Day");}
if($labelleaurore=="1"){array_push($fonts, "La Belle Aurore");}
if($lobster=="1"){array_push($fonts, "Lobster");}
if($carterone=="1"){array_push($fonts, "Carter One");}
if($fontdiner=="1"){array_push($fonts, "Fontdiner Swanky");}
if($holtwood=="1"){array_push($fonts, "Holtwood One SC");}
if($slackey=="1"){array_push($fonts, "Slackey");}

// Create a null function if it doesn't exist.
if (!function_exists('karpenter_null')) {
	function karpenter_null () {}
}

/**
 * Method to clear core javascript files from the document head and prevent them from being re-added.
 *
 * @param   boolean  $mootools  True to clear mootools from the document head.
 * @param   boolean  $caption   True to clear the caption script from the document head.
 *
 * @return  void
 */
function clearCoreJavaScript($mootools = false, $caption = false) {
	// Get the head data.
	$head = $this->getHeadData();

	// Make sure we remove any of the variants.
	$search = array();

	// Clear the core js framework and ensure it isn't added again.
	if ($mootools) {
		// Make sure it isn't added again.
		JHtml::register('behavior.framework', 'karpenter_null');

		// Make sure we remove any of the variants.
		$search = array_merge($search, array('mootools-core-uncompressed.js', 'mootools-core.js', 'mootools-more-uncompressed.js', 'mootools-more.js'));
	}
	// Clear the core caption js and ensure it isn't added again.
	if ($caption) {
		JHtml::register('behavior.caption', 'karpenter_null');
		
		// Make sure we remove the caption script.
		$search[] = 'caption.js';
	}
	// Remove the scripts if they exist.
	if (!empty($search)) {
		foreach ($head['scripts'] as $k => $script)
		{
		    foreach ($search as $token)
			{
		        if (stristr($script, $token) !== false) {
		            unset($head['scripts'][$k]);
		        }
		    }
		}
	}
	// Set the updated head data.
	$this->setHeadData($head);		
}
# Need to check for the system files include;
foreach ($doc->_scripts as $key => $value){
	foreach ($jsForRemove as $js){
		if (strpos($key, $js) !== false){
			unset($doc->_scripts[$key]);	# So it means that this will work;
		}
	}
}
