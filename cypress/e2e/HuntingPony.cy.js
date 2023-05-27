describe('HuntingPony', function () {
    
     it('Тестирование HuntingPony', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').wait(500).click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').wait(500).click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
        cy.get('#client_surname').type('Morra');
        cy.get('#client_contact_name').type('Max');
        cy.get('#client_phone').type('89259109204');
        cy.get('#client_email').type('maxmorra@outlook.com');
        cy.get('#shipping_address_country').select('Казахстан');
        cy.get('#shipping_address_full_locality_name').type('Астана');
        cy.get('[for="order_delivery_variant_id_4754130"] > .radio > span').click();
        cy.get('#shipping_address_street').type('Индустриальная');
        cy.get('#shipping_address_house').type('3');
        cy.get('#shipping_address_flat').type('60');
        cy.get('#order_comment').type('Оставить у двери');
        cy.get('[for="order_payment_gateway_id_3184571"] > .co-payment_method-input > span').click();
        cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик');
        cy.get('#order_field_24333471').type('Мопс');
        cy.get('#order_field_24333473').type('28.02.2018');
        cy.get('#create_order').click();
        cy.contains('Заказ №').end();

        })
})