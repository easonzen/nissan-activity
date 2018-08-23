import http from 'utils/http';

export default function(file) {
    const formData = new FormData();

    formData.append('file', file);

    const config = {
        useJson: true
    };

    return http.post('http://39.106.221.165/app/u-image/by-company/890D05A417BE05A0/1', formData, config);
}
