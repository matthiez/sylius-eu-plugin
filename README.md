1. Add to bundles.php
```php
    Ecolos\SyliusEuPlugin\EcolosSyliusEuPlugin::class => ['all' => true],
```
2. Add to services.yml
```yaml
      - { resource: "@EcolosSyliusEuPlugin/Resources/config/config.yaml" }
```

3. Add to config/doctrine/Product.orm.yml
```yaml
    aspartame:
      type: boolean
      nullable: true
    caffeine:
      type: integer
      nullable: true
    colorants:
      type: simple_array
      nullable: true
    tooMuchSugarReplacer:
      type: boolean
      nullable: true
    sweetener:
      type: boolean
      nullable: true
    sweetenerAndSugar:
      type: boolean
      nullable: true
```

4. Add to templates/bundles/SyliusAdminBundle/Product/Tab/_details.html.twig
```twig
    {{ form_row(form.aspartame) }}
    {{ form_row(form.caffeine) }}
    {{ form_row(form.colorants) }}
    {{ form_row(form.tooMuchSugarReplacer) }}
    {{ form_row(form.sweetener) }}
    {{ form_row(form.sweetenerAndSugar) }}
```
5. Add to ur custom.js 
```javascript
    import "cookieconsent"
    import "cookieconsent/build/cookieconsent.min.css"
```

6. Add `<script src="{{ asset('bundles/ecolossyliuseuplugin/ecolos-eu-plugin.js') }}"></script>` to use layout.html.twig and
    use `$.emphasizeAllergenics` anywhere u want to emphasize allergenics according to EU ruleset.
    
7. Run `php bin/console doctrine:migrations:diff`

8. Run `php bin/console doctrine:migrations:migrate`

9. Run `php bin/console cache:clear`
