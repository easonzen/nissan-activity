import http from 'utils/http';

export default function(file) {
    const formData = new FormData();

    formData.append('image', file);

    const config = {
        useJson: true
    };

    return http.post('http://39.106.221.165/app/u-image/by-company/890D05A417BE05A0/1', formData, config);

    // return new Promise((resolve, reject) => {
    //     const reader = new FileReader();

    //     reader.readAsDataURL(file);
    //     reader.onload = function(e) {
    //         if (this.result) {
    //             resolve({ url: this.result });
    //         } else {
    //             reject(new Error({ error_msg: '上传头像失败' }));
    //         }
    //     };
    // });
}
