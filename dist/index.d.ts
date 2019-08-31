const map : (resultSet: [], maps: [], mapId: string, columnPrefix: string) => Array<any>
const mapOne : (resultSet: [], maps: [], mapId: string, columnPrefix: string) => Object
const NotFoundError : () => void

joinjs = {
    map,
    mapOne,
    NotFoundError
}

export default joinjs;