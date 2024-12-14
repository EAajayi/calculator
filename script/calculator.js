$(document).ready(function () {
    let display = $('#display');
    let currentInput = '';

    // Handle button clicks
    $('.btn').on('click', function () {
        let value = $(this).data('value');

        if (value === undefined) {
            if (this.id === 'clear') {
                currentInput = '';
                display.val('');
            } else if (this.id === 'equals') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.val(currentInput);
                } catch (e) {
                    display.val('Error');
                }
            }
        } else {
            currentInput += value;
            display.val(currentInput);
        }
    });

    // Clear on error display
    display.on('input', function () {
        if ($(this).val() === 'Error') {
            $(this).val('');
        }
    });
});
