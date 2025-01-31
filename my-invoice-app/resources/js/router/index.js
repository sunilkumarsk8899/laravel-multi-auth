import { createRouter, createWebHashHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue'
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'invoiceIndex',
        component: invoiceIndex
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
