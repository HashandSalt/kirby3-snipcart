<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite6aab26fb36f866ee271ee1417d9dbff
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kirby\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kirby\\' => 
        array (
            0 => __DIR__ . '/..' . '/getkirby/composer-installer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite6aab26fb36f866ee271ee1417d9dbff::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite6aab26fb36f866ee271ee1417d9dbff::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite6aab26fb36f866ee271ee1417d9dbff::$classMap;

        }, null, ClassLoader::class);
    }
}
