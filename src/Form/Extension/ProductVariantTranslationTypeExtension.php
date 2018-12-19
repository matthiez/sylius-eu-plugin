<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Sylius\Bundle\ProductBundle\Form\Type\ProductVariantTranslationType;

final class ProductVariantTranslationTypeExtension extends AbstractTypeExtension
{
    /**
     * @inheritdoc
     */
    public static function getExtendedTypes(): iterable {
        return [ProductVariantTranslationType::class];
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void {
        $builder
            ->add('ingredients', TextareaType::class, [
                'required' => true,
                'label' => 'ecolos_sylius_eu_plugin.ingredients',
            ])
            ->add('nutrition_facts', TextareaType::class, [
                'required' => true,
                'label' => 'ecolos_sylius_eu_plugin.nutritionFacts',
            ])
            ->add('intake', TextareaType::class, [
                'required' => true,
                'label' => 'ecolos_sylius_eu_plugin.intake',
            ])
            ->add('allergenics', TextareaType::class, [
                'required' => true,
                'label' => 'ecolos_sylius_eu_plugin.allergen_info',
            ]);
    }
}
