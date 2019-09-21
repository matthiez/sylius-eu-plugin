<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class ParseIntExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('parseInt', [$this, 'parseInt']),
        ];
    }

    public function parseInt(string $string)
    {
        return (int)filter_var($string, FILTER_SANITIZE_NUMBER_INT);
    }
}
