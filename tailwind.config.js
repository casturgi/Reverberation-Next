module.exports = {
    mode: "jit",
    content: ["./pages/**/*.tsx", "./src/**/*.tsx", "./src/styles/**/*.scss"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                serif: ["Roboto Slab"],
                "sans-serif": ["Roboto"],
            },
            fontSize: {
                h1: "25px",
                h2: "20px",
                h3: "18px",
                h4: "14px",
                h5: "14px",
                h6: "12px",
                "p-large": "16px",
                "p-medium": "15px",
                p: "14px",
                "p-small": "12px",
            },
            lineHeight: {
                h1: "32px",
                h2: "32px",
                h3: "24px",
                h4: "20px",
                h5: "20px",
                h6: "20px",
                "p-large": "24px",
                "p-medium": "20px",
                p: "20px",
                "p-small": "16px",
            },
            letterSpacing: {
                h1: "normal",
                h2: "normal",
                h3: "normal",
                h4: "1.4px",
                h5: "1.4px",
                h6: "1.4px",
                "p-large": "normal",
                "p-medium": "normal",
                p: "normal",
                "p-small": "normal",
            },
            height: {
                fit: "fit-content",
                inherit: "inherit",
                header: "72px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
