(function $ecolosEuPlugin($) {
    'use strict';

    $(function () {
        const _t = (id, parameters = {}, domain = 'messages', locale = 'de_DE') =>
          window.Translator.trans(id, {}, domain, locale);

        window.cookieconsent.initialise({
            ...{
                content: {
                    'message': _t('ecolos_sylius_eu_plugin.privacyPolicyTeaser'),
                    'dismiss': _t('ecolos_sylius_eu_plugin.iAgree'),
                    'link': _t('ecolos_sylius_eu_plugin.privacyPolicy'),
                    'href': '/de_DE/page/datenschutz'
                },
                palette: {
                    popup: {
                        background: '#000'
                    },
                    button: {
                        background: '#f1d600'
                    }
                },
                showLink: false,
            },
            ...window.cookieconsent_options || {}
        });
    })

    $.extend({
        emphasizeAllergenics() {
            const GERMAN_ALLERGENICS = [
                'Calciumcaseinat',
                'Calciumcaseinat',
                'Cashew',
                'Dinkel',
                'Ei',
                'Erdnuss',
                'Erdnüsse',
                'Fisch',
                'Garnele',
                'Gerste',
                'Gluten',
                'Hafer',
                'Haselnuss',
                'Haselnüsse',
                'Hummer',
                'Hühner-Eiweißpulver',
                'Instant-Hafervollkornmehl',
                'Krabbe',
                'Krebs',
                'Krebstier',
                'Laktose',
                'Macadamia',
                'Mandel',
                'Milch',
                'Molke',
                'Molkenprotein',
                'Molkenproteinisolat',
                'Molkenproteinkonzentrat',
                'Molkeprotein',
                'Muschel',
                'Paranuss',
                'Paranüsse',
                'Pecannuss',
                'Pecannüsse',
                'Pistazie',
                'Pistazien',
                'Queenslandnuss',
                'Queenslandnüsse',
                'Roggen',
                'Schalenfrucht',
                'Schalenfrüchte',
                'Schnecke',
                'Schwefeldioxid',
                'Sellerie',
                'Senf',
                'Sesamsamen',
                'Soja',
                'Sojalecithin',
                'Sojalecithine',
                'Sojaproteinisolat',
                'Soya',
                'Soyalecithin',
                'Soyalezithin',
                'Soyaproteinisolat',
                'Sulfit',
                'Sulfite',
                'Sulphit',
                'Sulphite',
                'Süsslupine',
                'Süßlupine',
                'Tintenfisch',
                'Walnüsse',
                'Weichtier',
                'Weizen',
            ];
            const ENGLISH_ALLERGENICS = [
                'Milk',
                'Soy',
                'Walnut',
                'Walnuts',
                'Peanut',
                'Peanuts',
                'wheat',
                'Rye',
                'Barley',
                'Oat',
                'Oats',
                'Spelt',
                'Kamut',
                'Crustaceans',
                'Egg',
                'Eggs',
                'Fish',
                'Lactose',
                'Almond',
                'Almonds',
                'Hazelnut',
                'Hazelnuts',
                'Cashew',
                'Cashews',
                'Pecan',
                'Pecan nut',
                'Pecan nuts',
                'Brazil nut',
                'Brazil nuts',
                'Pistachio',
                'Pistachios',
                'Macademia',
                'Macademia nut',
                'Macademia nuts',
                'Queensland nut',
                'Queensland nuts',
                'Celery',
                'Mustard',
                'Sesame',
                'Sesame seed',
                'Lupin',
                'Lupins',
                'Mollusc',
                'Molluscs',
            ];

            const $wrapper = $('.ingredients');

            if ($wrapper) {
                [...GERMAN_ALLERGENICS, ...ENGLISH_ALLERGENICS].forEach(str => {
                    let ingredients = $wrapper.html()
                      .trim();

                    ingredients = ingredients.replace(
                      new RegExp(`\\b${str}\\b`, 'g'),
                      `<strong>${str}</strong>`
                    );

                    ingredients = ingredients.replace(
                      new RegExp(`\\b${str.toLowerCase()}\\b`, 'g'),
                      `<strong>${str.toLowerCase()}</strong>`
                    );

                    $wrapper.html(ingredients);
                });
            }
        }
    });

    const handleProductOptionsChange = () => {
        const onChange = () => {
            const $selector = (() => {
                let $selector = '';

                $('#sylius-product-adding-to-cart select[data-option]')
                  .each((i, el) => {
                      $selector += `[data-${$(el)
                        .attr('data-option')}="${$(el)
                        .find('option:selected')
                        .val()}"]`;
                  });

                return $selector;
            })();

            (function setVariantsIngredients() {
                const $ingredients = $('#ecolos_product_variants_ingredients')
                  .find($selector)
                  .text();
                if ($ingredients.length) {
                    $('#ecolos_product_variant_ingredients')
                      .html($ingredients);
                    $.emphasizeAllergenics();
                }
            })();

            (function setVariantsIntake() {
                const $intake = $('#ecolos_product_variants_intake')
                  .find($selector)
                  .text();
                console.log({$intake})
                if ($intake.length) {
                    $('#ecolos_product_variant_intake')
                      .html($intake);
                }
            })();

            (function setVariantsNutritionFacts() {
                const $nutritionFacts = $('#ecolos_product_variants_nutritionFacts')
                  .find($selector)
                  .text();
                if ($nutritionFacts.length) {
                    $('#ecolos_product_variant_nutritionFacts')
                      .html($nutritionFacts);
                }
            })();

            (function setVariantsAllergenics() {
                const $allergenics = $('#ecolos_product_variants_allergenics')
                  .find($selector)
                  .text();
                if ($allergenics.length) {
                    $('#ecolos_product_variant_allergenics')
                      .html($allergenics);
                }
            })();

            (function setVariantsCaffeine() {
                const $caffeine = $('#ecolos_product_variants_caffeine')
                  .find($selector)
                  .text();
                $('#ecolos_product_variant_caffeine')
                  .html($caffeine);
            })();


            (function setVariantsColorants() {
                $('#ecolos_product_variant_colorants')
                  .html($('#ecolos_product_variants_colorants').find($selector).html());
            })();



            (function setVariantsPricing() {
                const $ele = $('#sylius-variants-pricing');
                const $submit = $('button[type=submit]');
                const $matchedEle = $ele.find($selector);
                const baseContentsUnit = $matchedEle.data('base-contents-unit');

                if ($matchedEle.data('value') !== undefined) {
                    $('#product-price').html($matchedEle.data('value'));

                    $submit.removeAttr('disabled');

                    if (['g', 'l', 'mg', 'ml', 'kg'].includes(baseContentsUnit)) {
                        const price = $matchedEle.data('base-value').toLocaleString(document.querySelector("html").lang, { minimumFractionDigits: 2 });
                        const base = $matchedEle.data('base-contents-unit');
                        $('.ecolos-eu-product-base-price').html(`${price} € / ${base}`);
                    }
                } else {
                    $('#product-price').text($ele.attr('data-unavailable-text'));

                    $submit.attr('disabled', 'disabled');
                }
            })();
        }

        $('[name*="sylius_add_to_cart[cartItem][variant]"]')
          .on('change', onChange);
    };

    const handleProductVariantsChange = () => {
        $('[name="sylius_add_to_cart[cartItem][variant]"]').on('change', ev =>
            $('#product-price')
              .text($(ev.currentTarget)
                .parents('tr')
                .find('.sylius-product-variant-price')
                .text())
          );
    };

    $.fn.extend({
        variantPrices() {
            if ($('#sylius-variants-pricing').length > 0) handleProductOptionsChange();
            else if ($('#sylius-product-variants').length > 0) handleProductVariantsChange();
        }
    });
})(jQuery);


