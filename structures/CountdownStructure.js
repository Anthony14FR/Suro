export default function CountdownStructure() {
    return {
        tag: "div",
        props: {
            class: "countdown-timer",
        },
        children: [
            {
                tag: "div",
                props: {
                    class: "time-display text-3xl font-bold flex space-x-2",
                },
                children: [
                    {
                        tag: "span",
                        props:
                            {class: "days"},
                        children:
                            ["00 :"]
                    },
                    {
                        tag: "span",
                        props:
                            {class: "hours"},
                        children: ["00 :"]
                    },
                    {
                        tag: "span",
                        props:
                            {class: "minutes"},
                        children: ["00 :"]
                    },
                    {
                        tag: "span",
                        props:
                            {class: "seconds"},
                        children: ["00"]
                    },
                ],
            },
            {
                tag: "div",
                props: {
                    class: "flex space-x-4 mt-2",
                },
                children: [
                    {
                        tag: "div",
                        props:
                            {class: "text-sm"},
                        children: ["Jours"]
                    },
                    {
                        tag: "div",
                        props:
                            {class: "text-sm"},
                        children: ["Heures"]
                    },
                    {
                        tag: "div",
                        props: {class: "text-sm"},
                        children: ["Minutes"]
                    },
                    {
                        tag: "div",
                        props: {class: "text-sm"},
                        children: ["Secondes"]
                    },
                ],
            },
        ],
    };
}
