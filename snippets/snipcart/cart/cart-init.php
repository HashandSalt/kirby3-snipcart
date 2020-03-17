<?php
  if ($css = $kirby->option('hashandsalt.kirby-snipcart.defaulttheme')){
    echo css('https://cdn.snipcart.com/themes/v3.0.9/default/snipcart.css');
  }
  $apikey = option('hashandsalt.kirby-snipcart.snipcartlive') === true ? option('hashandsalt.kirby-snipcart.apikeylive') : option('hashandsalt.kirby-snipcart.apikeytest');
?>
<div hidden id="snipcart" data-api-key="<?= $apikey ?>"></div>
<script src="https://cdn.snipcart.com/themes/v3.0.9/default/snipcart.js"></script>
