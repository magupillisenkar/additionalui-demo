import { Accordion } from "./Accordion";
import { Collapse } from "./Collapse";
import { Dropdown } from "./Dropdown";
console.log(Accordion)
export const SidebarTabs = [
    {
        category: 'Base Components',
        list: [
            { id: 1, route:'accordion', name: 'Accordion',  html: Accordion },
            { id: 1, route:'collapse', name: 'Collapse',  html: Collapse },
            { id: 1, route:'dropdown', name: 'Dropdown',  html: Dropdown },
        ]
    },
    {
        category: 'Navigations',
        list: [
            { id: 1, route:'navbar', name: 'Navbar', html: `` },
            { id: 2, route:'mega-menu', name: 'Mega Menu', html: `` },
            { id: 3, route:'navs', name: 'Navs', html: `` },
            { id: 4, route:'tabs', name: 'Tabs', html: `` },
            { id: 5, route:'pagination', name: 'Pagination', html: `` },
        ]
    },
    {
        category: 'Basic Forms',
        list: [
            { id: 1, route:'input', name: 'Input', html: `` },
            { id: 2, route:'input-group', name: 'Input Group', html: `` },
            { id: 3, route:'textarea', name: 'Textarea', html: `` },
            { id: 4, route:'file-input', name: 'File Input', html: `` },
            { id: 5, route:'color-picker', name: 'Color Picker', html: `` }
        ]
    },
];