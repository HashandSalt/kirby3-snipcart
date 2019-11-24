<button class="snipcart-add-item <?= $class ?>"
  data-item-id="<?= $page->ProductID() ?>"
  data-item-price="<?= $page->ProductPrice() ?>"
  data-item-url="<?= Url::path($page->url(), true, false); ?>"
  data-item-description="<?= $page->ProductDescription() ?>"
  data-item-image="<?= Url::path($page->ProductImage()->toFile()->url(), true, false); ?>"
  data-item-name="<?= $page->ProductName() ?>">
  Add to cart
</button>
