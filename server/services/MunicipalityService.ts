import data from "../data/municipalities.json"
import {getPopularCouncilsByMunicipalityId, PopularCouncil} from "~/server/services/PopularCouncilService";

type Municipality = {
    id: string,
    province_id: string
    name: string,
    slug: string,
    popularCouncils: PopularCouncil[]
}

const getMunicipalities = (withPopularCouncils: boolean = false): Municipality[] => {
    return data.map(item => {
        if (withPopularCouncils) {
            item.popularCouncils = getPopularCouncilsByMunicipalityId(item.id);
        }
        return item as Municipality
    })
}

const getMunicipalityBySlug = (slug: string, withPopularCouncils: boolean = false): Municipality | null => {
    const municipality = data.find((municipality) => municipality.slug === slug) as Municipality || null
    if (municipality) {
        if (withPopularCouncils) {
            municipality.popularCouncils = getPopularCouncilsByMunicipalityId(municipality.id)
        }
    }
    return municipality
}
const getMunicipalitiesByProvinceId = (provinceId: string, withPopularCouncils: boolean = false): Municipality[] => {
    const municipalities = data.filter((municipality) => municipality.province_id === provinceId) as Municipality[] || null

    if (withPopularCouncils) {
        municipalities?.forEach(municipality => municipality.popularCouncils = getPopularCouncilsByMunicipalityId(municipality.id))
    }

    return municipalities
}

export {
    Municipality,
    getMunicipalities,
    getMunicipalityBySlug,
    getMunicipalitiesByProvinceId
}