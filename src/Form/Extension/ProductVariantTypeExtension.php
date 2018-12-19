<?php
declare(strict_types=1);

namespace Ecolos\SyliusColorantsPlugin\Form\Extension;

use Sylius\Bundle\ProductBundle\Form\Type\ProductType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductVariantType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;

final class ProductVariantTypeExtension extends AbstractTypeExtension
{
    /**
     * @inheritdoc
     */
    public function getExtendedTypes(): iterable {
        return [ProductVariantType::class];
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
            ->add('colorants', ChoiceType::class, [
                "expanded" => true,
                'placeholder' => "ecolos_sylius_colorants_plugin.choose",
                'required' => false,
                "multiple" => true,
                'choices' => [
                    "ecolos_sylius_colorants_plugin.others" => "1",
                    "ecolos_sylius_colorants_plugin.e102" => "E102",
                    "ecolos_sylius_colorants_plugin.e104" => "E104",
                    "ecolos_sylius_colorants_plugin.e110" => "E110",
                    "ecolos_sylius_colorants_plugin.e122" => "E122",
                    "ecolos_sylius_colorants_plugin.e124" => "E124",
                    "ecolos_sylius_colorants_plugin.e129" => "E129",
                ]
            ]);
    }
}
