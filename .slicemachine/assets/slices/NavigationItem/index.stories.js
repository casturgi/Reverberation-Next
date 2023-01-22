import MyComponent from "../../../../slices/NavigationItem";

export default {
    title: "slices/NavigationItem",
};

export const _Default = () => (
    <MyComponent
        slice={{
            variation: "default",
            version: "sktwi1xtmkfgx8626",
            items: [
                {
                    mega_menu_item_image: {
                        dimensions: { width: 4160, height: 3120 },
                        alt: null,
                        copyright: null,
                        url: "https://images.unsplash.com/photo-1560457079-9a6532ccb118",
                    },
                    mega_menu_item_text: "doll",
                    mega_menu_item_link: {
                        link_type: "Web",
                        url: "https://prismic.io",
                    },
                },
            ],
            primary: {
                navigation_item_text: "exchange",
                navigation_item_url: {
                    link_type: "Web",
                    url: "https://prismic.io",
                },
            },
            id: "_Default",
            slice_type: "navigation_item",
        }}
    />
);
_Default.storyName = "";
