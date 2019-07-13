<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Form\Extension;

use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Sylius\Bundle\TaxonomyBundle\Form\Type\TaxonType;

final class TaxonTypeExtension extends AbstractTypeExtension
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nonFood', CheckboxType::class, [
                'required' => true,
            ]);
    }

    /**
     * @inheritdoc
     */
    public function getExtendedTypes(): iterable
    {
        return [TaxonType::class];
    }

    /**
     * @inheritdoc
     */
    public function getExtendedType()
    {
        return TaxonType::class;
    }
}
