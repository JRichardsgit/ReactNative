import axios from 'axios';

export default axios.create({
    baseURL: 'https:api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer aQboK6G84yWUtNgQ5gRIvwbmr2F0pyTZ0Z7xIQKwxAbAaFEXr4P0WrTXl0Wqz7hFY4yqcvcPNHwjkTVAWoo4sZHFar8Zhcd1FqF8LZ_85pQ0vEcRcKjEfb_SkvVJXXYx'
    }
});

