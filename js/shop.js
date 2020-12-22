$(document).ready(function () {

    var orders = [];

    $(".order-amount").change(function (event) {

        var amount = $(this).val();
        var productId = $(this).attr("data-product-id");
        var price = $(this).attr('data-price');
        var name = $(this).parent().parent().find(".productname").text();

        if (amount < 1) {
            orders.pop(orders[productId]);
        } else {
            orders[productId] = {
                price: price,
                productName: name,
                amount: amount,
            };
        }
        showElements();
    });

    function showElements() {
        $(".order-holder").html("");
        for (order in orders) {
            var element = $('.sample_div').clone();
            var amount = orders[order]['amount'];
            var totalPrice = orders[order]['price'] * amount;

            element.removeClass("sample_div d-none");
            element.find('.product_name').text(orders[order]['productName']);
            element.find('.product_price').text(totalPrice + " rsd");
            element.find('.product_amount').text(amount);
            $(".order-holder").append(element);
        }
    }

})