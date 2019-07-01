(function $ecolosEuPlugin($) {
    'use strict';

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
        $('[name*="sylius_add_to_cart[cartItem][variant]"]')
            .on('change', onChange);

        function onChange() {
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

            [
                {
                    from: '#ecolos_product_variants_ingredients',
                    to: '#ecolos_product_variant_ingredients',
                },
                {
                    from: '#ecolos_product_variants_intake',
                    to: '#ecolos_product_variant_intake',
                },
                {
                    from: '#ecolos_product_variants_nutritionFacts',
                    to: '#ecolos_product_variant_nutritionFacts',
                }
            ].forEach(({from, to}) => $(to)
                .html($(from)
                    .find($selector)
                    .html()));

            (function setVariantsPricing() {
                const $ele = $('#sylius-variants-pricing');
                const $submit = $('button[type=submit]');
                const $matchedEle = $ele.find($selector);
                const baseContentsUnit = $matchedEle.data('base-contents-unit').trim();

                if ($matchedEle.data('value') !== undefined) {
                    $('#product-price')
                        .html($matchedEle.data('value'));

                    $submit.removeAttr('disabled');

                    if (['g', 'l', 'mg', 'ml', 'kg'].includes(baseContentsUnit)) {
                        const price = $matchedEle.data('base-value')
                            .toLocaleString(document.querySelector('html').lang, {minimumFractionDigits: 2});
                        const base = $matchedEle.data('base-contents-unit');
                        $('#ecolos-eu-product-base-price')
                            .html(`${price} € / ${base}`);
                    }
                } else {
                    $('#product-price')
                        .text($ele.attr('data-unavailable-text'));

                    $submit.attr('disabled', 'disabled');
                }
            })();
        }
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
