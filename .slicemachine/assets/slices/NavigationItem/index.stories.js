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
                    mega_menu_item_link: {
                        link_type: "Web",
                        url: "https://prismic.io",
                    },
                    mega_menu_item_image: {
                        dimensions: { width: 3958, height: 3958 },
                        alt: null,
                        copyright: null,
                        url: "https://images.unsplash.com/photo-1579931794097-0ad001e51edb",
                    },
                    mega_menu_item_text: "frequently",
                },
            ],
            primary: {
                navigation_item_text: "writer",
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
