<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Entity;

trait EuTranslationTrait
{
    /**
     * @var string|null
     */
    private $allergenics;

    /**
     * @var string|null
     */
    private $ingredients;

    /**
     * @var string|null
     */
    private $intake;

    /**
     * @var string|null
     */
    private $nutritionFacts;

    public function getIngredients(): ?string {
        return $this->ingredients;
    }

    public function setIngredients(?string $ingredients): void {
        $this->ingredients = $ingredients;
    }

    public function getNutritionFacts(): ?string {
        return $this->nutritionFacts;
    }

    public function setNutritionFacts(?string $nutritionFacts): void {
        $this->nutritionFacts = $nutritionFacts;
    }

    public function getIntake(): ?string {
        return $this->intake;
    }

    public function setIntake(?string $intake): void {
        $this->intake = $intake;
    }

    public function getAllergenics(): ?string {
        return $this->allergenics;
    }

    public function setAllergenics(string $allergenics): void {
        $this->allergenics = $allergenics;
    }
}
