<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Sylius\Bundle\ProductBundle\Form\Type\ProductType;

final class ProductTypeExtension extends BaseTypeExtension
{
    /**
     * @inheritdoc
     */
    public function getExtendedTypes(): iterable
    {
        return [ProductType::class];
    }
}
