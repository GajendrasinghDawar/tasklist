import { resend } from "./resend"

export async function sendVerificationRequest(params) {
    const { identifier, url, provider, theme } = params
    const { host } = new URL(url)

    try {
        const data = await
            resend.emails.send({
                from: 'magic-link@gajendrasinghdawar.me',
                to: identifier,
                subject: `Sign in to ${host}`,
                text: `Sign in to ${host} ${url}`,
                html: `Sign in to <a href="${url}">${host}</a>`
            });
        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}
