import data from "../data/provinces.json"
import {getMunicipalitiesByProvinceId, Municipality} from "~/server/services/MunicipalityService";

type Province = {
    id: string,
    name: string,
    slug: string,
    municipalities: Municipality[]
}

const getProvinces = (withMunicipalities: boolean = false): Province[] => {
    return data.map(item => {
        if (withMunicipalities) {
            item.municipalities = getMunicipalitiesByProvinceId(item.id);
        }
        return item as Province
    })
}

const getProvinceBySlug = (slug: string, withMunicipalities: boolean = false): Province | null => {
    const province = data.find((province) => province.slug === slug) as Province || null
    if (province) {
        if (withMunicipalities) {
            province.municipalities = getMunicipalitiesByProvinceId(province.id)
        }
    }
    return province
}

export {
    Province,
    getProvinces,
    getProvinceBySlug
}