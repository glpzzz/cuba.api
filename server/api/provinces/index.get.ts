import {getProvinces} from "~/server/services/ProvinceService";

export default defineEventHandler((event) => {
    return getProvinces()
})