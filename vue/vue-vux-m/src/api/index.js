import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: '/users',
        method: 'get',
        params: {}
    });
};
