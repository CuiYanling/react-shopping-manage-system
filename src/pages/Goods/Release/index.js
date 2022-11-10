import {Button, Card, Cascader, Form, Input,} from 'antd';
import WangEditor from "../../../componnents/WangEditor";

function Release() {


    return (
        <Card title="发布商品">
            <Form labelCol={{span: 2}} wrapperCol={{span: 22}}>
                <Form.Item label="商品分类" name="category"
                           rules={[
                               {required: true, message: '请选择商品分类！'}
                           ]}>
                    <Cascader/>
                    {/*<Space>*/}
                    {/*    <Select style={{width: 200}}>*/}
                    {/*        <Select.Option value="1">111</Select.Option>*/}
                    {/*    </Select>*/}
                    {/*    <Select style={{width: 200}}>*/}
                    {/*        <Select.Option value="2">222</Select.Option>*/}
                    {/*    </Select>*/}
                    {/*    <Select style={{width: 200}}>*/}
                    {/*        <Select.Option value="3">333</Select.Option>*/}
                    {/*    </Select>*/}
                    {/*</Space>*/}
                </Form.Item>

                <Form.Item label="商品名称" name="title" extra="商品标题名称长度至少3个字符，最长200个汉字"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input/>
                </Form.Item>

                <Form.Item label="商品卖点" name="description" extra="商品卖点不能超过140个汉字"
                           rules={[
                               {required: true, message: '请输入商品卖点！'},
                               {type: 'string', min: 2, message: '商品卖点至少2个字符！'}
                           ]}>
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item label="商品价格" name="title"
                           extra="价格必须是0-999999之间的数字，且不能高于市场价，此价格为商品实际销售价格，如果商品存在规格，该价格显示最低价格"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input prefix="￥" suffix="RMB"/>
                </Form.Item>

                <Form.Item label="市场价" name="title"
                           extra="价格必须是0-999999之间的数字，此价格仅为市场参考价，请根据实际情况认真填写"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input prefix="￥" suffix="RMB"/>
                </Form.Item>

                <Form.Item label="成本价" name="title"
                           extra="价格必须是0-999999之间的数字，此价格为商户对所销售的商品的实际成本价进行备注记录，非必填选项，不会在前台销售页面中显示"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input prefix="￥" suffix="RMB"/>
                </Form.Item>

                <Form.Item label="折扣" name="title" extra="根据销售价与市场价比例自动生成，不需要编辑"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input suffix="%" disabled/>
                </Form.Item>

                <Form.Item label="商品库存" name="title"
                           extra="库存必须是0-999999之间的整数"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input suffix="件"/>
                </Form.Item>

                <Form.Item label="商品货号" name="title"
                           extra="商品货号是商家管理商品的编号，买家不可见，最多输入20个字符，只支持输入中文、字母、数字、_、/、-和小数点"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input/>
                </Form.Item>

                <Form.Item name="main_photo" label="主图" extra="上传商品默认主图，如多规格时将默认图片或分规格上传规格主图，支持jpg、if、png格式上传或从图片空间选中，建议使用尺寸
            800*800像素以上，大小不超过1M的正方形图片，上传后的图片将自动保存在图片空间的默认分类中"
                           rules={[{required: true, message: '请选择上传一张商品主图！'}]}>
                    <p>主图上传</p>
                </Form.Item>
                <Form.Item label="商品轮播图" name="content" extra="上传商品默认主图，如多规格时将默认图片或分规格上传规格主图，支持jpg、if、png格式上传或从图片空间选中，建议使用尺寸
            800*800像素以上，大小不超过1M的正方形图片，上传后的图片将自动保存在图片空间的默认分类中"
                           rules={[{required: true, message: '请输入商品内容！'}]}>
                    <p>轮播图</p>
                </Form.Item>

                <Form.Item label="内容" name="content" rules={[{required: true, message: '请输入商品内容！'}]}>
                    <WangEditor editorConfig={{MENU_CONF: {uploadImage: {server: '/upload/demo'}}}}></WangEditor>
                </Form.Item>

                <Form.Item label="运费" name="title"
                           extra="运费设为0，前台商品将显示免运费"
                           rules={[
                               {required: true, message: '请输入商品名称！'},
                               {type: 'string', min: 3, message: '商品名称至少3个字符！'}
                           ]}>
                    <Input prefix="￥" suffix="RMB"/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 2, span: 22}}>
                    <Button type="primary" htmlType="submit">
                        发布商品
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    )
}

export default Release;