import data from "../data/popular_councils.json"

type PopularCouncil = {
    province_id: string
    municipality_id: string
    name: string,
    slug: string,
}

const getPopularCouncils = (): PopularCouncil[] => {
    return data.map(item => {
        return item as PopularCouncil
    })
}

const getPopularCouncilBySlug = (slug: string): PopularCouncil | null => {
    return data.find((popularCouncil) => popularCouncil.slug === slug) as PopularCouncil || null
}
const getPopularCouncilsByMunicipalityId = (municipalityId: string): PopularCouncil[] => {
    return data.filter((popularCouncil) => popularCouncil.municipality_id === municipalityId) as PopularCouncil[] || null
}

export {
    PopularCouncil,
    getPopularCouncils,
    getPopularCouncilBySlug,
    getPopularCouncilsByMunicipalityId
}