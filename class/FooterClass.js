import {t} from "../lib/i18n.js";
import {HistoryLink} from "../components/HistoryRouter.js";

class FooterClass {

    constructor() {
    }

    language = localStorage.getItem("language") || "en";

    render() {
        return {
            type: "footer",
            class: "footer footer-center p-5 mt-24 bg-blue-primary text-white rounded",
            children: [
                {
                    type: "div",
                    class: "2xl:container mx-auto px-0 2xl:px-44 xl:mt-28 mt-0",
                    children: [
                        {
                            type: "nav",
                            class: "grid grid-flow-col gap-4",
                            children: [
                                HistoryLink("/", t('home', this.language)),
                                HistoryLink("/map", t('map', this.language)),
                                HistoryLink("/discover", t('discover', this.language)),
                            ]
                        },
                    ]
                },
                {type: "p", attributes: {class: "footer_copyright"}, children: [t('footer_copyright', this.language)]}
            ],
        };
    }


}
export default FooterClass;