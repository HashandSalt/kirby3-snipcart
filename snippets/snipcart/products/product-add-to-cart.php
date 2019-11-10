<button class="snipcart-add-item"
  data-item-id="<?= $page->ProductID() ?>"
  data-item-price="<?= $page->ProductPrice() ?>"
  data-item-url="<?= $page->url() ?>"
  data-item-description="<?= $page->ProductDescription() ?>"
  data-item-image="<?= $page->ProductImage()->toFile()->url() ?>"
  data-item-name="<?= $page->ProductName() ?>">
  Add to cart
</button>
