import React, { useState } from 'react';
import "./NotFound.css";
import 'antd/dist/antd.css';
import { Upload, message, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons';

function NotFound() {

    const [uploadImage, setuploadImage] = useState(null);

    const [imageUrl, setimageUrl] = useState(null);

    const [loading, setloading] = useState(false);

    const [fileList, setfileList] = useState([]);

    const [previewDetails, setpreviewDetails] = useState({
        previewVisible: false,
        previewImage: ''
    })

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          });
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = ({ fileList }) => {
        console.log(fileList, fileList.length,fileList[fileList.length - 1].originFileObj);
        setfileList([fileList[fileList.length - 1]]);
        setuploadImage(fileList[fileList.length - 1].originFileObj);
    }

    const handlePreview = async file => {
        console.log(file);
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
          }
        setpreviewDetails({...previewDetails, previewVisible: true, previewImage: file.url || file.preview});
    }

    const handleCancel = () => {
        setpreviewDetails({...previewDetails, previewVisible: false });
    }

    return (
        <div>
            <p>NotFound</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                        <Upload
                            accept=".jpg,.png,.jpeg,.svg"
                            name="avatar"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            className="avatar-uploader"
                            fileList={fileList}
                            beforeUpload={() => false}
                            onChange={handleChange}
                            onRemove={() => false}
                            onPreview={handlePreview}
                        >
                            <PlusOutlined />
                            <div className="ant-upload-text">Upload</div>
                        </Upload>

                        <Modal
                            visible={previewDetails.previewVisible}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewDetails.previewImage} />
                        </Modal>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
