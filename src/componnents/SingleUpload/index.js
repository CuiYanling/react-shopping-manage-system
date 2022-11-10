import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {message, Space, Upload} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'


function SingleUpload(props) {
    //自定义组件需要遵循的规则 ： value属性 + onchange事件
    //设置一些默认值
    let {value, action, headers = {}, data = {}} = props;
    let [default_file_list, set_default_file_list] = useState([]);
    //默认文件列表：defaultfilelist属性：
    useEffect(() => {
        set_default_file_list(
            [{
                //获取当前的一个时间戳
                uid: Date.now(),
                name: 'avatar.png',
                status: 'done',
                url: value,
                thumbUrl: value,
            }]
        )
    }, [props.value])

    // 上传标示（默认false 此时没有上传）
    const [loading, setLoading] = useState(false);
    // 上传之前的样式
    const uploadButton = (
        <Space direction="vertical">
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div>上传</div>
        </Space>
    );

    //默认header   Upload组件headers[添加token ！！！]
    let default_headers = {Authorization: `Bearer ${sessionStorage.token}`};
    // 合并headers
    let combine_headers = {...default_headers, ...headers};
    // 默认额外参数
    let default_data = {type: 'avatar'};
    // 合并额外参数
    let combine_data = {...default_data, ...data};

    //上传之前的检查
    const handleBeforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('您仅能上传 JPG/PNG 图片!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片体积必须小于 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    // Upload组件上传处理函数
    let handleUploadChange = ({file, fileList, event}) => {
        console.log(file);
        // 上传中
        if (file.status === 'uploading') {
            //开启旋转图标，表示上传中
            setLoading(true);
            return;
        }
        // 上传成功
        if (file.status === 'done') {
            // 删除原来的图片，只保留最后一张成功的图片
            fileList.reverse();
            fileList.splice(1, fileList.length - 1);
            //想父级组件发送消息
            props.onChange(file.response.src);
            // 关闭loading
            setLoading(true);
            return;
        }
        // 上传失败
        if (file.status === 'error') {
            let {status, url} = file.error;
            let {msg} = file.response;
            switch (status) {
                case 400:
                    message.error(`错误：${status}，${msg}，API接口地址：${url}！`);
                    break;
                case 401:
                    message.error(`错误：${status}，请携带身份token，API接口地址：${url}！`);
                    break;
                case 404:
                    message.error(`错误：${status}，地址不存在，API接口地址：${url}！`);
                    break;
                default:
                    message.error(`错误：${status}，API接口地址：${url}`);
                    break;
            }
            setLoading(false);
            return;
        }
    }

    return (
        //    {/*Upload组件  */}
        <Upload listType="picture-card" className="avatar-uploader" showUploadList={false}
                defaultFileList={default_file_list}
                action={action} headers={combine_headers} data={combine_data}
                onChange={handleUploadChange} beforeUpload={handleBeforeUpload}>
            {/*判断是否存在图片，存在的话显示图片，不存在的话显示一个 加号组件*/}
            {value ? (<img src={value} alt="avatar" style={{width: '100%'}}/>) : (uploadButton)}
        </Upload>
    )
}

//类型检查
SingleUpload.propTypes = {
    value: PropTypes.string,
    action: PropTypes.string.isRequired,
    headers: PropTypes.object,
    data: PropTypes.object,
}


export default SingleUpload;