import React, {useState, useEffect} from 'react';
import {Editor, Toolbar} from '@wangeditor/editor-for-react';
import '@wangeditor/editor/dist/css/style.css';
import styles from './index.module.css';
//深度合并的方法
import {merge} from 'lodash';

function WangEditor(props) {
    //属性
    let {value, toolbarConfig, editorConfig} = props;

    // editor 实例
    const [editor, setEditor] = useState(null);

    //两个默认配置：【外面如果不传入的话，使用默认配置】
    // 工具栏配置
    const default_toolbar_config = {}
    //合并——工具栏配置【需要深度合并；浅拷贝的话，外面传进来的直接覆盖里面默认的，将有些要使用的默认数据也给覆盖了】
    let combine_toolbar_config = merge(default_toolbar_config, toolbarConfig);

    // 编辑器配置
    const default_editor_config = {
        MENU_CONF: {},
    }
    default_editor_config.MENU_CONF['uploadImage'] = {
        server: `${process.env.REACT_APP_HOST}/upload/editor`,
        // form-data 中 fieldName ，默认值 'wangeditor-uploaded-image'
        fieldName: 'file',
        // 自定义添加header
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
        },
    }
    //合并——编辑器配合
    let combine_editor_config = merge(default_editor_config, editorConfig);

    //编辑事件
    let handleChange = (editor) => {
        //获取文本内容
        let content = editor.getHtml();
        // console.log(content);
        //向父级组件发送消息，携带富文本
        props.onChange(content);
    }


    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <div className={styles.editor_container}>
            <Toolbar
                editor={editor}
                defaultConfig={combine_toolbar_config}
                mode="default"
                className={styles.tool_bar}
            />
            <Editor value={value}
                    onChange={handleChange}
                    defaultConfig={combine_editor_config}
                    onCreated={setEditor}
                    mode="default"
                    className={styles.editor}
            />
        </div>
    )

}

export default WangEditor;