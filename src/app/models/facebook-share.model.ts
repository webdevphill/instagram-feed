// https://developers.facebook.com/docs/plugins/like-button/
// https://developers.facebook.com/docs/plugins/share-button

export interface FacebookShare {
    dataShare?: boolean;
    dataWidth?: string;
    dataShowFaces?: boolean;
    dataSize?: string; // small, large
    dataLayout?: string; // standard, box_count, button_count, button
    dataHref?: string;
}