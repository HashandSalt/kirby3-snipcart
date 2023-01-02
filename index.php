<?php

/**
 *
 * Snipcart Plugin for Kirby 3
 *
 * @version   0.5.0
 * @author    James Steel <https://hashandsalt.com>
 * @copyright James Steel <https://hashandsalt.com>
 * @link      https://github.com/HashandSalt/kirby3-snipcart
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



    ],



    // Blueprints
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
    

    'areas' => [
        'snipcart' => function ($kirby) {
          return [
            'label' => 'Snipcart',
            'icon'  => 'cart',
            'menu'  => true,
            'link'  => 'snipcartdash',
            'views' => [
              [
                // the Panel patterns must not start with 'panel/',
                // the `panel` slug is automatically prepended.
                'pattern' => 'snipcartdash',
                'action'  => function () {
                    
           
                  return [
                      // the Vue component can be defined in the
                      // `index.js` of your plugin
                      'component' => 'dash',
    
                      // the document title for the current view
                      'title' => 'Snipcart',
    
                   
                  ];
                }
              ]
            ]
          ];
        }
      ],

    // API Route
    'api' => [
      'routes' => [

          [
              'pattern' => 'snipcart/(:all)',
              'action'  => function ($param) {
                $apisecretkey = option('hashandsalt.kirby-snipcart.snipcartlive') === true ? option('hashandsalt.kirby-snipcart.apisecretlive') : option('hashandsalt.kirby-snipcart.apisecrettest');
                $snipcart = [];

                if ($limit = get('limit')) {
                  $limit = '?limit='.get('limit');
                }

                $request = Remote::get('https://app.snipcart.com/api/'.$param.$limit, [
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
