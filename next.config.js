module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"],
    },
    env:  {
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_SIGNING_SECRET: process.env.STRIPE_SIGNING_SECRET,
        HOST: process.env.HOST
    }
}