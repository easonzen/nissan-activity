import React, { Component, Fragment } from 'react';
import { Field } from 'react-formutil';
import './style.scss';
import uploadFile from './uploadFile'; //上传文件的方法
import Loading from 'components/Loading';

//定义我们自己的表单控件组件
class FieldFile extends Component {
    state = {
        uploading: false
    };

    render() {
        const { uploading } = this.state;
        return (
            <Fragment>
                {uploading && <Loading global>头像上传中...</Loading>}
                <Field {...this.props}>
                    {$props => {
                        const selectFile = () => {
                            const fileInput = document.createElement('input');
                            fileInput.type = 'file';
                            fileInput.name = 'image';
                            fileInput.accept = 'image/*';
                            fileInput.onchange = () => {
                                this.setState({
                                    uploading: true
                                });
                                /* get file &upload */
                                const files = fileInput.files;
                                uploadFile(files[0])
                                    .then(
                                        resp => {
                                            //将文件地址更新到Field的状态中
                                            $props.$render(resp.data.url);
                                        },
                                        error => {
                                            alert('上传头像失败');
                                        }
                                    )
                                    .then(() => {
                                        this.setState({
                                            uploading: false
                                        });
                                    });
                            };

                            fileInput.click();
                        };

                        return (
                            <div className="upload-image">
                                <label className="upload-label">{$props.$value ? '上传成功' : '请上传您的头像'}</label>
                                {!$props.$value && <i className="upload-icon" onClick={selectFile} />}
                                {$props.$value && <img src={$props.$value} className="preview" alt="preview" />}
                                {$props.$value && (
                                    <button className="reUpload-btn" onClick={selectFile}>
                                        更改图片
                                    </button>
                                )}
                            </div>
                        );
                    }}
                </Field>
            </Fragment>
        );
    }
}

export default FieldFile;

// export default function FieldFile(props) {
//     return (
//         <Field {...props}>
//             {$props => {
//                 const selectFile = function() {
//                     const fileInput = document.createElement('input');
//                     fileInput.type = 'file';
//                     fileInput.name = 'image';
//                     fileInput.accept = 'image/*';
//                     fileInput.onchange = function() {
//                         /* get file &upload */
//                         const files = fileInput.files;
//                         uploadFile(files[0]).then(
//                             resp => {
//                                 //将文件地址更新到Field的状态中
//                                 $props.$render(resp.data.url);
//                             },
//                             error => {
//                                 alert('上传头像失败');
//                             }
//                         );
//                     };

//                     fileInput.click();
//                 };

//                 return (
//                     <div className="upload-image">
//                         <label className="upload-label">{$props.$value ? '上传成功' : '请上传您的头像'}</label>
//                         {!$props.$value && <i className="upload-icon" onClick={selectFile} />}
//                         {$props.$value && <img src={$props.$value} className="preview" alt="preview" />}
//                         {$props.$value && (
//                             <button className="reUpload-btn" onClick={selectFile}>
//                                 更改图片
//                             </button>
//                         )}
//                     </div>
//                 );
//             }}
//         </Field>
//     );
// }
