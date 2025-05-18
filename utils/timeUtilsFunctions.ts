import moment from "moment"
import 'moment/locale/fr'
moment.locale("fr")


export const getTimeDDMMYYYY  = (date: string) => {
    return {
        day: moment(date).format("DD"),
        month: moment(date).format("MMMM").split("")[0].toUpperCase() + moment(date).format("MMMM").slice(1),
        year: moment(date).format("YYYY"),
    }
}