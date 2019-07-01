<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Sylius\Bundle\ProductBundle\Form\Type\ProductTranslationType;

final class ProductTranslationTypeExtension extends BaseTranslationTypeExtension
{
    /**
     * @inheritdoc
     */
    public static function getExtendedTypes(): iterable
    {
        return [ProductTranslationType::class];
    }
}
