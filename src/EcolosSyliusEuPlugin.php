<?php

declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;

final class EcolosSyliusEuPlugin extends Bundle
{
    use SyliusPluginTrait;
}
