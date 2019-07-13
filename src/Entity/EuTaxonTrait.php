<?php
declare(strict_types=1);

namespace Ecolos\SyliusEuPlugin\Entity;

use Doctrine\ORM\Mapping\Column;

trait EuTaxonTrait
{
    /**
     * @Column(type="boolean", options={"default": 0})
     * @var boolean
     */
    protected $nonFood = false;

    public function getNonFood(): bool
    {
        return $this->nonFood;
    }

    public function setNonFood(bool $nonFood): void
    {
        $this->nonFood = $nonFood;
    }
}
