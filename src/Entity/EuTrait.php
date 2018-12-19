<?php

namespace Ecolos\SyliusEuPlugin\Entity;

trait EuTrait
{
    /**
     * @var int|null
     */
    private $caffeine;

    /**
     * @var array|null
     */
    private $colorants;

    public function getColorants(): ?array {
        return $this->colorants;
    }

    public function setColorants(array $colorants): void {
        $this->colorants = $colorants;
    }

    public function addColorant(int $colorant): int {
        return array_push($this->colorants, $colorant);
    }

    public function getNutritionFacts(): ?string {
        return $this->getTranslation()->getNutritionFacts();
    }

    public function setNutritionFacts(string $nutritionFacts): void {
        $this->getTranslation()->setNutritionFacts($nutritionFacts);
    }

    public function getIngredients(): ?string {
        return $this->getTranslation()->getIngredients();
    }

    public function setIngredients(string $ingredients): void {
        $this->getTranslation()->setIngredients($ingredients);
    }

    public function getIntake(): ?string {
        return $this->getTranslation()->getIntake();
    }

    public function setIntake(string $intake): void {
        $this->getTranslation()->setIntake($intake);
    }

    public function getAllergenics(): ?string {
        return $this->getTranslation()->getAllergenics();
    }

    public function setAllergenics(string $allergenics): void {
        $this->getTranslation()->setAllergenics($allergenics);
    }

    public function getCaffeine(): ?int {
        return $this->caffeine;
    }

    public function setCaffeine(?int $caffeine): void {
        $this->caffeine = $caffeine;
    }
}
