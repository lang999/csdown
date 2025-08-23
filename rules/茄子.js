const csdown = {
    d: [],
    author: '流苏',
    version: '20250825',
    rely: (data) => {
        return data.match(/\{([\s\S]*)\}/)[0].replace(/\{([\s\S]*)\}/, '$1')
    },
    home: () => {
        var d = csdown.d;
        if (!csdown.𝐜𝐨𝐝𝐞_) {
            csdown.𝐜𝐨𝐝𝐞_1();
        } else {
            if (getItem('up' + csdown.version, '') == '') {
                confirm({
                    title: '更新内容',
                    content: '版本号：' + csdown.version + '\n1.修复一些bug\n2.增加一些bug\n3.增加长按更新茄子服务器数据\n4.增加长按更换线路(没事别换)\n5.搜索界面增加搜索框\n6.增加av百科\n7.首页增加部分模块\n8.综合部分二级页面修改\n9.看不了的是服务器问题，与我无关\n10.修复瓜太郎二级页面空白问题\n11.临时修复部分模块，更新后自行重生或更换线路9\n12.茄子服务器已修复，自行更换为线路1\n13.修改漫画二级页面\n14.修复猫咪系列模块无法打开的问题\n15.百科增加模块，自行长按更新数据\n16.修复蘑菇视频播放(最好挂代理)\n17.修复搜索中部分模块图片不显示的问题\n18.修复图标及部分线路\n19.替换可用线路\n20.待续',
                    confirm: $.toString((version) => {
                        setItem('up' + version, '1')
                    }, csdown.version),
                    cancel: $.toString(() => {})
                })
            }
            if (MY_PAGE == 1) {
                d.push({   
                    title: "搜索 ",
                    url: $.toString(() => {
                        putMyVar('keyword', input)
                        return "hiker://empty?page=fypage&kw=" + input + '@rule=js:$.require("csdown").search()'
                    }),
                       desc: "请输入搜索关键词",
                       col_type: "input",
                    extra: {
                        defaultValue: getMyVar('keyword', ''),
                    }
                })
            };
            var list = [{
                title: '首页&综合',
                id: '1&2&3&4&5',
                img: 'https://gh-proxy.com/https://raw.githubusercontent.com/ls125781003/tubiao/main/movie/127.svg&https://gh-proxy.com/https://raw.githubusercontent.com/ls125781003/tubiao/main/movie/137.svg&https://gh-proxy.com/https://raw.githubusercontent.com/ls125781003/tubiao/main/movie/113.svg&https://gh-proxy.com/https://raw.githubusercontent.com/ls125781003/tubiao/main/movie/114.svg&https://gh-proxy.com/https://raw.githubusercontent.com/ls125781003/tubiao/main/movie/122.svg'
            }];
            if (MY_PAGE == 1) {
                function strong(d, c) {
                    return '‘‘’’<strong><font color=#' + (c || '000000') + '>' + d + '</font></strong>';
                }
                var index_n = list[0].id.split('&')[0];
                list.forEach(data => {
                    var title = data.title.split('&');
                    var id = data.id.split('&');
                    var img = data.img.split('&');
                    title.forEach((title, index) => {
                        d.push({
                            title: (getMyVar('首页', index_n) == id[index] ? strong(title, 'FF6699') : title),
                            img: img[index],
                            url: $('#noLoading#').lazyRule((title, id) => {
                                putMyVar('首页', id);
                                refreshPage(false);
                                return 'hiker://empty';
                            }, title, id[index]),
                            col_type: 'icon_2_round',
                            extra: {
                                longClick: [{
                                    title: '更新数据',
                                    js: $.toString(() => {
                                        eval($.require('csdown').rely($.require('csdown').aes));
                                    var fabu, gonggao, nbym;

function getFabu() {
    const basePaths = [
        'http://01.xka3a.top',
        'http://api.xka1.top',
        'http://s001.xka3b.top',
        'http://c001.xka3b.top',
        'http://y001.xka3b.top',
        'http://y002.xka3b.top'
    ];
    const path = '/encrypt/api.php?path=yuming/yuming';
    for (let base of basePaths) {
        try {
            let res = qzDecrypt(request(base + path));
            let match = res.match(/总域名(.*?)《/);
            if (match) return match[1];
        } catch (e) {
            log(`fabu 请求失败: ${base}`);
        }
    }
    log('所有 fabu 地址均请求失败');
    return null;
}

try {
    fabu = getFabu();
} catch (e) {
    log('fabu 获取失败');
}

try {
    if (fabu) {
        gonggao = qzDecrypt(request(fabu + '/encrypt/api.php?path=qiezi/qz'));
    }
} catch (e) {
    log('gonggao 获取失败');
}

try {
    if (gonggao) {
        nbym = gonggao.match(/内部域名(.*?)《/)[1];
    }
} catch (e) {
    log('gonggao 解析失败');
}

var dizhi = nbym || fabu || 'http://01.xka3a.top';

let shouye = qzDecrypt(request(dizhi + '/encrypt/api.php?path=qiezi/shouye'));
let data = qzDecrypt(request(dizhi + '/encrypt/api.php?path=qiezi/zonghe'));
let search = fetch(dizhi + '/searchconfig/vipapi/vipconfig.txt');
                                        // var kuozhan=qzDecrypt(request('http://y001.22s.mom/encrypt/api.php?path=qiezi/heikeji'));
                                        // var yuming=qzDecrypt(request('http
