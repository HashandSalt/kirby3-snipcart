<div class="product-list">
  <?php foreach ($kirby->collection("products") as $product): ?>

    <div class="product-item">

      <figure>
        <a href="<?= $product->url() ?>">
          <img src="<?= $product->productImage()->toFile()->url() ?>" alt="<?= $product->productImage()->toFile()->alt() ?>">
        </a>
        <figcaption>
          <span><a href="<?= $product->url() ?>"><?= $product->title() ?></a></span>
        </figcaption>
      </figure>

      <p><?= $product->productDescription() ?></p>
      <span class="product-price">£<?= $product->productPrice() ?></span>

    </div>

  <?php endforeach; ?>
</div>
