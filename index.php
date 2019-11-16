<?php

/**
 *
 * Snipcart Plugin for Kirby 3
 *
 * @version   0.0.1
 * @author    James Steel <https://hashandsalt.com>
 * @copyright James Steel <https://hashandsalt.com>
 * @link      https://github.com/HashandSalt/webp
 * @license   MIT <http://opensource.org/licenses/MIT>
 */

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin('hashandsalt/kirby-snipcart', [

    // Options
    'options' => [

      // Tag Options
      'apikey' => option('hashandsalt.kirby-snipcart.apikey'), // Snipcart API Key
      'defaulttheme' => option('hashandsalt.kirby-snipcart.defaulttheme'), // Use Snipcart Default CSS

    ],

    // Snippets
    'blueprints' => [

      // Init
      'cart/product'      => __DIR__ . '/blueprints/cart/product.yml',

    ],


    // Snippets
    'snippets' => [

      // Init
      'cart/init'         => __DIR__ . '/snippets/snipcart/cart/cart-init.php',

      // Products
      'product/add'        => __DIR__ . '/snippets/snipcart/products/product-add-to-cart.php',
      'product/list'       => __DIR__ . '/snippets/snipcart/products/product-list.php',

    ],


]);
