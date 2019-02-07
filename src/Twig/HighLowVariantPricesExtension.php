<?php namespace Ecolos\SyliusEuPlugin\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class HighLowVariantPricesExtension extends AbstractExtension
{
    public function getFilters() {
        return [
            new TwigFilter('highlowprodvars', [$this, 'highlowprodvarsFilter'])
        ];
    }

    public static function highlowprodvarsFilter(array $prices) {
        $isArr = is_array($prices);

        return [
            'min' => $isArr ? min($prices) : 0,
            'max' => $isArr ? max($prices) : 0,
        ];
    }
}
