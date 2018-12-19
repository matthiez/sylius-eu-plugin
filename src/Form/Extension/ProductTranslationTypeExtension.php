<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Sylius\Bundle\ProductBundle\Form\Type\ProductTranslationType;

final class ProductTranslationTypeExtension extends AbstractTypeExtension
{
    /**
     * @inheritdoc
     */
    public static function getExtendedTypes(): iterable {
        return [ProductTranslationType::class];
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void {
        $builder
            ->add('ingredients', TextareaType::class, [
                'required' => true,
                'label' => 'app.ui.ingredients',
            ])
            ->add('nutrition_facts', TextareaType::class, [
                'required' => true,
                'label' => 'app.ui.nutritionFacts',
            ])
            ->add('intake', TextareaType::class, [
                'required' => true,
                'label' => 'app.ui.intake',
            ])
            ->add('allergenics', TextareaType::class, [
                'required' => true,
                'label' => 'app.ui.allergen_info',
            ]);
    }
}
