<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Sylius\Bundle\ProductBundle\Form\Type\ProductVariantTranslationType;

final class ProductVariantTranslationTypeExtension extends BaseTranslationTypeExtension
{
    /**
     * @inheritdoc
     */
    public static function getExtendedTypes(): iterable
    {
        return [ProductVariantTranslationType::class];
    }
}
