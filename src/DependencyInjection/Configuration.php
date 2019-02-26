<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

final class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder(): TreeBuilder {
        $treeBuilder = new TreeBuilder();

        $rootNode = $treeBuilder->root('ecolos_sylius_eu_plugin');

        return $treeBuilder;
    }
}
