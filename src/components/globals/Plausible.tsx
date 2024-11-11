import Script from "next/script";

export default function Plausible() {
    return <Script defer src={`${process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}/js/script.js`} />;
}