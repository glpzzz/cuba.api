import {getProvinceBySlug} from "~/server/services/ProvinceService";

export default defineEventHandler((event) => {
    const slug = getRouterParam(event, "slug")
    if (!slug) throw Error("name not supplied")

    const query = getQuery(event)
    return getProvinceBySlug(decodeURIComponent(slug), (query.withMunicipalities || '') == 'true')
})
