import {getMunicipalityBySlug} from "~/server/services/MunicipalityService";

export default defineEventHandler((event) => {
    const slug = getRouterParam(event, "slug")
    if (!slug) throw Error("name not supplied")

    const query = getQuery(event)
    return getMunicipalityBySlug(decodeURIComponent(slug), (query.withPopularCouncils || '') == 'true')
})
