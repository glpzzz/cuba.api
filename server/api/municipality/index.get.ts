import {getMunicipalities} from "~/server/services/MunicipalityService";

export default defineEventHandler((event) => {
    return getMunicipalities()
})