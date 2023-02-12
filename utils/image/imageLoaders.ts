import { ImageLoaderProps } from "next/image";

/**
 * To be used in conjunction with the next/image component to make sure
 * cdn image urls have the correct base path for their respective environments
 * @param ImageLoaderProps - { src, width, quality }
 * @returns string
 */
export const hbhCdnLoader = ({
    src,
    width,
    quality,
}: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 100}`;
};

export const partnerProdCdnLoader = ({
    src,
    width,
    quality,
}: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 100}`;
};
