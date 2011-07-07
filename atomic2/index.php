<?php
/**
 * @version		$Id: index.php  $
 * @package		'.$this->template.' | Karpenter
 * @copyright	(C) 2011 Kontent Design. All rights reserved.
 * @license		GNU General Public License version 2 or later
 */
defined('_JEXEC') or die;

// Load the setup file.
require_once dirname(__FILE__).'/karpenter/setup.php';

?>
<?php echo '<?'; ?>xml version="1.0" encoding="<?php echo $this->_charset ?>"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" >
    <head>
        <jdoc:include type="head" />

		<?php if ($this->direction == 'rtl') : ?>
            <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template_rtl.css" rel="stylesheet" type="text/css" />
		<?php endif; ?>

		<?php if($fonts!=NULL){
			?>
			<script type="text/javascript">
				WebFontConfig = {
					google: {
						families: <?php echo json_encode($fonts); ?>
					}
				};
				(function() {
						var wf = document.createElement('script');
						wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
							'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
						wf.type = 'text/javascript';
						wf.async = 'true';
						var s = document.getElementsByTagName('script')[0];
						s.parentNode.insertBefore(wf, s);
					  })();
			</script>
		<?php } ?>
		
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