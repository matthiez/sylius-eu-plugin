1. Add to bundles.php
```php
    Ecolos\SyliusEuPlugin\EcolosSyliusEuPlugin::class => ['all' => true],
```

2. add to templates
templates/bundles/SyliusShopBundle/Product/_box.html.twig
```twig
    <div class="sylius-product-price">
        {% include '@EcolosSyliusEuPlugin/box.html.twig' %}
    
        <span data-tooltip="{{ 'sylius.ui.price_hint' | trans }}">*</span>
    </div>
```
```twig
{% include '@SyliusShop/Product/Show/Tabs/_details.html.twig' %}

{% include '@EcolosSyliusEuPlugin/_tabs/_nutritionFacts.html.twig' %}

{% include '@EcolosSyliusEuPlugin/_tabs/_ingredients.html.twig' %}

{% include '@EcolosSyliusEuPlugin/_tabs/_intake.html.twig' %}

{% include '@EcolosSyliusMakerPlugin/shop_product_show_tab_maker.html.twig' %}

{% include '@SyliusShop/Product/Show/Tabs/_reviews.html.twig' %}
```
templates/bundles/SyliusAdminBundle/Taxon/_form.html.twig
```twig
    {{ form_row(form.nonFood) }}
```
templates/bundles/SyliusAdminBundle/Product/Tab/_details.html.twig
```twig
    {{ form_row(form.caffeine) }}
    {{ form_row(form.colorants) }}
    {{ form_row(form.maker) }}
    {{ form_row(form.aspartame) }}
    {{ form_row(form.sweetener) }}
    {{ form_row(form.sweetenerAndSugar) }}
    {{ form_row(form.tooMuchSugarReplacer) }}
    {{ form_row(form.preservative) }}
```
templates
```twig
{% import "@SyliusShop/Common/Macro/money.html.twig" as money %}
{% from '@EcolosSyliusEuPlugin/basePrice.html.twig' import html as basePrice %}

<div class="ui huge header">
    <span class="ui sub header" style="text-transform: none;">
        {{ basePrice(product, 'contents_unit', 'contents', true) }}
    </span>
</div>
```
3. Add to services.yml
```yaml
      - { resource: "@EcolosSyliusEuPlugin/Resources/config/config.yaml" }
```

4. Add these globals to config/packages/twig.yaml
```yaml
twig:
    globals:
        ecolos_eu_contents: contents #code of the contents attribute
        ecolos_eu_contents_unit: contents_unit #code of the contents unit attribute
```

5. Add `<script src="{{ asset('bundles/ecolossyliuseuplugin/ecolos-eu-plugin.js') }}"></script>` to layout or _javascripts.
    Use `$.emphasizeAllergenics` anywhere u want to emphasize allergenics according to EU ruleset.

6. Extend SyliusShopBundle/Entity/Taxon and use EuTaxonTrait
```php
    use EuTaxonTrait;
```

7. Run `php bin/console doctrine:migrations:diff`

8. Run `php bin/console doctrine:migrations:migrate`

9. Run `php bin/console cache:clear`
