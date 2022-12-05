import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'helloworld',//此处为网站首页显示名称
    logo: 'logo.png',
    favicons: ['favicon.ico'],
    footer: 'Copyright © 2022 | Powered by <a href="https://github.com/workbzw" target="_blank" rel="noreferrer">workbzw@outlook.com</a><div>备案号：京ICP备2022031958号</div><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402013434" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="gawb.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京公网安备 11011402013434号</p></a>\n</div>'
  },
  analytics: {
    // // google analytics 的 key (GA 4)
    // ga_v2: 'G-abcdefg',
    // // 若你在使用 GA v1 旧版本，请使用 `ga` 来配置
    // ga: 'ga_old_key',
    // 百度统计的 key
    baidu: '3f2e09dc2c6041d6571aae44ceef9a00',
  }
});
