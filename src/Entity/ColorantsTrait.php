<?php

namespace Ecolos\SyliusEuPlugin\Entity;

trait ColorantsTrait
{
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
}
