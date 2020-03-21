var tariff, tariff_id, tariff_plan, tariff_price;
$('.plan-button').on('click', function(){
    tariff = $(this).parents('div');
    tariff_id = tariff[1].attributes[1].value;
    tariff_plan = tariff.children('div').children('h5').text();
    tariff_price = tariff.children('div').children('div').children('h4').text();
    console.log(tariff_id);

    console.log(tariff_plan, tariff_price);
        $("#addPlanModal").modal('show');
        console.log($('.stripe-button'));
        form = document.getElementsByClassName('stripe-form');
        urlCharge = 'http://127.0.0.1:8000/stripe/' + tariff_id + '/';
        form[0].setAttribute('action', urlCharge);
        var mydiv=document.getElementsByClassName('stripe-button active');
        console.log(mydiv);
        mydiv[0].attributes[3].value=tariff_price;
        mydiv[0].attributes[5].value=tariff_plan;
        // $('.stripe-button.active').setAttribute..data.amount = '5245';


});

$('#stripe_a').on('click', function(){
    console.log('asd');
   $('.stripe-button-el').trigger('click');
});

$('#paypal_a').on('click', function(){
    console.log('paypal');
    var forms=document.getElementsByClassName('no-active');
    for(let i = 0; i < forms.length; i++){
        if(forms[i].getAttribute('data-tariff') == tariff_id){
            forms[i].submit();
        }
    }
   // $('.stripe-button-el').trigger('click');
});


