<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

abstract class BaseTranslationTypeExtension extends AbstractTypeExtension
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
            ->add('ingredients', TextareaType::class, [
                'required' => true,
                'label' => 'ecolos_sylius_eu_plugin.composition',
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
                'required' => false,
                'label' => 'ecolos_sylius_eu_plugin.allergenInfo',
                'empty_data' => '',
            ]);
    }
}
