<?php

declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class HasBasePriceExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('hasBasePrice', [$this, 'hasBasePrice'])
        ];
    }

    public static function hasBasePrice(string $contentsUnit): bool
    {
        return in_array($contentsUnit, [
            'mg',
            'g',
            'kg',
            't',
            'ml',
            'l',
        ]);
    }
}
