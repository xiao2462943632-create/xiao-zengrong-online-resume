# 肖增荣｜个人简历与成长记录

这是一个纯 HTML、CSS、JavaScript 制作的静态在线简历页面，可直接部署到 GitHub Pages。

## 当前内容

- 首页个人信息、头像、联系方式与 PDF 简历下载。
- 按时间线展示 5 项真实成果：挑战杯、全国大学生电子设计竞赛、雄鹰杯、CET-4、CET-6。
- 成果图片已整理到 `assets/images/achievements/`。
- 英语四六级成绩单使用网页专用脱敏副本，遮挡身份证号、准考证号、报告单编号、二维码和校验码。
- 时间线支持按类别筛选，点击照片或“查看照片”可打开同页图片弹窗。

## 项目结构

```text
个人简历/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
├─ assets/
│  ├─ files/
│  │  └─ resume.pdf
│  └─ images/
│     ├─ avatar.jpg
│     └─ achievements/
│        ├─ cet4-redacted.jpg
│        ├─ cet6-redacted.jpg
│        ├─ challenge-onsite.jpg
│        ├─ challenge-proof.png
│        ├─ challenge-team.jpg
│        ├─ eagle-cup-gold.jpg
│        ├─ electronic-award-list.jpg
│        └─ electronic-team.jpg
└─ qa_final/
```

## 本地预览

直接双击 `index.html` 即可预览。也可以在当前目录启动静态服务器：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 修改时间线

时间线数据集中在 `script.js` 顶部的 `timelineData` 数组中。新增成果时复制一个对象，修改 `id`、`date`、`title`、`award`、`description`、`category`、`categoryClass` 和 `images` 即可。

分类对应关系：

| 分类 | categoryClass |
| --- | --- |
| 论文 | paper |
| 竞赛 | competition |
| 奖学金 | scholarship |
| 其他 | other |

建议继续使用英文或数字文件名存放图片，避免部署后路径编码问题。

## GitHub Pages 部署

1. 创建新的 GitHub 仓库。
2. 上传本目录中的所有文件，确保 `index.html` 位于仓库根目录。
3. 在仓库 Settings -> Pages 中选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/ (root)`。
5. 保存后等待部署完成，访问 `https://用户名.github.io/仓库名/`。
