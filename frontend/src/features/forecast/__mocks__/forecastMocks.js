export const forecastErrorMock = {
    cod: 401,
    message: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.',
};

export const forecastMock = {
    cod: '200',
    message: 0.0096,
    cnt: 2,
    list: [
        {
            dt: 1564866000,
            main: {
                temp: 299.38,
                temp_min: 297.12,
                temp_max: 299.38,
                pressure: 1013.19,
                sea_level: 1013.19,
                grnd_level: 974.14,
                humidity: 86,
                temp_kf: 2.26,
            },
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'clear sky',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: {
                speed: 0.72,
                deg: 284.654,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2019-08-03 21:00:00',
        },
        {
            dt: 1564876800,
            main: {
                temp: 303.4,
                temp_min: 301.7,
                temp_max: 303.4,
                pressure: 1013.11,
                sea_level: 1013.11,
                grnd_level: 974.31,
                humidity: 66,
                temp_kf: 1.7,
            },
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'clear sky',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: {
                speed: 1.99,
                deg: 68.054,
            },
            sys: {
                pod: 'd',
            },
            dt_txt: '2019-08-04 00:00:00',
        },
    ],
    city: {
        id: 1851632,
        name: 'Shuzenji',
        coord: {
            lat: 34.9667,
            lon: 138.9333,
        },
        country: 'JP',
        timezone: 32400,
    },
};

export const forecastStateMock = {
    forecast: {
        isFetching: false,
        fetchedSuccessfully: false,
        data: {},
        error: {},
    },
};
