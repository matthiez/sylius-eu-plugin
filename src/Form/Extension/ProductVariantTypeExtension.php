<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Sylius\Bundle\ProductBundle\Form\Type\ProductVariantType;

final class ProductVariantTypeExtension extends BaseTypeExtension
{
    /**
     * @inheritdoc
     */
    public function getExtendedTypes(): iterable
    {
        return [ProductVariantType::class];
    }
}
