1. add to bundles.php
    Ecolos\SyliusEuPlugin\EcolosSyliusEuPlugin::class => ['all' => true],
    
2. add to services.yml
      - { resource: "@EcolosSyliusEuPlugin/Resources/config/config.yaml" }

3. add to src/resources/config/doctrine/Product.orm.yml
    fields:
        colorants:
          type: simple_array
          nullable: true
4. add to src/templates/bundles/SyliusAdminBundle/Product/Tab/_details.html.twig
    {{ form_row(form.colorants) }}
    
5. run php bin/console doctrine:migrations:diff

6. run php bin/console doctrine:migrations:migrate

7. run php bin/console cache:clear
