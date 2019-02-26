<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;

abstract class BaseTypeExtension extends AbstractTypeExtension
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
            ->add('aspartame', CheckboxType::class, [
                'label' => 'ecolos_sylius_eu_plugin.aspartame',
                'required' => false
            ])
            ->add('caffeine', NumberType::class, [
                'label' => 'ecolos_sylius_eu_plugin.caffeine',
                'required' => false
            ])
            ->add('colorants', ChoiceType::class, [
                "expanded" => true,
                'placeholder' => "ecolos_sylius_eu_plugin.choose",
                'required' => false,
                "multiple" => true,
                'choices' => [
                    "ecolos_sylius_eu_plugin.others" => "1",
                    "ecolos_sylius_eu_plugin.e102" => "E102",
                    "ecolos_sylius_eu_plugin.e104" => "E104",
                    "ecolos_sylius_eu_plugin.e110" => "E110",
                    "ecolos_sylius_eu_plugin.e122" => "E122",
                    "ecolos_sylius_eu_plugin.e124" => "E124",
                    "ecolos_sylius_eu_plugin.e129" => "E129",
                ]
            ])
            ->add('sweetener', CheckboxType::class, [
                'label' => 'ecolos_sylius_eu_plugin.sweetener',
                'required' => false
            ])
            ->add('sweetenerAndSugar', CheckboxType::class, [
                'label' => 'ecolos_sylius_eu_plugin.sweetenerAndSugar',
                'required' => false
            ])
            ->add('tooMuchSugarReplacer', CheckboxType::class, [
                'label' => 'ecolos_sylius_eu_plugin.tooMuchSugarReplacer',
                'required' => false
            ])
            ->add('preservative', CheckboxType::class, [
                'label' => 'ecolos_sylius_eu_plugin.preservative',
                'required' => false
            ]);
    }
}
