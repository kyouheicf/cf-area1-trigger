import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
    /*personalizations: [
        {
            to: [{ name: "ACME Support", email: `${context.env.RECEIVER_EMAIL}`, }],
            headers: {
                "X-Area1Security-Request-Disposition": `${context.request.formData()}`
            },
        },
    ],*/
    personalizations: ({ formData, }) => {
        console.log(formData.get('disposition').toString())
        console.log(context.env.RECEIVER_EMAIL)
        return [
            {
                to: [{ name: "ACME Support", email: context.env.RECEIVER_EMAIL, }],
                headers: {
                    "X-Area1Security-Request-Disposition": formData.get('disposition').toString()
                },
                subject: `${formData.get('disposition').toString()} Disposition Test`
            },
        ];
    },
    from: { name: "Area1Security Disposition Trigger Test", email: `${context.env.SENDER_EMAIL}` },
    respondWith: () => {
        return new Response(
            `Thank you for submitting your inquiry. A member of the team will be in touch shortly.`
        );
    },
})(context);