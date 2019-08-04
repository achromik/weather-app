export const groupForecastListByDate = array =>
    array.reduce((groups, item) => {
        const value = item['dt_txt'].substr(0, 10);

        groups[value] = groups[value] || [];
        groups[value].push(item);

        return groups;
    }, {});
