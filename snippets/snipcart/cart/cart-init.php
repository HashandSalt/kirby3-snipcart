<script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>
<?php
  if ($css = $kirby->option('hashandsalt.kirby-snipcart.defaulttheme')){
    echo css('https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css');
  }
?>
<div hidden id="snipcart" data-api-key="<?= option('hashandsalt.kirby-snipcart.apikey') ?>"></div>
