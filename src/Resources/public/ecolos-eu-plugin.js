(function $ecolosEuPlugin($) {
    'use strict';

    $.extend({
        cookieConsent(options = {}) {
            const _t = (id, parameters = {}, domain = 'messages', locale = 'de_DE') =>
                window.Translator.trans(id, {}, domain, locale);

            window.cookieconsent.initialise({
                ...{
                    content: {
                        'message': _t('ecolos_sylius_eu_plugin.privacy_policy_teaser'),
                        'dismiss': _t('ecolos_sylius_eu_plugin.i_agree'),
                        'link': _t('ecolos_sylius_eu_plugin.privacy_policy'),
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
                ...options
            });
        },

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
        $('[name*="sylius_add_to_cart[cartItem][variant]"]')
            .on('change', () => {
                let $selector = '';

                $('#sylius-product-adding-to-cart select[data-option]')
                    .each((i, el) => {
                        $selector += `[data-${$(el)
                            .attr('data-option')}="${$(el)
                            .find('option:selected')
                            .val()}"]`;
                    });

                const $ingredients = $('#ecolos_product_variants_ingredients')
                    .find($selector)
                    .text();
                if ($ingredients.length) {
                    $('#ecolos_product_variant_ingredients')
                        .html($ingredients);
                    $.emphasizeAllergenics();
                }

                const $intake = $('#ecolos_product_variants_intake')
                    .find($selector)
                    .text();
                if ($intake.length) {
                    $('#ecolos_product_variant_intake')
                        .html($intake);
                }

                const $nutritionFacts = $('#ecolos_product_variants_nutritionFacts')
                    .find($selector)
                    .text();
                if ($nutritionFacts.length) {
                    $('#ecolos_product_variant_nutritionFacts')
                        .html($nutritionFacts);
                }

                const $allergenics = $('#ecolos_product_variants_allergenics')
                    .find($selector)
                    .text();
                if ($allergenics.length) {
                    $('#ecolos_product_variant_allergenics')
                        .html($allergenics);
                }

                const $caffeine = $('#ecolos_product_variants_caffeine')
                    .find($selector)
                    .text();
                $('#ecolos_product_variant_caffeine')
                    .html($caffeine);

                const $colorants = $('#ecolos_product_variants_colorants')
                    .find($selector)
                    .html();
                $('#ecolos_product_variant_colorants')
                    .html($colorants);

                const $ele = $('#sylius-variants-pricing');
                const $submit = $('button[type=submit]');
                const baseContentsUnit = $ele.find($selector)
                    .data('base-contents-unit');

                if ($ele.find($selector)
                    .data('value') !== undefined) {
                    $('#product-price')
                        .html($ele.find($selector)
                            .data('value'));

                    $submit.removeAttr('disabled');

                    if (['g', 'l', 'mg', 'ml', 'kg'].includes(baseContentsUnit)) {
                        const price = $ele.find($selector)
                            .data('base-value');
                        const base = $ele.find($selector)
                            .data('base-contents-unit');
                        $('#product-base-price')
                            .html(`${price} € / ${base}`);
                    }


                } else {
                    $('#product-price')
                        .text($ele.attr('data-unavailable-text'));

                    $submit.attr('disabled', 'disabled');
                }
            });
    };

    const handleProductVariantsChange = () => {
        $('[name="sylius_add_to_cart[cartItem][variant]"]')
            .on('change', ev =>
                $('#product-price')
                    .text($(ev.currentTarget)
                        .parents('tr')
                        .find('.sylius-product-variant-price')
                        .text())
            );
    };

    $.fn.extend({
        variantPrices() {
            if ($('#sylius-variants-pricing').length > 0) {
                handleProductOptionsChange();
            } else if ($('#sylius-product-variants').length > 0) handleProductVariantsChange();
        }
    });
})(jQuery);


