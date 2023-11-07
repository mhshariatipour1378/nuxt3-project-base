import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin(async nuxtApp => {


    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);

    
    configure({
        validateOnInput: true,
        // Generates an English message locale generator
        generateMessage: localize('en', {
            messages: {
                required: 'این فیلد اجباری است',
                email: 'لطفا ایمیل را به درستی وارد کنید',
                min: 'مقدار وارد شده کوتاه است'
            },
        }),
    });
})


