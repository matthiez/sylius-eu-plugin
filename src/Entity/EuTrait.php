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

    /**
     * @var bool|null
     */
    private $aspartame;

    /**
     * @var bool|null
     */
    private $tooMuchSugarReplacer;

    /**
     * @var bool|null
     */
    private $sweetener;

    /**
     * @var bool|null
     */
    private $sweetenerAndSugar;

    public function getAspartame(): ?bool {
        return $this->aspartame;
    }

    public function setAspartame(bool $aspartame): void {
        $this->aspartame = $aspartame;
    }

    public function getTooMuchSugarReplacer(): ?bool {
        return $this->tooMuchSugarReplacer;
    }

    public function setTooMuchSugarReplacer(bool $tooMuchSugarReplacer): void {
        $this->tooMuchSugarReplacer = $tooMuchSugarReplacer;
    }

    public function getSweetener(): ?bool {
        return $this->sweetener;
    }

    public function setSweetener(bool $hasSweetener): void {
        $this->sweetener = $hasSweetener;
    }

    public function getSweetenerAndSugar(): ?bool {
        return $this->sweetenerAndSugar;
    }

    public function setSweetenerAndSugar(bool $hasSweetenerAndSugar): void {
        $this->sweetenerAndSugar = $hasSweetenerAndSugar;
    }

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
