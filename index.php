<?php

/**
 *
 * Snipcart Plugin for Kirby 3
 *
 * @version   0.0.4
 * @author    James Steel <https://hashandsalt.com>
 * @copyright James Steel <https://hashandsalt.com>
 * @link      https://github.com/HashandSalt/webp
 * @license   MIT <http://opensource.org/licenses/MIT>
 */

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin('hashandsalt/kirby-snipcart', [


    // Options
    'options' => [

      // MODE (live|test)
      'snipcartlive' => false,

      // API KEYS
      'apikeytest' => option('hashandsalt.kirby-snipcart.apikeytest'), // Snipcart Test API Key (Front end)
      'apikeylive' => option('hashandsalt.kirby-snipcart.apikeylive'), // Snipcart Live API Key (Front end)

      // SECRET KEYS
      'apisecrettest' => option('hashandsalt.kirby-snipcart.apisecretkeytest'), // Snipcart Test API Key (For Panel Dashboard)
      'apisecretlive' => option('hashandsalt.kirby-snipcart.apisecretkeylive'), // Snipcart Test API Key (For Panel Dashboard)

      // USE CART THEME
      'defaulttheme' => option('hashandsalt.kirby-snipcart.defaulttheme'), // Use Snipcart Default CSS

    ],

    // Fields
    'fields' => [
      'productTotal' => [
        'props' => [
          'help' => function ($help = null) {
              return I18n::translate($help, $help);
          }
        ]
      ],
    ],

    // Snippets
    'blueprints' => [

      // Init
      'cart/product'      => __DIR__ . '/blueprints/cart/product.yml',

    ],


    // Snippets
    'snippets' => [

      // Cart
      'cart/init'                    => __DIR__ . '/snippets/snipcart/cart/cart-init.php',
      'cart/checkoutsummary'         => __DIR__ . '/snippets/snipcart/cart/cart-checkout-summary.php',

      // Products
      'product/add'                  => __DIR__ . '/snippets/snipcart/products/product-add-to-cart.php',
      'product/list'                 => __DIR__ . '/snippets/snipcart/products/product-list.php',

    ],

    // API Route
    'api' => [
      'routes' => [

          [
              'pattern' => 'snipcart/(:all)',
              'action'  => function ($param) {
                $apisecretkey = option('hashandsalt.kirby-snipcart.snipcartlive') === true ? option('hashandsalt.kirby-snipcart.apisecretlive') : option('hashandsalt.kirby-snipcart.apisecrettest');
                $snipcart = [];
                $request = Remote::get('https://app.snipcart.com/api/'. $param, [
                  'headers' => [
                      'Accept:' . 'application/json',
                      'Authorization: Basic ' . base64_encode($apisecretkey . ':')
                  ]
                ]);
                if ($request->code() === 200) {
                    $snipcart = $request->json();
                }
                return $snipcart;
              }
          ]
        ]
      ]


]);
