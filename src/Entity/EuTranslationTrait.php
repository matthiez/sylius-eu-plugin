<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Entity;

use Doctrine\ORM\Mapping\Column;

trait EuTranslationTrait
{
    /**
     * @Column(type="text", nullable=true)
     * @var string|null
     */
    private $allergenics;

    /**
     * @Column(type="text", nullable=true)
     * @var string|null
     */
    private $ingredients;

    /**
     * @Column(type="text", nullable=true)
     * @var string|null
     */
    private $intake;

    /**
     * @Column(type="text", nullable=true)
     * @var string|null
     */
    private $nutritionFacts;

    public function getAllergenics(): ?string
    {
        return $this->allergenics;
    }

    public function setAllergenics(string $allergenics): void
    {
        $this->allergenics = $allergenics;
    }

    public function getIngredients(): ?string
    {
        return $this->ingredients;
    }

    public function setIngredients(?string $ingredients): void
    {
        $this->ingredients = $ingredients;
    }

    public function getIntake(): ?string
    {
        return $this->intake;
    }

    public function setIntake(?string $intake): void
    {
        $this->intake = $intake;
    }

    public function getNutritionFacts(): ?string
    {
        return $this->nutritionFacts;
    }

    public function setNutritionFacts(?string $nutritionFacts): void
    {
        $this->nutritionFacts = $nutritionFacts;
    }
}
