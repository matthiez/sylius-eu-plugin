<?php
declare(strict_types=1);

namespace Ecolos\SyliusColorantsPlugin\Form\Extension;

use Ecolos\SyliusEuPlugin\Form\Extension\BaseTypeExtension;
use Sylius\Bundle\ProductBundle\Form\Type\ProductVariantType;

final class ProductVariantTypeExtension extends BaseTypeExtension
{
    /**
     * @inheritdoc
     */
    public function getExtendedTypes(): iterable {
        return [ProductVariantType::class];
    }
}
